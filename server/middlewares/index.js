import cors from 'koa2-cors';
import convert from 'koa-convert';
import bodyparser from 'koa-bodyparser';
import responseTime from 'koa-response-time';
import logger from 'koa-logger';
import koaStatic from 'koa-static';
import path from 'path';
import Routes from '../routes/index';
import debug from 'debug';
const namespace = 'bc:middlewares';

export default class Middleware {

    constructor(app) {
        debug(namespace)('init');

        // middleware order
        // app.context.onerror = errorHandler;
        app.use(koaStatic(
            path.join(__dirname, '../../public/')
        ));
        app.use(convert(responseTime()));
        app.use(convert(logger()));
        app.use(cors());
        app.use(bodyparser());

        let routes = new Routes(app);
        routes.init();
    }
}
