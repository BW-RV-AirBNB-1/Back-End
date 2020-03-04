
const knexCleaner = require('knex-cleaner');
const request = require('supertest');
const server = require('../../api/server');
const db = require('../../data/connection');

// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//         host: 'postgresql://localhost',
//         database: 'rv-airbnbtesting'
//     }
// });

// const options = {
//     mode: 'truncate',
//     restartIdentity: true
// }

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

            it("should return 400 on username validation ", async () => {
                const res = await request(server).post('/api/login')
                .send({
                    "username": "jack",
                    "password": "password12345",
                    "is_land_owner": false
                });

                expect(res.status).toBe(400);
                expect(res.body.message).toMatch(/invalid entry/i);
            });

            it("should return 400 on password validation ", async () => {
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
                await db.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE')
                await db.seed.run()
            });
    
            afterEach(() => {
                db.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE')
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
                
                expect(res.type).toMatch(/json/i);
                expect(res.body.user.username).toBe("johnDoeham");
                expect(res.body).toHaveProperty("token");
                
            });

            it("returns 400 on bad username", async () => {  
                const res = await request(server).post('/api/login')
                .send({
                    "username": "johnDoeassdHam",
                    "password": "password12345"
                });

                expect(res.status).toBe(400);
                expect(res.body.message).toMatch(/invalid/i);
            });
            
            it("returns 400 on bad password", async () => {  
                const res = await request(server).post('/api/login')
                .send({
                    "username": "johnDoeHam",
                    "password": "password123455623243"
                });

                expect(res.status).toBe(400);
                expect(res.body.message).toMatch(/invalid/i);
            });
        });
    });
})