import React from "react";
import { useForm } from "react-hook-form";

export default function RegistrarMateria({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="container">
      <h1>Registrar Nueva Materia</h1>
      <hr />

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Agrega aquí los campos del formulario */}
        <div className="mb-3">
          <label className="form-label">Id Materia:</label>
          <input
            type="text"
            className={`form-control ${errors.IdMateria ? "is-invalid" : ""}`}
            {...register("IdMateria", {
              pattern: /^[0-9]+$/,
              message: "Por favor, ingresa solo números.",
            })}
          />
          {errors.IdMateria && (
            <div className="invalid-feedback">{errors.IdMateria.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha Implementacion:</label>
          <input type="text" className="form-control" {...register("FechaImplementacion")} />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input type="text" className="form-control" {...register("Nombre")} />
        </div>
        <div className="mb-3">
          <label className="form-label">IdAlumno:</label>
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

        <button type="submit" className="btn btn-primary mx-auto d-block btn-lg">
          Registrar
        </button>
      </form>
    </div>
  );
}