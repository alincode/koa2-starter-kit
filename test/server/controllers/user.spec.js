var debug = require('debug')('bc:test:api:user');

describe('user', () => {

    let data = {
        'username': 'alincode',
        'password': 'ooxxooxx',
        'email': 'alincode@gmail.com'
    };

    it('store', async () => {
        let res = await agent.post('/api/users').send(data);
        debug('response %j', res.body);
        (res.statusCode).should.to.be.equal(200);
        // let result = res.body;
        // result.users[0].email.should.to.be.string;
    });

    it('update', async () => {
        let data = {
            'email': 'alincode2@gmail.com'
        };
        let res = await agent.put('/api/users/1').send(data);
        debug('response %j', res.body);
        (res.statusCode).should.to.be.equal(200);
        let result = res.body;
        result.email.should.to.be.string;
        result.email.should.be.equal(data.email);
    });
});
