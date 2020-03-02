const request = require('supertest');
const server = require('../../api/server');



describe("Auth Testing", () => {

    describe("Get /", () => {
        
        it(" Should return 200 OK", async () => {
            const res  = await request(server).get('/api/auth')

            expect(res.status).toBe(200);

        });

        it("Should return json formatted body", async () => {
            const res = await request(server).get('/api/auth');

            expect(res.type).toMatch(/json/i);
        });

        it("Should return json data", async () => {
            const res = await request(server).get('/api/auth');
            expect(res.body.message).toMatch(/auth/i);
        });
    });

    describe('POST /register', () => {
        
        it("add user to db and return json", async () => {
            const res = await request(server).post('/api/auth/register')
            .send({
               "username": "johnDoe",
               "password": "password12345",
               "is_land_owner": true
            })
            .set('Accept', 'application/json')

            expect(res.status).toBe(201);
            expect(res.body.username).toBe('johnDoe');
        });

    });
   
});