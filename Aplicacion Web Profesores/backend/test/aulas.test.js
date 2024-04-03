const request = require("supertest");
const app = require("../index");
const db = require("../base-orm/sequelize-init");
const aularandom = {
  IdAula: 1,
  FechaDeConstruccion: new Date().toISOString(),
  Nombre: "Aula " + (() => (Math.random() + 1).toString(36).substring(2))(),
  IdAlumno: 1,
};

const aulaModificacion = {
  IdAula: 1,
  Nombre: "Aula " + (() => (Math.random() + 1).toString(36).substring(2))(),  // Genera un nombre aleatorio
  FechaDeConstruccion: new Date().toISOString(),
  IdAlumno: 1,
};

// test route/aulas GET
describe("GET /api/aulas", () => {
  it("Deberia devolver todos los aulas", async () => {
    const res = await request(app).get("/api/aulas");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        Aulas:
          expect.arrayContaining([
            expect.objectContaining({
              IdAula: expect.any(Number),
              FechaDeConstruccion: expect.any(String),
              Nombre: expect.any(String),
              IdAlumno: expect.any(Number),
            })
          ]),
        RegistrosTotal: expect.any(Number)
      })
    );
  });
});

// test route/aulas POST
describe("POST /api/aulas", () => {
  it("Deberia devolver el aula que acabo de crear", async () => {
    const res = await request(app).post("/api/aulas").send(aularandom);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        IdAula: expect.any(Number),
        FechaDeConstruccion: expect.any(String),
        Nombre: expect.any(String),
        IdAlumno: expect.any(Number),
      })
    );
  });
});

// test routes/aulas/:id PUT
describe("PUT /api/aulas/:id", () => {
  it("Deberia devolver el aula con el id 1 modificado", async () => {
    const res = await request(app).put("/api/aulas/1").send(aulaModificacion);
    expect(res.statusCode).toEqual(200);
  });
});

// test route/aulas/:id DELETE
describe("DELETE /api/aulas/:id", () => {
    it("Deberia devolver el aula con el id 1 borrado", async () => {
      const res = await request(app).delete("/api/aulas/1");
      expect(res.statusCode).toEqual(200);
    });
  });


