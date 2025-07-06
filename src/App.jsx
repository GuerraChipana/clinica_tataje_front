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

function App() {
  return (
    <Routes>
      {/* Rutas del público o paciente */}
      <Route path="/" element={<Home />} />
      <Route path="/login-paciente" element={<LoginPaciente />} />
      <Route path="/registro-paciente" element={<RegistrarsePaciente />} />
      <Route path="/paciente-inicio" element={<PacienteHome />} />


      <Route path="/login/personal" element={<LoginAdm />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="inicio" element={<InicioAdmin />} />
        <Route path="personal" element={<PersonalClinico />} />
        <Route path="pacientes" element={<Pacientes />} />
        <Route path="medicos" element={<Medicos />} />
        <Route path="citas" element={<Citas />} />
        <Route path="historial" element={<Historial_Clinico />} />
        <Route path="especialidades" element={<Especialidades />} />
        <Route path="cuenta" element={<MiCuenta />} />
      </Route>
    </Routes>
  );
}

export default App;
