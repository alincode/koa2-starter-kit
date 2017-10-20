import Router from 'koa-router';
import debug from 'debug';
import UserController from '../controllers/user';
const namespace = 'bc:routes';
import { userAuthHandler } from '../auth/user';

export default class Routes {

    constructor(app) {
        debug(namespace)('constructor');
        this.app = app;
        this.userController = new UserController();
    }

    initialize(){
        debug(namespace)('apiRouterInit');
        var apiGroup = new Router();
        let api = new Router();
        api.post('/auth/user/signup', this.userController['store']);
        // api.post('/auth/user/login', this.userController['login']);
        api.post('/auth/user/login', userAuthHandler);
        api.get('/auth/user/logout', this.userController['logout']);
        api.get('/users', this.userController['index']);
        api.get('/users/:userId', this.userController['show']);
        api.put('/users/:userId', this.userController['update']);

        apiGroup.use('/api', api.routes(), api.allowedMethods());

        this.app.use(apiGroup.routes());
    }
}
