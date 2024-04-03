import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ModificarProfesor = ({ profesorSeleccionada, modificarProfesor }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [profesor, setProfesor] = useState(profesorSeleccionada);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfesor({ ...profesor, [name]: value });
  };

  const onSubmit = async () => {
    try {
      await modificarProfesor(profesor);
    } catch (error) {
      console.error(error);
      // Manejar el error
    }
  };

  return (
    <div className="container">
      <h1>Modificar Profesor</h1>
      <hr />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">ID de Profesor:</label>
          <input
            type="text"
            className={`form-control ${errors.IdProfesor ? 'is-invalid' : ''}`}
            {...register('IdProfesor', {
              value: profesor.IdProfesor,
              onChange: handleChange,
              pattern: {
                value: /^[0-9]+$/,
                message: 'Ingresa solo números enteros'
              }
            })}
          />
          {errors.IdProfesor && (
            <div className="invalid-feedback">{errors.IdProfesor.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha Nacimiento:</label>
          <input
            type="text"
            className="form-control"
            {...register('FechaNacimiento')}
            value={profesor.FechaNacimiento}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            {...register('Nombre')}
            value={profesor.Nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">ID del Alumno:</label>
          <input
            type="text"
            className={`form-control ${errors.IdAlumno ? 'is-invalid' : ''}`}
            {...register('IdAlumno', {
              value: profesor.IdAlumno,
              onChange: handleChange,
              pattern: {
                value: /^[0-9]+$/,
                message: 'Ingresa solo números enteros'
              }
            })}
          />
          {errors.IdAlumno && (
            <div className="invalid-feedback">{errors.IdAlumno.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary mx-auto d-block btn-lg">
          Modificar Profesor
        </button>
      </form>
    </div>
  );
};

export default ModificarProfesor;
