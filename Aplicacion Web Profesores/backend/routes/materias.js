const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");


router.get("/api/materias", async function (req, res) {
  let where = {};
  if (req.query.Nombre != undefined && req.query.Nombre !== "") {
    where.Nombre = {
      [Op.like]: "%" + req.query.Nombre + "%",
    };
  }
  let data = await db.materia.findAll({
    attributes: [
      "IdMateria",
      "FechaImplementacion",
      "Nombre",
      "IdAlumno",
    ],
    where,
  });
  res.json(data);
});

router.post("/api/materias/", async (req, res) => {
  try {
    let data = await db.materia.create({
      IdMateria: req.body.IdMateria,
      FechaImplementacion: req.body.FechaImplementacion,
      Nombre: req.body.Nombre,
      IdAlumno: req.body.IdAlumno,
    },
      { where: { IdMateria: req.params.id } }
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
router.delete("/api/materias/:id", async function (req, res) {

  let filasBorradas = await db.materia.destroy({
  where: { IdMateria: req.params.id },
  });
  if (filasBorradas == 1) res.sendStatus(200);
  else res.sendStatus(404);
  
});

router.put("/api/materias/:id", async (req, res) => {
  try {
    let item = await db.materia.findOne({
      attributes: [
        "IdMateria",
        "FechaImplementacion",
        "Nombre",
        "IdAlumno",
      ],
      where: { IdMateria: req.params.id },
    });
    if (!item) {
      res.status(404).json({ message: "Materia no encontrado" });
      return;
    }
    item.IdMateria = req.body.IdMateria;
    item.FechaImplementacion = req.body.FechaImplementacion;
    item.Nombre = req.body.Nombre;
    item.IdAlumno = req.body.IdAlumno;
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