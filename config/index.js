import debug from 'debug';
import config from 'config';
import err from './resource/errorCode';

const namespace = 'bc:config';

export default class Config {

    constructor() {
        debug(namespace)(`This env is ${process.env.NODE_ENV}.`);
        this.port = process.env.PORT || config.port;
        this.domain = process.env.DOMAIN || config.domain;
        let connection = config.connection;
        connection.username = process.env.MYSQL_USER || config.connection.username;
        connection.password = process.env.MYSQL_PASS || config.connection.password;
        this.connection = connection;
        this.err = err;
        this.auth = {
            refreshTokenTtl: 60 * 5,
            accessTokenTtl: 60 * 1,
            expiresIn: 60
        };
    }
}
