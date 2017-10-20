import debug from 'debug';
const namespace = 'bc:services:user';

export default class User {

    constructor() {
        debug(namespace)('constructor');
    }

    async findAll() {
        let users = await models.User.findAll();
        return users;
    }

    async auth(username, password) {
        let options = {
            where: {
                username, password
            }
        };
        let user = await models.User.findOne(options);
        return user ? true : false;
    }

    async findByUsername(username) {
        let options = {
            where: {
                username
            }
        };
        let user = await models.User.findOne(options);
        return user;
    }
}
