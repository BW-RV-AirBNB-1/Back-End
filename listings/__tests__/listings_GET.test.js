const request = require('supertest');
const server = require('../../api/server');
const db = require('../../data/connection');

describe("Listings Router /GET Methods", () => {

    describe("GET /listings", () =>{
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
            await db.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE')
        });
    

        it("It should return 200 OK", async () => {
            const res = await request(server).get('/api/listings')
            .set('Authorization', `${token}`);
        
            expect(res.status).toBe(200);
        });

        it("It should return json formatted body", async () => {
            const res = await request(server).get('/api/listings')
            .set('Authorization', token);
            expect(res.type).toMatch(/json/i);
        });

        it("It should return json res body", async () => {
            const res = await request(server).get('/api/listings')
            .set('Authorization', token);
            expect(Array.isArray(res.body)).toBe(true);
            expect(res.type).toMatch(/json/i);
        });

    });

    describe('/GET listing by id', () => {

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
            await db.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE')
        });

        it('should return 200 OK', async() => {
            const res = await request(server).get('/api/listings/1')
            .set('Authorization', token);

            expect(res.status).toBe(200);
        });

        it('should return listing array with json obj', async() => {
            const res = await request(server).get('/api/listings/1')
            .set('Authorization', token);

            expect(Array.isArray(res.body)).toBe(true);
        });

    });

    describe('/GET listing by owner id', () => {

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
            await db.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE')
        });

        it('should return 200 OK', async() => {
            const res = await request(server).get('/api/listings/owner/1')
            .set('Authorization', token);

            expect(res.status).toBe(200);
        });

        it('should return listing array with json obj', async() => {
            const res = await request(server).get('/api/listings/owner/1')
            .set('Authorization', token);

            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body.length).toBe(2);
            expect(res.body[0]).toHaveProperty('id');
        });

    });

});

