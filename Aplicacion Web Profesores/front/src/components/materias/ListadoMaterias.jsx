import React from "react";
import FilaMateria from "./FilaMateria";
import ModificarMateria from "./ModificarMateria";


export default function ListadoMaterias({ lista, borrar, modificar }) {
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
            <th>IdMateria</th>
            <th>FechaImplementacion</th>
            <th>Nombre</th>
            <th>IdAlumno</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((materia) => (
            <FilaMateria
              key={materia.IdMateria}
              lista={materia}
              borrar={borrar}
              modificar={modificar}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
