const request = require('supertest');
const server = require('../../api/server');


describe("Users", () => {

    describe('GET /', () => {

        it("Should return 200 OK", async () => {
            const res = await request(server).get('/api/users')

            expect(res.status).toBe(200);
        });

        it("Should return an array of json", async () => {
            const res = await request(server).get('/api/users')

            expect(Array.isArray(res.body)).toBe(true);
        });

        it("Should json formatted body", async () => {
            const res = await request(server).get('/api/users');
            expect(res.type).toMatch(/json/i);
        });
    });

    describe('POST /Register', () => {

        it("should return created user", async () => {
            const res = await request(server).post('/api/users/register')

            

        });

    });
});