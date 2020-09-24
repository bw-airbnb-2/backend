const supertest = require("supertest");
const server = require("./server");
const db = require("../database/dbConfig.js");

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6IkNocmlzMTIiLCJpYXQiOjE2MDA0NDUyODEsImV4cCI6MTYwMDQ0ODg4MX0.DyCDVZ0y5uo5RdV_2rdT8klEI4IRMHKa55KbjxIz4Fw";

beforeAll((done) => {
  supertest(server)
    .post("/api/auth/register")
    .send({
      username: "Chris12",
      password: "123456",
      first_name: "Christopher",
      last_name: "Harwell",
      address: "1234 Main St, Somewhere, OH, 12345",
      age: 26,
      birthday: "10 - 14 - 1994",
      country: "USA",
    })
    supertest(server)
    .post("/api/auth/login")
    .send({
      username: "Chris12",
      password: "123456",
    })
    .end((err, res) => {
      token = res.body.token; // save the token!
      done();
    });
});

describe("server.js", () => {
  beforeEach(async () => {
    await db("users").truncate();
    await db("listings").truncate();
  });

  it("POST api/auth/register - should return status 201", function () {
    return supertest(server)
      .post("/api/auth/register")
      .send({
        username: "Chris",
        password: "12345",
        first_name: "Christopher",
        last_name: "Harwell",
        address: "1234 Main St, Somewhere, OH, 12345",
        age: 26,
        birthday: "10 - 14 - 1994",
        country: "USA",
      })
      .then((res) => {
        expect(res.status).toBe(201);
      });
  });

  it("POST /auth/register - res.type should match json", function () {
    return supertest(server)
      .post("/api/auth/register")
      .send({
        username: "Chris",
        password: "12345",
        first_name: "Christopher",
        last_name: "Harwell",
        address: "1234 Main St, Somewhere, OH, 12345",
        age: 26,
        birthday: "10 - 14 - 1994",
        country: "USA",
      })
      .then((res) => {
        expect(res.type).toMatch(/json/i);
      });
  });

  it("POST api/auth/login - res.type should match json", function () {
    return supertest(server)
      .post("/api/auth/login")
      .send({ username: "Chris12", password: "123456" })
      .then((res) => {
        expect(res.type).toMatch(/json/i);
      });
  });

  it("POST api/auth/login - should return status 401", function () {
    return supertest(server)
      .post("/api/auth/login")
      .send({ username: "Chris12", password: "123456" })
      .then((res) => {
        expect(res.status).toBe(401);
      });
  });


  it("should respond with JSON", () => {
    return supertest(server)
      .get("/api/users")
      .set("Authorization", `Bearer ${token}`)
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe("application/json");
      });
  });
});
