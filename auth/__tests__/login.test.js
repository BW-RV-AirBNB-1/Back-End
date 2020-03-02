const request = require('supertest');
const server = require('../../api/server');
const db = require('../../data/connection');


describe("Login Router", () => {

    describe("Get / ", () => {

        it("should return 200 OK", async () => {
           
            const res = await request(server).get('/api/login');
            
            expect(res.status).toBe(200);
            
        });
        
        it("should return json formatted body", async() => {
            const res = await request(server).get('/api/login');
            
            expect(res.type).toMatch(/json/i);     
        });
        
        it("should return json body data", async () => {
            const res = await request(server).get('/api/login');
            expect(res.body.message).toMatch(/working/i);
            
        });
        
    });
    
    describe("Login Auth", () => {


        describe('POST /login data validation', () => {

            it("should return 400 on username failure ", async () => {
                const res = await request(server).post('/api/login')
                .send({
                    "username": "jack",
                    "password": "password12345",
                    "is_land_owner": false
                });

                expect(res.status).toBe(400);
                expect(res.body.message).toMatch(/invalid entry/i);
            });

            it("should return 400 on password failure ", async () => {
                const res = await request(server).post('/api/login')
                .send({
                    "username": "jackDoeHam",
                    "password": "pass",
                    "is_land_owner": false
                });

                expect(res.status).toBe(400);
                expect(res.body.message).toMatch(/invalid entry/i);
            });
        });
        
        describe("POST /login", () => {

            beforeEach(async () => {
                const res = await request(server).post('/api/register')
                .send({
                    "username": "johnDoeham",
                    "password": "password12345",
                    "is_land_owner": false
                });
            });
    
            afterEach(async () => {
                await db('users').truncate();
            });
            
            it("returns 200 OK", async () => {
                const res = await request(server).post('/api/login')
                .send({
                    "username": "johnDoeham",
                    "password": "password12345"
                });
                
                expect(res.status).toBe(200);
            });
            
            it("returns authenticated user with token", async () => {
                const res = await request(server).post('/api/login')
                .send({
                    "username": "johnDoeham",
                    "password": "password12345"
                });
                
                expect(res.body.user.username).toBe("johnDoeham");
                
            });
            
            it("returns 400 on bad password", async () => {  
                const res = await request(server).post('/api/login')
                .send({
                    "username": "johnDoeHam",
                    "password": "password1234556"
                });

                expect(res.status).toBe(400);
            })
        });
    });
})