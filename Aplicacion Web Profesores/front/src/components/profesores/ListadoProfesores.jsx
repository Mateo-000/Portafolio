import React from "react";
import FilaProfesor from "./FilaProfesor";
import ModificarProfesor from "./ModificarProfesor";


export default function ListadoProfesores({ lista, borrar, modificar }) {
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
            <th>IdProfesor</th>
            <th>IdAlumno</th>
            <th>Nombre</th>
            <th>FechaNacimiento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((profesor) => (
            <FilaProfesor
              key={profesor.IdProfesor}
              lista={profesor}
              borrar={borrar}
              modificar={modificar}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
