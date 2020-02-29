const request = require('supertest');
const server = require('../server');

describe("DB Testing Envrionment", () => {

    it("should set db environment to testing", () => {
        expect(process.env.DB_ENV).toBe("testing");
    });
});

describe("Server", () => {

    describe("GET /", () => {

        it("Should return status 200 OK", () => {
            return request(server).get('/')
            .then(res => {
                expect(res.status).toBe(200);
            });  
        });

        it("Should return json body formatting ", async () => {
            return request(server).get("/")
            .then(res => {
                expect(res.type).toMatch(/json/i);
            })
            
        })

        it("Should return json message", async () => {
            return request(server).get("/")
            .then(res => {
                expect(res.body.message).toMatch(/server working/i);
            });
        })

    });


})