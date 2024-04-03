import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ListadoAlumnos from "./ListadoAlumnos";
import { alta, baja, modificacion, consulta } from "./AlumnosServices";
import ModificarAlumno from "./ModificarAlumno";
import RegistrarAlumno from "./RegistrarAlumno";

  export default function Alumnos() {
    const { register, handleSubmit } = useForm();
    const [lista, setLista] = useState(null);
    const [mostrarModificar, setMostrarModificar] = useState(false);
    const [alumnoSeleccionada, setalumnoSeleccionada] = useState(null);
    const [mostrarRegistro, setMostrarRegistro] = useState(false); // Agrega el estado para mostrar/ocultar el formulario de registro
  
    useEffect(() => {
      const obtenerDatos = async () => {
        try {
          const res = await consulta({});
          console.log(res.data); // Verifica los datos recibidos desde el backend
          setLista(res.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      obtenerDatos();
    }, []);
  
    const onSubmit = async (data) => {
      try {
        const res = await consulta(data);
        const dataAsArray = Array.isArray(res.data) ? res.data : [];
        setLista(dataAsArray);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleModificar = (alumno) => {
      setalumnoSeleccionada(alumno);
      setMostrarModificar(true);
    };
  
    const handleModificarAlumno = async (alumnoModificada) => {
      try {
        await modificacion(alumnoModificada.IdAlumno, { ...alumnoModificada });
        const res = await consulta({});
        const dataAsArray = Array.isArray(res.data) ? res.data : [];
        setLista(dataAsArray);
        setMostrarModificar(false);
        setalumnoSeleccionada(alumnoModificada); // Actualizar el estado en el componente padre
      } catch (error) {
        console.error(error);
        // Manejar el error
      }
    };
  
    const borrar = async function (id) {
      alert(await baja(id));
      try {
        const res = await consulta({});
        const dataAsArray = Array.isArray(res.data) ? res.data : [];
        setLista(dataAsArray);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleMostrarRegistro = () => {
      setMostrarRegistro(true);
    };
  
    const handleRegistroAlumno = async (data) => {
      try {
        await alta(data);
        const res = await consulta({});
        const dataAsArray = Array.isArray(res.data) ? res.data : [];
        setLista(dataAsArray);
        setMostrarRegistro(false);
      } catch (error) {
        console.error(error);
        // Manejar el error
      }
    };
  
    return (
      <div className="container">
        <h1>Alumnos</h1>
        <hr />
  
        <div>
          <div className="card mb-3">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="form-title text-center">Buscar Alumnos</h2>
                <hr />
                <div className="mb-3">
                  <label className="form-label">Nombre: </label>
                  <input type="text" className="form-control" {...register("Nombre")} />
                </div>
                <button type="submit" className="btn btn-primary mx-auto d-block btn-lg">
                  Buscar
                </button>
              </form>
            </div>
          </div>
          {mostrarModificar && alumnoSeleccionada && (
            <ModificarAlumno alumnoSeleccionada={alumnoSeleccionada} ModificarAlumno={handleModificarAlumno} />
          )}
          <ListadoAlumnos lista={lista} borrar={borrar} modificar={handleModificar} />
          <button className="btn btn-primary mx-auto d-block btn-lg" onClick={handleMostrarRegistro}>
            Registrar un nuevo Alumno
          </button>
  
          {/* Agrega el componente RegistrarAlumno y muestra/oculta según el estado */}
          {mostrarRegistro && <RegistrarAlumno onSubmit={handleRegistroAlumno} />}
        </div>
        <hr />
      </div>
    );
  }