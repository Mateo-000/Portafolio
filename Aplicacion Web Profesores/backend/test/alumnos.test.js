const request = require("supertest");
const app = require("../index");
const db = require("../base-orm/sequelize-init");
const alumnorandom = {
  Nombre: "Alumno " + (( ) => (Math.random() + 1).toString(36).substring(2))(),  // Genera un nombre aleatorio
  FechaNacimiento: new Date().toISOString(),
  IdAlumno: 1,
};
const alumnoModificacion = {
  IdAlumno: 1,
  Nombre: "Alumno " + (( ) => (Math.random() + 1).toString(36).substring(2))(),  // Genera un nombre aleatorio
  FechaNacimiento: new Date().toISOString(),
};


// test Routes/alumnos GET
describe("GET /api/alumnos", () => {
  it("Deberia devolver todos los alumnos", async () => {
    const res = await request(app).get("/api/alumnos");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
     expect.objectContaining({
      Alumnos: 
      expect.arrayContaining([
        expect.objectContaining({
            IdAlumno: expect.any(Number),
            FechaNacimiento: expect.any(String),
            Nombre: expect.any(String),
        })
      ]),
      RegistrosTotal:  expect.any(Number) 
     })
    );
  });
});

// test route/aulas POST
describe("POST /api/alumnos", () => {
  it("Deberia devolver el aula que acabo de crear", async () => {
    const res = await request(app).post("/api/alumnos").send(alumnorandom);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        IdAlumno: expect.any(Number),
        FechaNacimiento: expect.any(String),
        Nombre: expect.any(String),
      })
    );
  });
});


// test Routes/alumno/:id PUT
describe("PUT /api/alumnos/:id", () => {
  it("Deberia devolver el alumno con el id 1 modificado", async () => {
    const res = await request(app).put("/api/alumnos/1").send(alumnoModificacion);
    expect(res.statusCode).toEqual(200);
  });
});

// test route/alumnos/:id DELETE
describe("DELETE /api/alumnos/:id", () => {
  it("Deberia devolver el alumno con el id 1 borrado", async () => {
    const res = await request(app).delete("/api/alumnos/1");
    expect(res.statusCode).toEqual(200);
  });
});


