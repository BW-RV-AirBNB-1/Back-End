const request = require('supertest');
const server = require('../../api/server');
const db = require('../../data/connection');

describe("Listings Router", () => {

    describe("GET /", () =>{

        it("It should return 200 OK", async () => {
            const res = await request(server).get('/api/listings')

            expect(res.status).toBe(200);
        });

        it("It should return json formatted body", async () => {
            const res = await request(server).get('/api/listings')

            expect(res.type).toMatch(/json/i);
        });

    });


});

