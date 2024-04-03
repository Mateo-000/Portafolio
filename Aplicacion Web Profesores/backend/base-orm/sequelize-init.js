const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite:" + "./.data/escuela.db");

// definicion del modelo de datos
const profesor = sequelize.define(
  "profesor",
  {
    IdProfesor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    IdAlumno: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

    Nombre: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El nombre es requerido",
        },
        len: {
          args: [2, 30],
          msg: "Nombre debe ser tipo carateres, entre 2 y 30 de longitud",
        },
      },
    },
    FechaNacimiento: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "La fecha de nacimiento es requerida",
          }
        }
      },
  },
  {
    tableName: "profesores", // especifica el nombre correcto de la tabla en la base de datos

    // pasar a mayusculas
    hooks: {
      beforeValidate: function (profesor, options) {
        if (typeof profesor.Nombre === "string") {
          profesor.Nombre = profesor.Nombre.toUpperCase().trim();
        }
      },
    },

    timestamps: false,
  }
);

const materia = sequelize.define(
  "materia",
  {
    IdMateria: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    FechaImplementacion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "La fecha de implementacion es requerida",
          }
        }
      },
    Nombre: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El nombre es requerido",
        },
        len: {
          args: [4, 30],
          msg: "Nombre debe ser tipo carateres, entre 4 y 30 de longitud",
        },
      },
    },
    IdAlumno:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    // pasar a mayusculas
    hooks: {
      beforeValidate: function (materia, options) {
        if (typeof materia.Nombre === "string") {
          materia.Nombre = materia.Nombre.toUpperCase().trim();
        }
      },
    },

    timestamps: false,
  }
);

const aulas = sequelize.define(
  "aulas",
  {
    IdAula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    FechaDeConstruccion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "La fecha Construccion es requerida",
          }
        }
      },
    Nombre: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El nombre es requerido",
        },
        len: {
          args: [4, 30],
          msg: "Nombre debe ser tipo carateres, entre 4 y 30 de longitud",
        },
      },
    },
    IdAlumno:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    // pasar a mayusculas
    hooks: {
      beforeValidate: function (aulas, options) {
        if (typeof aulas.Nombre === "string") {
          aulas.Nombre = aulas.Nombre.toUpperCase().trim();
        }
      },
    },

    timestamps: false,
  }
);


const alumno = sequelize.define(
  "alumno",
  {
    IdAlumno: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    FechaNacimiento: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "La fecha nacimiento es requerida",
          }
        }
      },
    Nombre: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El nombre es requerido",
        },
        len: {
          args: [5, 30],
          msg: "Nombre debe ser tipo carateres, entre 5 y 30 de longitud",
        },
      },
    },
  },
  {
    // pasar a mayusculas
    hooks: {
      beforeValidate: function (alumno, options) {
        if (typeof alumno.Nombre === "string") {
          alumno.Nombre = alumno.Nombre.toUpperCase().trim();
        }
      },
    },

    timestamps: false,
  }
);

module.exports = {
    sequelize,
    profesor,
    materia,
    alumno,
    aulas
  };
  
