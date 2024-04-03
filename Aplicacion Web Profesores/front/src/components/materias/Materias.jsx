import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ListadoMaterias from "./ListadoMaterias";
import { alta, baja, modificacion, consulta } from "./MateriasServices";
import ModificarMateria from "./ModificarMateria";
import RegistrarMateria from "./RegistrarMateria";

  export default function Materias() {
    const { register, handleSubmit } = useForm();
    const [lista, setLista] = useState(null);
    const [mostrarModificar, setMostrarModificar] = useState(false);
    const [materiaSeleccionada, setMateriaSeleccionada] = useState(null);
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
  
    const handleModificar = (materia) => {
      setMateriaSeleccionada(materia);
      setMostrarModificar(true);
    };
  
    const handleModificarMateria = async (materiaModificada) => {
      try {
        await modificacion(materiaModificada.IdMateria, { ...materiaModificada });
        const res = await consulta({});
        const dataAsArray = Array.isArray(res.data) ? res.data : [];
        setLista(dataAsArray);
        setMostrarModificar(false);
        setMateriaSeleccionada(materiaModificada); // Actualizar el estado en el componente padre
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
  
    const handleRegistroMateria = async (data) => {
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
        <h1>Materias</h1>
        <hr />
  
        <div>
          <div className="card mb-3">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="form-title text-center">Buscar Materias</h2>
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
          {mostrarModificar && materiaSeleccionada && (
            <ModificarMateria materiaSeleccionada={materiaSeleccionada} modificarMateria={handleModificarMateria} />
          )}
          <ListadoMaterias lista={lista} borrar={borrar} modificar={handleModificar} />
          <button className="btn btn-primary mx-auto d-block btn-lg" onClick={handleMostrarRegistro}>
            Registrar una nueva Materia
          </button>
  
          {/* Agrega el componente RegistrarMateria y muestra/oculta según el estado */}
          {mostrarRegistro && <RegistrarMateria onSubmit={handleRegistroMateria} />}
        </div>
        <hr />
      </div>
    );
  }