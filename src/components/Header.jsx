import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#ff7f00' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.jpg" alt="Clínica" style={{ height: '60px' }} />
        </Link>
        <button className="navbar-toggler d-lg-none text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-none d-lg-flex justify-content-end">
          <ul className="navbar-nav">
            {["Inicio", "Sobre Nosotros", "Paciente", "Historial", "Contacto"].map((item, i) => (
              <li className="nav-item" key={i}>
                <Link className="nav-link text-white" to={item === "Inicio" ? "/" : "/" + item.toLowerCase().replace(" ", "-")}>{item}</Link>
              </li>
            ))}
          </ul>
          <Link to="/login-paciente" className="btn btn-dark ms-3">Iniciar Sesión</Link>
        </div>

        <div className="offcanvas offcanvas-end text-bg-dark d-lg-none" id="offcanvasNavbar">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menú</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="offcanvas-body d-flex flex-column justify-content-between">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link text-white" to="/">Inicio</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/sobre-nosotros">Sobre Nosotros</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/paciente">Paciente</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/historial">Historial</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/contacto">Contacto</Link></li>
            </ul>
            <Link to="/login-paciente" className="btn mt-3 w-100 btn-dark">Iniciar Sesión</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
