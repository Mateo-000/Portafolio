import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ModificarMateria = ({ materiaSeleccionada, modificarMateria }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [materia, setMateria] = useState(materiaSeleccionada);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMateria({ ...materia, [name]: value });
  };

  const onSubmit = async () => {
    try {
      await modificarMateria(materia);
    } catch (error) {
      console.error(error);
      // Manejar el error
    }
  };

  return (
    <div className="container">
      <h1>Modificar Materia</h1>
      <hr />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">ID de Materia:</label>
          <input
            type="text"
            className="form-control"
            {...register("IdMateria", {
              required: true,
              pattern: /^[0-9]+$/,
            })}
            value={materia.IdMateria}
            onChange={handleChange}
          />
          {errors.IdMateria && <span className="text-danger">Por favor ingresa solo números</span>}
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha Implementacion:</label>
          <input
            type="text"
            className="form-control"
            {...register("FechaImplementacion")}
            value={materia.FechaImplementacion}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            {...register("Nombre")}
            value={materia.Nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">ID del Alumno:</label>
          <input
            type="text"
            className="form-control"
            {...register("IdAlumno", {
              required: true,
              pattern: /^[0-9]+$/,
            })}
            value={materia.IdAlumno}
            onChange={handleChange}
          />
          {errors.IdAlumno && <span className="text-danger">Por favor ingresa solo números</span>}
        </div>

        <button type="submit" className="btn btn-primary mx-auto d-block btn-lg">Modificar Materia</button>
      </form>
    </div>
  );
};

export default ModificarMateria;