import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ModificarAlumno = ({ alumnoSeleccionada, ModificarAlumno }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [alumno, setAlumno] = useState(alumnoSeleccionada);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAlumno({ ...alumno, [name]: value });
  };

  const onSubmit = async () => {
    try {
      await ModificarAlumno(alumno);
    } catch (error) {
      console.error(error);
      // Manejar el error
    }
  };

  return (
    <div className="container">
      <h1>Modificar Alumno</h1>
      <hr />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">ID del Alumno:</label>
          <input
            type="text"
            className="form-control"
            {...register("IdAlumno", {
              required: true,
              pattern: /^[0-9]+$/,
            })}
            value={alumno.IdAlumno}
            onChange={handleChange}
          />
          {errors.IdAlumno && <span className="text-danger">Por favor ingresa solo números</span>}
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha de Nacimiento:</label>
          <input
            type="text"
            className="form-control"
            {...register("FechaNacimiento")}
            value={alumno.FechaNacimiento}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            {...register("Nombre")}
            value={alumno.Nombre}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary mx-auto d-block btn-lg">Modificar Alumno</button>
      </form>
    </div>
  );
};

export default ModificarAlumno;