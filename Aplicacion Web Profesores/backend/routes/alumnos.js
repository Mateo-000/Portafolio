const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");


router.get("/api/alumnos", async function (req, res) {
  let where = {};
  if (req.query.Nombre != undefined && req.query.Nombre !== "") {
    where.Nombre = {
      [Op.like]: "%" + req.query.Nombre + "%",
    };
  }
  let data = await db.alumno.findAll({
    attributes: [
      "IdAlumno",
      "FechaNacimiento",
      "Nombre",
    ],
    where,
  });
  res.json(data);
});
router.post("/api/alumnos/", async (req, res) => {
  try {
    let data = await db.alumno.create({
      IdAlumno: req.body.IdAlumno,
      FechaNacimiento: req.body.FechaNacimiento,
      Nombre: req.body.Nombre,
    },
    {where :{IdAlumno : req.params.id}}
    );
    res.status(200).json(data.dataValues); 
  } catch (err) {
    if (err instanceof ValidationError) {
      let messages = '';
      err.errors.forEach((x) => messages += (x.path ?? 'campo') + ": " + x.message + '\n');
      res.status(400).json({message : messages});
    } else {
      throw err;
    }
  }
});
router.delete("/api/alumnos/:id", async function (req, res)  {
    let filasBorradas = await db.alumno.destroy({
      where: { IdAlumno: req.params.id },
    });
    if (filasBorradas == 1) res.sendStatus(200);
    else res.sendStatus(404);
   });

router.put("/api/alumnos/:id", async (req, res) => {
  try {
    let item = await db.alumno.findOne({
      attributes: [
        "IdAlumno",
        "FechaNacimiento",
        "Nombre",
      ],
      where: { IdAlumno: req.params.id },
    });
    if (!item) {
      res.status(404).json({ message: "Alumno no encontrado" });
      return;
    }
    item.IdAlumno = req.body.IdAlumno;
    item.FechaNacimiento = req.body.FechaNacimiento;
    item.Nombre = req.body.Nombre;
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
