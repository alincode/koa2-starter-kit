import debug from 'debug';
import Koa from 'koa';
var app = new Koa();
import bootloader from '../bootloader';
bootloader(app);
global.app = app;
let config = app.config;

global.server = app.listen(config.port, async () => {
    if (process.env.NODE_ENV !== 'test'){
        await modelInstance.resetDb();
    }
    const namespace = 'bc:app';
    debug(namespace)(`listening on http://${config.domain}:${config.port}`);
});

export default app;
