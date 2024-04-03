import React from "react";

export default function FilaMateria({ lista, borrar, modificar }) {
  const { IdMateria, FechaImplementacion, Nombre, IdAlumno } = lista;

  return (
    <tr>
      <td>{IdMateria}</td>
      <td>{FechaImplementacion}</td>
      <td>{Nombre}</td>
      <td>{IdAlumno}</td>
      <td>
        <button className="btn btn-primary" onClick={() => modificar(lista)}>Modificar</button>
        <button className="btn btn-danger"onClick={() => borrar(IdMateria)}>Eliminar</button>
      </td>
    </tr>
  );
}
