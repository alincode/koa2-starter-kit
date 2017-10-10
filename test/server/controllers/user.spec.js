var debug = require('debug')('bc:test:api:user');

describe('user', () => {

    before(async () => {
        let data = {
            'username': 'alincode',
            'password': 'ooxxooxx',
            'email': 'alincode@gmail.com'
        };
        await models.User.create(data);
    });

    it('2 + 2 should be equal to 4', async () => {
        let res = await agent.get('/api/user');
        debug('response %j', res.body);
        (res.statusCode).should.to.be.equal(200);
        let result = res.body;
        result.users[0].email.should.to.be.string;
    });
});
