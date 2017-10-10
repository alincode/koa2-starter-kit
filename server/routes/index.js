import Router from 'koa-router';
import UserController from '../controllers/user';

export default class Routes {

    constructor(app) {
        this.app = app;
        this.userController = new UserController();
    }

    apiRouterInit(){
        var apiGroupRouter = new Router();
        var apiRouter = new Router();
        apiRouter.get('/user', this.userController.index);


        apiGroupRouter.use('/api', apiRouter.routes(), apiRouter.allowedMethods());
        this.apiGroupRouter = apiGroupRouter;
    }
}
