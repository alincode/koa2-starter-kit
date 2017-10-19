import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import debug from 'debug';
const namespace = 'bc:boot:models';

function fileList(dir) {
    return fs.readdirSync(dir).reduce(function (list, file) {
        var name = path.join(dir, file);
        var isDir = fs.statSync(name).isDirectory();
        return list.concat(isDir ? fileList(name) : [name]);
    }, []);
}

export default class Models{

    constructor(config) {
        debug(namespace)('constructor');
        this.config = config;
        const { connection } = config;
        const { database, username, password, options } = connection;
        let sequelize = new Sequelize(database, username, password, options);
        let modelsDir = path.join(path.resolve(), 'server/models');
        let allModelNames = fileList(modelsDir).map((file) => file.split(path.sep).slice(-1)[0].split('.')[0]);
        let models = [];

        allModelNames.map(function(collectionName) {
            var model = require('../models/' + collectionName);
            models.push(model.default.getModel(sequelize));
            return true;
        });

        let db = {};

        models.forEach((model) => {
            db[model.name] = model;
        });

        Object.keys(db).forEach((modelName) => {
            if ('associate' in db[modelName]) {
                db[modelName].associate(db);
            }
        });

        this.db = db;
        this.db.sequelize = sequelize;
    }

    getDb() {
        return this.db;
    }

    async resetDb() {
        await models.sequelize.sync({
            force: this.config.connection.force
        });
    }
}
