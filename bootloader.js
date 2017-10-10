import Config from './config';
import Middleware from './server/middleware/index';
import Models from './server/boot/models';

export default function(app){
    let config = new Config();
    var modelInstance = new Models(config);

    global.models = modelInstance.getDb();
    global.modelInstance = modelInstance;

    if(app){
        app.config = config;
        new Middleware(app);
    }
}
