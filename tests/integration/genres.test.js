const request = require('supertest');
let server;


describe('/api/genres', () => {
    beforeEach(() => {server = require('../../index');})
    afterEach(() => {server.close();})

    describe('GET /', () => {
        it('should return all genres', async () => {
            const result = await request(server).get('/api/genres');
            expect(result.status).toBe(200);
        });
    });
});