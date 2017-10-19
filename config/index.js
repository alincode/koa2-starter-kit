import debug from 'debug';
import config from 'config';
import err from './resource/errorCode';

const namespace = 'bc:config';

export default class Config {

    constructor() {
        debug(namespace)(`This env is ${process.env.NODE_ENV}.`);
        this.port = process.env.PORT || config.port;
        this.domain = process.env.DOMAIN || config.domain;
        this.connection = config.connection;
        this.err = err;
    }
}
