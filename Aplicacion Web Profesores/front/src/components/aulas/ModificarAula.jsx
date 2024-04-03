import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ModificarAula = ({ aulaSeleccionada, modificarAula }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [aula, setAula] = useState(aulaSeleccionada);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAula({ ...aula, [name]: value });
  };

  const onSubmit = async () => {
    try {
      await modificarAula(aula);
    } catch (error) {
      console.error(error);
      // Manejar el error
    }
  };

  return (
    <div className="container">
      <h1>Modificar Aula</h1>
      <hr />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">ID del Aula:</label>
          <input
            type="text"
            className={`form-control ${errors.IdAula ? 'is-invalid' : ''}`}
            {...register('IdAula', {
              value: aula.IdAula,
              onChange: handleChange,
              pattern: {
                value: /^[0-9]+$/,
                message: 'Ingresa solo números enteros'
              }
            })}
          />
          {errors.IdAula && (
            <div className="invalid-feedback">{errors.IdAula.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha de Construcción:</label>
          <input
            type="text"
            className="form-control"
            {...register('FechaDeConstruccion')}
            value={aula.FechaDeConstruccion}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            {...register('Nombre')}
            value={aula.Nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">ID del Alumno:</label>
          <input
            type="text"
            className={`form-control ${errors.IdAlumno ? 'is-invalid' : ''}`}
            {...register('IdAlumno', {
              value: aula.IdAlumno,
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
          Modificar Aula
        </button>
      </form>
    </div>
  );
};

export default ModificarAula;
