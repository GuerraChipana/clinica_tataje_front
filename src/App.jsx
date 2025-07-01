import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import LoginPaciente from './components/LoginPaciente.jsx';
import RegistrarsePaciente from './components/RegisterPaciente.jsx'
// import InicioPaciente from './pages/InicioPaciente.jsx'; // si ya lo tienes

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login-paciente" element={<LoginPaciente />} />
      <Route path="/registro-paciente" element={<RegistrarsePaciente />} />
      {/* <Route path="/paciente/inicio" element={<InicioPaciente />} /> */}
    </Routes>
  );
}

export default App;
