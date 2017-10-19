import UserService from './user';

export default class Services {

    constructor() {
        global.userService = new UserService();
    }

}
