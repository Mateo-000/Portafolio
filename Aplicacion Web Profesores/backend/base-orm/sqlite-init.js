const db = require('aa-sqlite')

async function CrearBaseSiNoExiste() {
  await db.open('./.data/escuela.db')

  let existe = false

  let res = null

  res = await db.get(
    "SELECT COUNT(*) as contar FROM sqlite_schema WHERE type = 'table' and name = 'profesores' ",
    []
  )

  if (res.contar > 0) existe = true

  if (!existe) {
    await db.run(`CREATE table profesores(
                    IdProfesor INTEGER PRIMARY KEY AUTOINCREMENT, 
                    IdAlumno INTEGER, 
                    Nombre text NOT NULL, 
                    FechaNacimiento text)`)

    console.log("Tabla materias creada!");

    await db.run(
      `insert into profesores values
        
            (2,2,'Luke', '1993-09-15'),
            (3,3,'Darth','1977-02-03' ),
            (4,4,'Leia','1985-07-28' ),
            (5,5,'Han','1979-11-11'),
            (6,6,'Obi-Wan','1968-04-22'),
            (7,7,'Yoda','1156-12-08'),
            (8,8,'Chewbacca','1950-06-17'),
            (9,9,'Rey','2001-03-19'),
            (10,10,'Kylo', '1990-08-27')`
    )

    console.log("Datos insertados en la tabla profesores!");

  }
  existe = false;

  // Verificar si la tabla "materias" existe
  res = await db.get(
    "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' AND name = 'materia'",
    []
  );
  if (res.contar > 0) existe = true;

  if (!existe) {
    // Crear la tabla "materias" si no existe
    await db.run(
      "CREATE TABLE materia (IdMateria INTEGER PRIMARY KEY AUTOINCREMENT, FechaImplementacion TEXT NOT NULL, Nombre TEXT NOT NULL, IdAlumno INTEGER);"
    );
    console.log("Tabla materias creada!");

    // Insertar datos de ejemplo en la tabla "materias"
    await db.run(
      "INSERT INTO materia (IdMateria, FechaImplementacion, Nombre, IdAlumno) VALUES (11, '11-12-1950', 'Quimica', 1), (2, '15-07-1955', 'Matematica', 2), (3, '04-08-1951', 'Economia', 3), (4, '10-12-1953', 'Lengua', 4), (5, '09-09-1954', 'Ecologia', 5), (6, '09-05-1956', 'Biologia', 6), (7, '30-01-1960', 'Programacion', 7), (8, '23-11-1952', 'Astronomia', 8), (9, '10-03-1959', 'Informatica', 9), (10, '02-05-1949', 'Ciudadania', 10);"
    );

    console.log("Datos insertados en la tabla materias!");
  }

  existe = false;

  // Verificar si la tabla "alumnos" existe
  res = await db.get(
    "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' AND name = 'alumnos'",
    []
  );
  if (res.contar > 0) existe = true;

  if (!existe) {
    // Crear la tabla "alumnos" si no existe
    await db.run(
      "CREATE TABLE alumnos (IdAlumno INTEGER PRIMARY KEY AUTOINCREMENT, FechaNacimiento TEXT NOT NULL, Nombre TEXT NOT NULL);"
    );
    console.log("Tabla alumnos creada!");

    // Insertar datos de ejemplo en la tabla "alumnos"
    await db.run(
      "INSERT INTO alumnos (IdAlumno, FechaNacimiento, Nombre) VALUES (11, '14-03-2003', 'Gonzalo'), (2, '15-07-2004', 'Natali'), (3, '16-05-2003', 'Franco'), (4, '05-08-2000', 'Martina'), (5, '03-03-2001', 'Milagros'), (6, '09-07-2003', 'Luca'), (7, '08-03-1995', 'Mateo'), (8, '15-04-2005', 'Olivia'), (9, '17-09-2003', 'Tobias'), (10, '09-05-2003', 'Daniel');"
    );

    console.log("Datos insertados en la tabla alumnos!");
  }

  existe = false;

  // Verificar si la tabla "aulas" existe
  res = await db.get(
    "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' AND name = 'aulas'",
    []
  );
  if (res.contar > 0) existe = true;

  if (!existe) {
    // Crear la tabla "aulas" si no existe
    await db.run(
      "CREATE TABLE aulas (IdAula INTEGER PRIMARY KEY AUTOINCREMENT, FechaDeConstruccion TEXT NOT NULL, Nombre TEXT NOT NULL, IdAlumno INTEGER);"
    );
    console.log("Tabla aulas creada!");

    // Insertar datos de ejemplo en la tabla "aulas"
    await db.run(
      "INSERT INTO aulas (IdAula, FechaDeConstruccion, Nombre, IdAlumno) VALUES (11, '15-06-2001', 'Aula Azul', 11), (2, '03-09-2005', 'Sala Verde', 2), (3, '22-11-2007', 'Aula Roja', 3), (4, '10-04-2010', 'Laboratorio 1', 4), (5, '28-07-2012', 'Aula Blanca', 5), (6, '16-10-2014', 'Sala de Estudio', 6), (7, '05-01-2017', 'Aula Creativa', 7), (8, '23-03-2019', 'Laboratorio 2', 8), (9, '11-06-2021', 'Aula Naranja', 9), (10, '29-09-2023', 'Sala de Conferencias', 10);"
    );

    console.log("Datos insertados en la tabla aulas!");
  }

  await db.close()
}
CrearBaseSiNoExiste();

module.exports = CrearBaseSiNoExiste;