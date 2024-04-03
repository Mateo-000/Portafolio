import React from "react";
import FilaAula from "./FilaAula";
import ModificarAula from "./ModificarAula";


export default function ListadoAulas({ lista, borrar, modificar }) {
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
            <th>IdAula</th>
            <th>FechaDeConstruccion</th>
            <th>Nombre</th>
            <th>IdAlumno</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((aula) => (
            <FilaAula
              key={aula.IdAula}
              lista={aula}
              borrar={borrar}
              modificar={modificar}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
