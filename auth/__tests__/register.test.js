const request = require('supertest');
const server = require('../../api/server');



describe("Register Route Testing", () => {

    describe("Get /", () => {
        
        it(" Should return 200 OK", async () => {
            const res  = await request(server).get('/api/register')

            expect(res.status).toBe(200);

        });

        it("Should return json formatted body", async () => {
            const res = await request(server).get('/api/register');

            expect(res.type).toMatch(/json/i);
        });

        it("Should return json data", async () => {
            const res = await request(server).get('/api/register');
            expect(res.body.message).toMatch(/register/i);
        });
    });

    describe('POST /register', () => {

        describe('POST /register data validation', () => {

            it("should return 400 on username validate error", async () => {
                const res = await request(server).post('/api/register')
                .send({
                    "username": "john",
                    "password": "password12345",
                    "is_land_owner": true
                 })
    
                 expect(res.status).toBe(400);
                 expect(res.body.message).toMatch(/invalid entry/i)
            });
    
            it("should return 400 on password validate error", async () => {
                const res = await request(server).post('/api/register')
                .send({
                    "username": "johnDoe",
                    "password": "pass",
                    "is_land_owner": true
                 })
    
                 expect(res.status).toBe(400);
                 expect(res.body.message).toMatch(/invalid entry/i)
            });
        });
    
        describe('POST /register add new user', () => {
            it("add user to db and return json", async () => {
                const res = await request(server).post('/api/register')
                .send({
                "username": "johnDoe",
                "password": "password12345",
                "is_land_owner": true
                })
                .set('Accept', 'application/json')

                expect(res.status).toBe(201);
                expect(res.body.username).toBe('johnDoe');
            });
        })

    });
   
});