const request = require("supertest");
const app = require("../index");
const db = require("../base-orm/sequelize-init");
const materiarandom = {
  IdMateria: 1,
  FechaImplementacion: new Date().toISOString(),
  Nombre: "Materia " + (() => (Math.random() + 1).toString(36).substring(2))(),
  IdAlumno: 1,
};

const materiaModificacion = {
  IdMateria: 1,
  Nombre: "Materia " + (() => (Math.random() + 1).toString(36).substring(2))(),  // Genera un nombre aleatorio
  FechaImplementacion: new Date().toISOString(),
  IdAlumno: 1,
};

// test route/materias GET
describe("GET /api/materias", () => {
  it("Deberia devolver todos los materias", async () => {
    const res = await request(app).get("/api/materias");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        Materias:
          expect.arrayContaining([
            expect.objectContaining({
              IdMateria: expect.any(Number),
              FechaImplementacion: expect.any(String),
              Nombre: expect.any(String),
              IdAlumno: expect.any(Number),
            })
          ]),
        RegistrosTotal: expect.any(Number)
      })
    );
  });
});

// test route/materias POST
describe("POST /api/materias", () => {
  it("Deberia devolver la materia que acabo de crear", async () => {
    const res = await request(app).post("/api/materias").send(materiarandom);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        IdMateria: expect.any(Number),
        FechaImplementacion: expect.any(String),
        Nombre: expect.any(String),
        IdAlumno: expect.any(Number),
      })
    );
  });
});

// test routes/materias/:id PUT
describe("PUT /api/materias/:id", () => {
  it("Deberia devolver el materia con el id 1 modificado", async () => {
    const res = await request(app).put("/api/materias/1").send(materiaModificacion);
    expect(res.statusCode).toEqual(200);
  });
});

// test route/materias/:id DELETE
describe("DELETE /api/materias/:id", () => {
    it("Deberia devolver el materia con el id 1 borrado", async () => {
      const res = await request(app).delete("/api/materias/1");
      expect(res.statusCode).toEqual(200);
    });
  });
