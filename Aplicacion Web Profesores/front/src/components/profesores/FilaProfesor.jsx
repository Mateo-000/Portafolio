import React from "react";

export default function FilaProfesor({ lista, borrar, modificar }) {
  const { IdProfesor, IdAlumno, Nombre, FechaNacimiento } = lista;

  return (
    <tr>
      <td>{IdProfesor}</td>
      <td>{IdAlumno}</td>
      <td>{Nombre}</td>
      <td>{FechaNacimiento}</td>
      <td>
        <button className="btn btn-primary" onClick={() => modificar(lista)}>Modificar</button>
        <button className="btn btn-danger"onClick={() => borrar(IdProfesor)}>Eliminar</button>
      </td>
    </tr>
  );
}
