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
}
