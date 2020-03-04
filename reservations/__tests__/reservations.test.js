const request = require('supertest');
const server = require('../../api/server');
const db = require('../../data/connection');


describe('Reservations', () => {

    describe('GET /reservations', () => {

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

        it('returns 200 OK', async () => {
            const res = await request(server).get('/api/reservations')
            .set('Authentication', token)

            expect(res.status).toBe(200);

        });

        it('returns json formatted body', async () => {

            const res = await request(server).get('/api/reservations')
            .set('Authentication', token);

            expect(res.type).toMatch(/json/i);
            expect(Array.isArray(res.body)).toBe(true);

        });

    })



})