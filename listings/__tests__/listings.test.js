// const request = require('supertest');
// const server = require('../../api/server');
// const db = require('../../data/connection');

// describe("Listings Router", () => {

    

//     afterEach(async () => {
//         await db.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE')
//         await db.seed.run()
//     });

//     describe("GET /", () =>{

//         let token = null;
//         beforeEach( (done) => {
//             const res = request(server).post('/api/login')
//             .send({
//                 "username": "testyMcTesty",
//                 "password": "password12345",
//                 "is_land_owner": false
//             })
//             .end( (err, res) => {
//                 token = res.body.token
//                 done();
//             });
//         });

//         it("It should return 200 OK", async () => {
            
//             const res = await request(server).get('/api/listings')
//             .set('Authorization', 'Bearer' + token)

//             expect(res.status).toBe(200);
//         });

//         it("It should return json formatted body", async () => {
//             const res = await request(server).get('/api/listings')

//             expect(res.type).toMatch(/json/i);
//         });

//     });


// });

