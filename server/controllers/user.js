import _ from 'lodash';
const { validateFields } = require('../utils/fields');
const jwt = require('jsonwebtoken');
var debug = require('debug')('bc:controllers:user');

export default class User {

    async index(ctx) {
        // let req = ctx.request;
        // let limit = req.query.limit;
        try {
            let users = await userService.findAll();
            ctx.body = { users };
        } catch (error) {
            ctx.body = error;
            ctx.status = error.status;
        }
    }

    async show(ctx) {
        try {
            let userId = ctx.state.user.sid;
            let user = await models.User.findById(userId);
            user = user.dataValues;
            user = _.omit(user, ['password']);
            ctx.body = user;
        } catch (error) {
            ctx.body = error;
            ctx.status = error.status;
        }
    }

    async store(ctx) {
        try {
            let req = ctx.request;
            let values = req.body;

            values = _.pick(values, [
                'username',
                'email',
                'password'
            ]);

            validateFields(values, [
                'username',
                'email',
                'password'
            ]);

            let user = await models.User.create(values);
            debug('create success');
            ctx.body = user;
        } catch (error) {
            ctx.body = error;
            ctx.status = error.status;
        }
    }

    async update(ctx) {
        try {
            debug('update success');
            let req = ctx.request;
            let userId = ctx.params.userId;
            let values = req.body;

            values = _.pick(values, [
                'username',
                'email',
                'password'
            ]);

            let options = {
                where : {
                    id : userId
                }
            };
            let user = await models.User.findOne(options);
            user.username = values.username;
            user.email = values.email;
            user.password = values.password;
            await user.save();
            ctx.body = user;
        } catch (error) {
            ctx.body = error;
            ctx.status = error.status;
        }
    }

    async logout(ctx) {

    }
}
