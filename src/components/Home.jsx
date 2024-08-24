import React from 'react';
import appFirebase from '../creedenciales';
import { getAuth, signOut } from 'firebase/auth';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SalasMac from './SalasMac';
import AulasDeClases from './AulasDeClases';
import EquiposObjetos from './EquiposObjetos';

const auth = getAuth(appFirebase);

const Home = ({ correoUsuario }) => {
  return (
    <Router>
      <div>
        <h2 className='text-center'>Bienvenido</h2>
        <div>
          <div className="tm-brand-box">
            <h1 className="tm-brand">Calendario Unipaz</h1>
          </div>
          <ul id="tm-main-nav">
            <li className="nav-item">
              <Link to="/salas-mac" className="nav-link">
                <div className="triangle-right"></div>
                <i className="fas fa-home nav-icon"></i>
                Salas mac
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aulas-de-clases" className="nav-link">
                <div className="triangle-right"></div>
                <i className="fas fa-images nav-icon"></i>
                Aulas de clases
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/equipos-objetos" className="nav-link">
                <div className="triangle-right"></div>
                <i className="fas fa-user-friends nav-icon"></i>
                Equipos o objetos
              </Link>
            </li>
          </ul>
        </div>

        <button className='btn-btn-primary' onClick={() => signOut(auth)}>Salir</button>

        <Routes>
          <Route path="/salas-mac" element={<SalasMac />} />
          <Route path="/aulas-de-clases" element={<AulasDeClases />} />
          <Route path="/equipos-objetos" element={<EquiposObjetos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
