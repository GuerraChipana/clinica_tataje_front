import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/admin/OffcanvasCustom.css';
import '../styles/admin/CarouselCustom.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
  return (
    <div>
      <Header/>

      {/* CAROUSEL */}
      <Carousel controls={false} indicators={true}>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/banner1.jpg" alt="Banner 1" style={{ height: '400px', objectFit: 'cover' }} />
          <Carousel.Caption>
            <h2 className="text-light">Miércoles de Bienestar</h2>
            <p>Cuidamos tu salud con los mejores especialistas</p>
            <Link to="/contacto" className="btn btn-dark">Contáctanos</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/banner2.jpg" alt="Banner 2" style={{ height: '400px', objectFit: 'cover' }} />
          <Carousel.Caption>
            <h2 className="text-light">Agenda tu cita ahora</h2>
            <p>Fácil, rápido y sin complicaciones</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* SERVICIOS */}
      <div className="container py-5">
        <h2 className="text-center mb-4" style={{ color: '#ff7f00' }}>¿En qué podemos ayudarte?</h2>
        <div className="row g-4">
          {[ 
            { icon: "calendar3", title: "Reserva una cita", desc: "Agenda desde casa", link: "/reservar", label: "Reservar" },
            { icon: "person-vcard", title: "Staff Médico", desc: "Conoce a nuestros especialistas", link: "/staffMedico", label: "Conoce al Staff" },
            { icon: "journal-medical", title: "Servicios", desc: "Consulta nuestros servicios", link: "/servicios", label: "Conoce más" },
            { icon: "people", title: "Pacientes", desc: "Atención integral para ti", link: "/pacientes", label: "Ver más" },
          ].map((item, idx) => (
            <div className="col-md-3" key={idx}>
              <div className="p-4 border rounded text-center h-100 bg-light shadow-sm">
                <i className={`bi bi-${item.icon} display-4 mb-3`} style={{ color: '#ff7f00' }}></i>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
                <Link to={item.link} className="btn btn-dark">{item.label}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VALORES */}
      <div style={{ backgroundColor: '#ff7f00' }} className="text-white py-5">
        <div className="container text-center">
          <h3 className="mb-4">Nuestros valores nos definen</h3>
          <div className="row">
            {['Calidez Humana', 'Tecnología Moderna', 'Profesionales Expertos', 'Atención Rápida'].map((val, i) => (
              <div className="col-md-3 mb-3" key={i}>
                <div className="p-3 bg-white text-dark rounded shadow-sm h-100 fw-bold">{val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIOS */}
      <div className="container py-5">
        <h3 className="text-center mb-4" style={{ color: '#ff7f00' }}>Testimonios de nuestros pacientes</h3>
        <div className="row g-4">
          {[ 
            { name: "Ana R.", text: "Excelente atención, rápida y profesional." },
            { name: "Carlos M.", text: "Los doctores son muy empáticos y me ayudaron bastante." },
            { name: "Lucía G.", text: "Recomiendo la clínica, muy moderna y eficiente." },
          ].map((test, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="border p-4 rounded shadow-sm h-100">
                <p className="fst-italic">"{test.text}"</p>
                <h6 className="mt-3 text-end">- {test.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-4 text-center" style={{ backgroundColor: '#ff7f00', color: '#fff' }}>
        <h4>¿Listo para cuidar tu salud?</h4>
        <Link to="/reservar" className="btn btn-dark mt-2">Reserva tu cita ahora</Link>
      </div>

      {/* FOOTER */}
      <Footer/>
    </div>
  );
}

export default Home;
