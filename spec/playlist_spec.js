const req = require('request')
const server = require('../server');

describe('Server', () => {
    let serverInstance;
    beforeEach(function (done) {
        serverInstance = server.run(done);
    });

    afterEach(function (done) {
        serverInstance.close(done);
    });
})


describe('List all musicians', function () {
    const endpoint = 'http://localhost:3090/playlist/all'
    it('should return 200 response code if succesfull', (done) => {
        req.get(endpoint, (error, res) => {
            expect(res.statusCode).toEqual(200);
            done();
        });
    });

    it('should return a json object', (done) => {
        req.get(endpoint, { json: true, body: {} }, (error, res) => {
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
});

