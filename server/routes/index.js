import Router from 'koa-router';
import UserController from '../controllers/user';
import debug from 'debug';
const namespace = 'bc:routes';

export default class Routes {

    constructor(app) {
        debug(namespace)('constructor');
        this.app = app;
        this.userController = new UserController();
    }

    init(){
        debug(namespace)('apiRouterInit');
        var apiGroup = new Router();
        let api = new Router();

        api.get('/users', this.userController['index']);
        api.post('/users', this.userController['store']);
        api.get('/users/:userId', this.userController['show']);
        api.put('/users/:userId', this.userController['update']);

        apiGroup.use('/api', api.routes(), api.allowedMethods());

        this.app.use(apiGroup.routes());
    }
}
