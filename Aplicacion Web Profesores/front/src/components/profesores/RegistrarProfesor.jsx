import React from "react";
import { useForm } from "react-hook-form";

export default function RegistrarProfesor({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    try {
      onSubmit(data);
    } catch (error) {
      console.error(error);
      // Manejar el error
    }
  };

  return (
    <div className="container">
      <h1>Registrar Nuevo Profesor</h1>
      <hr />

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-3">
          <label className="form-label">ID de Profesor:</label>
          <input
            type="text"
            className={`form-control ${
              errors.IdProfesor ? "is-invalid" : ""
            }`}
            {...register("IdProfesor", {
              required: "Este campo es requerido",
              pattern: {
                value: /^[0-9]+$/,
                message: "Por favor, ingresa solo números.",
              },
            })}
          />
          {errors.IdProfesor && (
            <div className="invalid-feedback">
              {errors.IdProfesor.message}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha Nacimiento:</label>
          <input
            type="text"
            className="form-control"
            {...register("FechaNacimiento")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            {...register("Nombre")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">ID del Alumno:</label>
          <input
            type="text"
            className={`form-control ${
              errors.IdAlumno ? "is-invalid" : ""
            }`}
            {...register("IdAlumno", {
              required: "Este campo es requerido",
              pattern: {
                value: /^[0-9]+$/,
                message: "Por favor, ingresa solo números.",
              },
            })}
          />
          {errors.IdAlumno && (
            <div className="invalid-feedback">
              {errors.IdAlumno.message}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary mx-auto d-block btn-lg"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}
