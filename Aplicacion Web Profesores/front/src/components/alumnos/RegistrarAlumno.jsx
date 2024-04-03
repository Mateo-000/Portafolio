import React from "react";
import { useForm } from "react-hook-form";

export default function RegistrarAlumno({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="container">
      <h1>Registrar Nuevo Alumno</h1>
      <hr />

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Agrega aquí los campos del formulario */}
        <div className="mb-3">
          <label className="form-label">Id Alumno:</label>
          <input
            type="text"
            className={`form-control ${errors.IdAlumno ? "is-invalid" : ""}`}
            {...register("IdAlumno", {
              pattern: /^[0-9]+$/,
              message: "Por favor, ingresa solo números.",
            })}
          />
          {errors.IdAlumno && (
            <div className="invalid-feedback">{errors.IdAlumno.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha De Nacimiento:</label>
          <input type="text" className="form-control" {...register("FechaNacimiento")} />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input type="text" className="form-control" {...register("Nombre")} />
        </div>
        <button type="submit" className="btn btn-primary mx-auto d-block btn-lg">
          Registrar
        </button>
      </form>
    </div>
  );
}