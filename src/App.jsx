import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import LoginPaciente from './components/LoginPaciente.jsx';
import RegistrarsePaciente from './components/RegisterPaciente.jsx';

import PacienteHome from './pages/pacienteHome.jsx';
import LoginAdm from './admin/LoginAdm.jsx';
import AdminLayout from './admin/AdminLayout.jsx';
import InicioAdmin from './admin/InicioAdmin.jsx';
import PersonalClinico from './admin/PersonalClinico.jsx';
import Pacientes from './admin/Pacientes.jsx';
import Citas from './admin/Citas.jsx';
import Historial_Clinico from './admin/Historial_Clinico.jsx';
import Especialidades from './admin/Especialidades.jsx';
import MiCuenta from './admin/MiCuenta.jsx';
import Medicos from './admin/Medicos.jsx';

import Cli_Especialidad from './pages/Cli_Especialidad.jsx';
import Nosotros from './pages/Nosotros.jsx';

import PrivateRoute from './components/PrivateRoute.jsx';
import Doctores from './pages/Doctores.jsx';

function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/especialidad" element={<Cli_Especialidad />} />
      <Route path="/medicos" element={<Doctores />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/login-paciente" element={<LoginPaciente />} />
      <Route path="/registro-paciente" element={<RegistrarsePaciente />} />
      <Route path="/login/personal" element={<LoginAdm />} />

      {/* Rutas protegidas para PACIENTE */}
      <Route element={<PrivateRoute allowedRoles={['paciente']} />}>
        <Route path="/paciente-inicio" element={<PacienteHome />} />
      </Route>

      {/* Rutas protegidas para ADMIN / PERSONAL */}
      <Route element={<PrivateRoute allowedRoles={['superadministrador', 'administrador', 'medico', 'secretaria']} />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="inicio" element={<InicioAdmin />} />
          <Route path="pacientes" element={<Pacientes />} />
          <Route path="citas" element={<Citas />} />
          <Route path="historial" element={<Historial_Clinico />} />
          <Route path="cuenta" element={<MiCuenta />} />

          {/* Aquí protegemos sólo para superadministrador y administrador */}
          <Route element={<PrivateRoute allowedRoles={['superadministrador', 'administrador']} />}>
            <Route path="personal" element={<PersonalClinico />} />
            <Route path="especialidades" element={<Especialidades />} />
            <Route path="medicos" element={<Medicos />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
