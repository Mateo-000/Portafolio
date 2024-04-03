import './App.css';
import {Menu} from './components/Menu';
import { Inicio } from './components/Inicio';
import Aulas from './components/aulas/Aulas'
import Alumnos from './components/alumnos/Alumnos'
import Materias from './components/materias/Materias'
import Profesores from './components/profesores/Profesores'

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div>

      <BrowserRouter>
          <Menu />
          <div className="divBody">
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/materias" element={<Materias />} />
              <Route path="/profesores" element={<Profesores />} />
              <Route path="/aulas" element={<Aulas />} />
              <Route path="/alumnos" element={<Alumnos />} />
              <Route path="*" element={<Navigate to="/inicio" replace />} />
            </Routes>
          </div>
        </BrowserRouter>

    
    </div>
  );
}

export default App;
