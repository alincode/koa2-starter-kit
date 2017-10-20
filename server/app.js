import debug from 'debug';
import Koa from 'koa';
import Services from './services';

var app = new Koa();

import bootloader from '../bootloader';
bootloader(app);

global.app = app;
let config = app.config;
global.config = config;
global.services = new Services();

global.server = app.listen(config.port, async () => {
    if (process.env.NODE_ENV !== 'test'){
        await modelInstance.resetDb();
    }

    let values = {
        username: 'alincode',
        password: 'alincode',
        email: 'alincode@gmail.com'
    };
    await models.User.create(values);

    const namespace = 'bc:app';
    debug(namespace)(`listening on http://${config.domain}:${config.port}`);
});

export default app;
