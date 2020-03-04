const request = require('supertest');
const server = require('../../api/server');
const db = require('../../data/connection');



describe('Listings Router /POST methods', () => {

    describe('POST /listings', () =>{

        let token = null;

        beforeEach( async () => {
            await db.seed.run('testing');

            const res = await request(server).post('/api/login')
            .send({
                "username": "testyMcTesty",
                "password": "password12345",
                "is_land_owner": false
            })

           
            token = res.body.token;
     
        })

        afterEach(async () => {
            await db.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
        });

        it("It should return 201 OK", async () => {
            const res = await request(server).post('/api/listings')
            .set('Authorization', `${token}`)
            .send({
                "state_id": 10,
                "user_id": 1,
                "title": "Test DB Listing.",
                "description": "Lorem Ipsum Dim Sum",
               "price_per_day": 19.99,   
            });
            console.log(res.body);
            expect(res.status).toBe(201);
            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body[0]).toHaveProperty('title');
        });

    })



});