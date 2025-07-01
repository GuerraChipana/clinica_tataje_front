import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, FileText } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel'; // Asegúrate de importar el HeroCarousel
import "../styles/Home.css"; // Si no has agregado el CSS, asegúrate de hacerlo
const Home = () => {
  const services = [
    {
      icon: <Calendar />,
      title: "Reservar una cita",
      description: "Reserva una cita a través de nuestro canal digital",
      buttonText: "Reservar",
    },
    {
      icon: <Users />,
      title: "Staff Médico",
      description: "Conoce a tu doctor de confianza para tu bienestar",
      buttonText: "Conoce al Staff",
    },
    {
      icon: <FileText />,
      title: "Servicios",
      description: "Conoce los servicios que brindamos",
      buttonText: "Conoce más",
    },
  ];

  return (
    <div>
      {/* Header */}
      <header>
        <div className="container">
          <div className="logo">
            <img src="/public/logo.jpg" alt="Clínica Tataje Logo" />
          </div>
          <div className="nav-links">
            <Link to="/">Inicio</Link>
            <Link to="/about">Sobre Nosotros</Link>
            <Link to="/services">Servicios</Link>
            <Link to="/history">Historial</Link>
            <Link to="/contact">Contáctanos</Link>
          </div>
          <div className="auth-buttons">
            <Link to="/login-paciente">Iniciar Sesión</Link>
            <Link to="/patient-register">Regístrate</Link>
          </div>
        </div>
      </header>

      {/* Hero Carousel Section - Nuevo componente agregado */}
      <HeroCarousel />

      {/* Main Section */}
      <section className="main-section">
        <h2>¿En qué podemos ayudarte?</h2>

        <div className="services">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/" className="btn">{service.buttonText}</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

