const request = require("supertest");
const app = require("../index");
const db = require("../base-orm/sequelize-init");
const profesorRandom = {
  IdProfesor: 1,
  FechaNacimiento: new Date().toISOString(),
  Nombre: "Profesor " + (() => (Math.random() + 1).toString(36).substring(2))(),
  IdAlumno: 1,
};

const profesorModificacion = {
  IdProfesor: 1,
  Nombre: "Profesor " + (() => (Math.random() + 1).toString(36).substring(2))(),  // Genera un nombre aleatorio
  FechaNacimiento: new Date().toISOString(),
  IdAlumno: 1,
};


describe("GET /api/profesores", () => {
  it("Deberia devolver todos los profesores", async () => {
    const res = await request(app).get("/api/profesores");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        Profesores:
          expect.arrayContaining([
            expect.objectContaining({
                IdProfesor: expect.any(Number),              
                IdAlumno: expect.any(Number),              
                Nombre: expect.any(String),
                FechaNacimiento: expect.any(String),
            })
          ]),
        RegistrosTotal: expect.any(Number)
      })
    );
  });
});


describe("POST /api/profesores", () => {
  it("Deberia devolver el profesor que acabo de crear", async () => {
    const res = await request(app).post("/api/profesores").send(profesorRandom);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        IdProfesor: expect.any(Number),              
        IdAlumno: expect.any(Number),              
        Nombre: expect.any(String),
        FechaNacimiento: expect.any(String),
      })
    );
  });
});


describe("PUT /api/profesores/:id", () => {
  it("Deberia devolver el profesor con el id 1 modificado", async () => {
    const res = await request(app).put("/api/profesores/1").send(profesorModificacion);
    expect(res.statusCode).toEqual(200);
  });
});


describe("DELETE /api/profesores/:id", () => {
    it("Deberia devolver el profesor con el id 1 borrado", async () => {
      const res = await request(app).delete("/api/profesores/1");
      expect(res.statusCode).toEqual(200);
    });
  });

