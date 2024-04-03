import React from "react";
import FilaAlumno from "./FilaAlumno";
import ModificarAlumno from "./ModificarAlumno";


export default function ListadoAlumnos({ lista, borrar, modificar }) {
  if (!Array.isArray(lista)) {
    return <p>La lista no es un array válido</p>;
  }

  if (lista === null) {
    return null;
  }

  return (
    <div className="container mt-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>IdAlumno</th>
            <th>FechaNacimiento</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((alumno) => (
            <FilaAlumno
              key={alumno.IdAlumno}
              lista={alumno}
              borrar={borrar}
              modificar={modificar}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
