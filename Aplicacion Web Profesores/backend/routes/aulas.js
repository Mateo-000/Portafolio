const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");


router.get("/api/aulas", async function (req, res) {
  let where = {};
  if (req.query.Nombre != undefined && req.query.Nombre !== "") {
    where.Nombre = {
      [Op.like]: "%" + req.query.Nombre + "%",
    };
  }
  let data = await db.aulas.findAll({
    attributes: [
      "IdAula",
      "FechaDeConstruccion",
      "Nombre",
      "IdAlumno",
    ],
    where,
  });
  res.json(data);
});

router.post("/api/aulas/", async (req, res) => {
  try {
    let data = await db.aulas.create({
      IdAula: req.body.IdAula,
      FechaDeConstruccion: req.body.FechaDeConstruccion,
      Nombre: req.body.Nombre,
      IdAlumno: req.body.IdAlumno,
    },
      { where: { IdAula: req.params.id } }
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
router.delete("/api/aulas/:id", async function (req, res) {

  let filasBorradas = await db.aulas.destroy({
  where: { IdAula: req.params.id },
  });
  if (filasBorradas == 1) res.sendStatus(200);
  else res.sendStatus(404);
  
});

router.put("/api/aulas/:id", async (req, res) => {
  try {
    let item = await db.aulas.findOne({
      attributes: [
        "IdAula",
        "FechaDeConstruccion",
        "Nombre",
        "IdAlumno",
      ],
      where: { IdAula: req.params.id },
    });
    if (!item) {
      res.status(404).json({ message: "Aula no encontrado" });
      return;
    }
    item.IdAula = req.body.IdAula;
    item.FechaDeConstruccion = req.body.FechaDeConstruccion;
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