import React from "react";
{/*export default function Filaalumno({lista, borrar, modificar}){
    const { IdAlumno, FechaDeConstruccion, Nombre, IdAlumno} = lista;

    return(
        <>
            <tr key={IdAlumno} onClick={()=>{borrar(IdAlumno)}}>
                <td>{IdAlumno}</td>
                <td>{FechaDeConstruccion}</td>
                <td>{Nombre}</td>
            </tr>
            
        </>

    );
};

*/}


export default function FilaAlumno({ lista, borrar, modificar }) {
  const { IdAlumno, FechaNacimiento, Nombre} = lista;

  return (
    <tr>
      <td>{IdAlumno}</td>
      <td>{FechaNacimiento}</td>
      <td>{Nombre}</td>
      <td>
        <button className="btn btn-primary" onClick={() => modificar(lista)}>Modificar</button>
        <button className="btn btn-danger"onClick={() => borrar(IdAlumno)}>Eliminar</button>
      </td>
    </tr>
  );
}
