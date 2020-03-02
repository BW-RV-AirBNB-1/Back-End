const request = require('supertest');
const server = require('../../api/server');


describe("Users", () => {

    describe('GET /', () => {

        it("Should return 200 OK", async () => {
            const res = await request(server).get('/api/users')

            expect(res.status).toBe(200);
        });

        it("Should jsob body", async () => {
            const res = await request(server).get('/api/users')

            expect(res.type).toMatch(/json/i)
        });

        it("Should jsob body", async () => {
            const res = await request(server).get('/api/users');
            expect(res.body.data[0].username).toMatch(/testyMcTesty/i);
        });
    });
});