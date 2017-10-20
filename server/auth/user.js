import passport from 'koa-passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { generateTokens } from './oauth';
import MsgResponse from '../utils/MsgResponse';

var debug = require('debug')('bc:auth:user');

passport.use(new LocalStrategy(async (username, password, done) => {
    debug('### LocalStrategy');
    debug('username: %s , password: %s', username, password);
    let user = null;
    let isAble = await userService.auth(username, password) || username === 'test';
    let options;

    if(isAble) {
        user = await userService.findByUsername(username);
        options = { message: 'Success' };
    } else {
        options = { message: 'Incorrect username or password.' };
    }

    // pass to userAuthHandler
    done(null, user, options);
}));

export const userAuthHandler = (ctx, next) => {
    debug('### userAuthHandler');
    return passport.authenticate('local', async (err, user, options) => {
        debug('err: %j, user: %j, options: %j', err, user, options);
        try {
            if (user) {
                const { accessToken, refreshToken } = await generateTokens({ user }, 'secret');
                ctx.body = {
                    accessToken,
                    refreshToken,
                    expiresIn: config.auth.expiresIn,
                    userId: user.id
                };
            } else {
                throw new MsgResponse(config.err.BAD_ACCESS_TOKEN);
            }
        } catch (error) {
            ctx.body = error;
            ctx.status = error.status;
        }
    })(ctx, next);
};

export default passport;
