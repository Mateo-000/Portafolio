const express = require("express");
const app = express();
const cors = require("cors")
require("./base-orm/sqlite-init");
app.use(express.json());
app.use(cors());
const profesoresRouter = require("./routes/profesores");
app.use(profesoresRouter);

const aulasRouter = require("./routes/aulas")
app.use(aulasRouter)

const materiasRouter = require("./routes/materias")
app.use(materiasRouter)

const alumnosRouter = require("./routes/alumnos")
app.use(alumnosRouter)

app.get('/', (req,res) => {
  res.send("Pagina de inicio")
})

if (!module.parent) {   
  const port = process.env.PORT || 4000;   
  app.locals.fechaInicio = new Date();
  app.listen(port, () => {
    console.log(`sitio escuchando en el puerto ${port}`);
  });
}
module.exports = app; 

