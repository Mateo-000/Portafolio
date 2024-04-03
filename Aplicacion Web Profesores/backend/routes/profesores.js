const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");


router.get("/api/profesores", async function (req, res) {
  let where = {};
  if (req.query.Nombre != undefined && req.query.Nombre !== "") {
    where.Nombre = {
      [Op.like]: "%" + req.query.Nombre + "%",
    };
  }
  let data = await db.profesor.findAll({
    attributes: [
      "IdProfesor",
      "IdAlumno",
      "Nombre",
      "FechaNacimiento",
    ],
    where,
  });
  res.json(data);
});

router.post("/api/profesores/", async (req, res) => {
  try {
    let data = await db.profesor.create({
      IdProfesor: req.body.IdProfesor,
      IdAlumno: req.body.IdAlumno,
      Nombre: req.body.Nombre,
      FechaNacimiento: req.body.FechaNacimiento,
    },
      { where: { IdProfesor: req.params.id } }
    );
    res.status(200).json(data.dataValues);
  } catch (err) {
    if (err instanceof ValidationError) {
      let messages = '';
      err.errors.forEach((x) => messages += (x.path ?? 'campo') + ": " + x.message + '\n');
      res.status(400).json({ message: messages });
    } else {
      throw err;
    }
  }
});
router.delete("/api/profesores/:id", async function (req, res) {

  let filasBorradas = await db.profesor.destroy({
  where: { IdProfesor: req.params.id },
  });
  if (filasBorradas == 1) res.sendStatus(200);
  else res.sendStatus(404);
  
});

router.put("/api/profesores/:id", async (req, res) => {
  try {
    let item = await db.profesor.findOne({
      attributes: [
        "IdProfesor",
        "IdAlumno",
        "Nombre",
        "FechaNacimiento",
      ],
      where: { IdProfesor: req.params.id },
    });
    if (!item) {
      res.status(404).json({ message: "Profesor no encontrado" });
      return;
    }
    item.IdProfesor = req.body.IdProfesor;
    item.IdAlumno = req.body.IdAlumno;
    item.Nombre = req.body.Nombre;
    item.FechaNacimiento = req.body.FechaNacimiento;
    await item.save();

    res.sendStatus(200);
  } catch (err) {
    if (err instanceof ValidationError) {
      let messages = '';
      err.errors.forEach((x) => messages += x.path + ": " + x.message + '\n');
      res.status(400).json({ message: messages });
    } else {
      throw err;
    }
  }
});





module.exports = router;