import cors from 'koa2-cors';
import convert from 'koa-convert';
import bodyparser from 'koa-bodyparser';
import responseTime from 'koa-response-time';
import logger from 'koa-logger';
import Routes from '../routes/index';
import debug from 'debug';
import koaSwagger from 'koa2-swagger-ui';
const namespace = 'bc:middleware';

export default class Middleware {

    constructor(app) {
        debug(namespace)('init');

        // middleware order
        app.use(convert(responseTime()));
        app.use(logger());
        app.use(cors());
        app.use(bodyparser());

        var routes = new Routes(app);
        routes.apiRouterInit();
        app.use(routes.apiGroupRouter.routes());

        app.use(koaSwagger({
            routePrefix: '/swagger',
            swaggerOptions: {
                url: 'http://petstore.swagger.io/v2/swagger.json', // example path to json
            },
        }));

        app.use(ctx => {
            ctx.body = 'Hello World';
        });
    }
}
