import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenido a la clínica</h1>
      <Link to="/login-paciente">
        <button>Iniciar sesión</button>
      </Link>
    </div>
  );
}

export default Home;
