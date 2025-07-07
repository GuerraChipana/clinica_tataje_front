import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Clínica</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sobre-nosotros">Sobre Nosotros</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/paciente">Paciente</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/historial">Historial</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
            </ul>
            <div>
              <Link to="/login-paciente" className="btn btn-outline-light me-2">Iniciar Sesión</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/banner1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>Miércoles de Bienestar</h3>
            <p>Atiende tu salud con los mejores especialistas</p>
            <Link to="/contacto" className="btn btn-warning">Contáctanos</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/banner2.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h3>Cuidamos de ti</h3>
            <p>Reserva tus citas fácilmente</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Sección de servicios */}
      <div className="container py-5">
        <h2 className="text-center mb-4">¿En qué podemos ayudarte?</h2>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="p-4 border rounded text-center h-100">
              <i className="bi bi-calendar3 display-4 mb-3"></i>
              <h5>Reserva una cita</h5>
              <p>Reserva una cita a través de nuestro canal digital</p>
              <Link to="/reservar" className="btn btn-primary">Reservar</Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-4 border rounded text-center h-100">
              <i className="bi bi-person-vcard display-4 mb-3"></i>
              <h5>Staff Médico</h5>
              <p>Conoce a tu doctor de confianza y sus horarios</p>
              <Link to="/doctores" className="btn btn-primary">Conoce al Staff</Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-4 border rounded text-center h-100">
              <i className="bi bi-journal-medical display-4 mb-3"></i>
              <h5>Servicios</h5>
              <p>Conoce los servicios que brindamos</p>
              <Link to="/servicios" className="btn btn-primary">Conoce más</Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-4 border rounded text-center h-100">
              <i className="bi bi-people display-4 mb-3"></i>
              <h5>Pacientes</h5>
              <p>Atención integral en tu bienestar y el de tu familia</p>
              <Link to="/pacientes" className="btn btn-primary">Conoce más</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
