import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
chai.should();
import request from 'supertest-as-promised';
// import sinon from 'sinon';
require('../../server/app');

before(async() => {
    await modelInstance.resetDb();
    global.agent = request.agent(server.listen());
    global.request = request;
});
