const request = require('supertest');
const server = require('../server');

describe("DB Testing Envrionment", () => {

    it("should set db environment to testing", () => {
        expect(process.env.DB_ENV).toBe("testing");
    });
});

describe("Server", () => {

    describe("GET /", () => {

        it("Should return status 200 OK", async () => {
            const res =  await request(server).get('/')

            expect(res.status).toBe(200);
        });

        it("Should return json", async () => {
            const res = await request(server).get("/");

            expect(res.type).toMatch(/json/i);
        })

    });


})