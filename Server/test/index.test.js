const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("GET /rickandmorty/character/:id", () => {
  it("Responde con status: 200", async () => {
    await agent.get("/rickandmorty/character/1").expect(200);
  });

  it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
    const res = await agent.get("/rickandmorty/character/1");
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("name");
    expect(res.body).toHaveProperty("species");
    expect(res.body).toHaveProperty("gender");
    expect(res.body).toHaveProperty("status");
    expect(res.body).toHaveProperty("origin");
    expect(res.body).toHaveProperty("image");
  });

  it("Si hay un error responde con status: 500", async () => {
    const res = await session(app).get("/error");
    expect(res.statusCode).toBe(500);
  });
});

describe("GET /rickandmorty/login", () => {
  it("Debe obtener un true si son correctos el email y password", async () => {
    const response = await agent
      .get("/rickandmorty/login")
      .query({ email: "martinjiro22@gmail.com", password: "Pass123" });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("access", true);
  });

  it("Debe obtener un false si no son correctos el email y password", async () => {
    const response = await agent
      .get("/rickandmorty/login")
      .query({ email: "martincito@gmail.com", password: "Pass123" });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("access", false);
  });
});
