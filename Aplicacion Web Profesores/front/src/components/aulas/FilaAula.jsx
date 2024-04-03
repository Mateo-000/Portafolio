import React from "react";

export default function FilaAula({ lista, borrar, modificar }) {
  const { IdAula, FechaDeConstruccion, Nombre, IdAlumno } = lista;

  return (
    <tr>
      <td>{IdAula}</td>
      <td>{FechaDeConstruccion}</td>
      <td>{Nombre}</td>
      <td>{IdAlumno}</td>
      <td>
        <button className="btn btn-primary" onClick={() => modificar(lista)}>Modificar</button>
        <button className="btn btn-danger"onClick={() => borrar(IdAula)}>Eliminar</button>
      </td>
    </tr>
  );
}
