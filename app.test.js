const request = require("supertest");
const app = require("./index"); // Import app without starting the server

describe("Wekend Things To Do App", () => {
  
  test("GET / should return the main weekend to-dos list", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Sleep");
  });

  test("GET /should return the weekend to-do list", async () => {
    const response = await request(app).get("/weekend");
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Weekend Things To Do List");
  });

  test("POST / should add an item to the main list", async () => {
    const response = await request(app).post("/").send("newItem=Read a book");
    expect(response.statusCode).toBe(302); // Redirect expected
  });

  test("POST /should add an item to the weekend list", async () => {
    const response = await request(app)
      .post("/")
      .send("newItem=Watch a movie&list=weekend");
    expect(response.statusCode).toBe(302); // Redirect expected
  });

});
