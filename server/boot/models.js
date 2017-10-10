// import fs from 'fs';
// import path from 'path';
import Sequelize from 'sequelize';
import debug from 'debug';
const namespace = 'bc:boot:models';

// let __dirname = path.join(path.resolve(), "server/models");

export default class Models {

    constructor(config) {
        debug(namespace)('constructor');
        this.config = config;
        const { connection } = config;
        var sequelize = new Sequelize(connection.database, connection.username, connection.password, connection.options);

        var models = [];

        ['User'].map(function(collectionName) {
            var model = require('../models/' + collectionName);
            models.push(model.default.getModel(sequelize));
            return true;
        });

        var db = {};

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
