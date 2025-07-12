import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/SobreNosotros.css'; // Estilos personalizados

function SobreNosotros() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Sección de Introducción */}
      <div className="about-hero">
        <div className="container text-center py-5">
          <h2 className="text-white mb-4">Sobre Nosotros</h2>
          <p className="text-white mb-4 lead">
            En Clínica Tataje, nuestra misión es brindar atención médica de calidad, asegurando que cada paciente reciba el mejor tratamiento posible.
          </p>
        </div>
      </div>

      {/* Sección de Historia de la Clínica */}
      <div className="container py-5">
        <h3 className="text-center mb-4" style={{ color: '#ff7f00' }}>Nuestra Historia</h3>
        <div className="row">
          <div className="col-md-6">
            <p className="about-text">
              Clínica Tataje fue fundada en 2010 con la visión de ofrecer atención médica de calidad y un servicio personalizado. Desde su creación, hemos crecido de manera constante, abriendo nuevas especialidades médicas, aumentando nuestro equipo de profesionales y brindando un servicio integral a nuestros pacientes.
              <br /><br />
              A lo largo de los años, hemos integrado tecnología de punta en nuestros procesos, asegurando que cada paciente reciba atención de alta calidad. Nuestro enfoque humano y profesional ha sido clave para mantenernos a la vanguardia de la salud.
            </p>
          </div>
          <div className="col-md-6">
            <img src="https://i.pinimg.com/736x/44/fb/e3/44fbe310770447c7e7f39ad6e55aa22b.jpg" alt="Historia de la Clínica" className="img-fluid rounded shadow-lg" />
          </div>
        </div>
      </div>

      {/* Sección de Misión y Visión */}
      <div className="container py-5">
        <h3 className="text-center mb-4" style={{ color: '#ff7f00' }}>Misión y Visión</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="mission-box">
              <h4>Misión</h4>
              <p>
                Nos comprometemos a ofrecer atención médica de calidad, con un enfoque humano y personalizado. Nuestro equipo de profesionales altamente calificados está preparado para atender las necesidades de cada paciente, asegurando un diagnóstico preciso y un tratamiento efectivo en cada especialidad.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="vision-box">
              <h4>Visión</h4>
              <p>
                Ser reconocidos como la clínica líder en la región, no solo por la excelencia en atención médica, sino también por nuestra capacidad para adaptarnos a las nuevas tendencias en salud, incorporando innovaciones tecnológicas que permitan mejorar la calidad de vida de nuestros pacientes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Estadísticas y Logros */}
      <div className="container py-5">
        <h3 className="text-center mb-4" style={{ color: '#ff7f00' }}>Nuestros Logros en Números</h3>
        <div className="row text-center">
          <div className="col-md-3">
            <div className="stat-box">
              <h4>10+</h4>
              <p>Médicos Especialistas</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-box">
              <h4>20K+</h4>
              <p>Pacientes Atendidos</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-box">
              <h4>10+</h4>
              <p>Años de Experiencia</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-box">
              <h4>5</h4>
              <p>Áreas Especializadas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default SobreNosotros;
