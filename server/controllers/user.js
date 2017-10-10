export default class User {
    async index(ctx) {
        let users = await models.User.findAll();
        ctx.body = { users };
    }
}
