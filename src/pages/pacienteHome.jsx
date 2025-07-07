import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { misDatos } from "../services/pacientes";
import { obtenerHistorialPaciente } from "../services/historialClinicoService";
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Alert,
  Badge,
  Button,
  Modal,
} from "react-bootstrap";
import { FaMars, FaVenus, FaPlus, FaCalendarAlt, FaSignOutAlt } from "react-icons/fa";
import HistorialClinico from "../components/HistorialClinico";
import CrearCitaPaciente from "../components/CrearCitaPaciente";
import VerCitasPaciente from "../components/VerCitasPaciente";

const PacienteHome = () => {
  const [paciente, setPaciente] = useState(null);
  const [historial, setHistorial] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCitasModal, setShowCitasModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchDatos();
  }, []);

  const fetchDatos = async () => {
    setLoading(true);
    try {
      const [resPaciente, resHistorial] = await Promise.all([
        misDatos(),
        obtenerHistorialPaciente(),
      ]);
      setPaciente(resPaciente.data);
      setHistorial(resHistorial.data);
    } catch (err) {
      console.error(err);
      setError("No se pudieron obtener los datos del paciente.");
    } finally {
      setLoading(false);
    }
  };

  const handleCerrarModal = () => setShowModal(false);

  const handleCerrarCitasModal = () => setShowCitasModal(false);

  const handleCitaCreada = () => {
    handleCerrarModal();
    // opcional: refrescar historial
  };

  const renderGeneroIcon = (genero) =>
    genero === "Masculino" ? (
      <FaMars className="text-primary ms-2" />
    ) : (
      <FaVenus className="text-danger ms-2" />
    );

  const handleSalir = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2">Cargando datos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="text-center mt-4">
        {error}
      </Alert>
    );
  }

  return (
    <Container fluid className="py-4">
      <div className="d-flex justify-content-end mb-2">
        <Button variant="danger" onClick={handleSalir}>
          <FaSignOutAlt /> Salir
        </Button>
      </div>

      <h3 className="text-center text-primary mb-4">👤 Perfil del Paciente</h3>

      <Row>
        <Col md={4}>
          <Card className="shadow-sm border-0 mb-4">
            <Card.Header className="bg-primary text-white text-center">
              <h5 className="mb-0">Datos Personales</h5>
            </Card.Header>
            <Card.Body>
              <Card.Title className="d-flex align-items-center justify-content-between">
                <span>
                  {paciente.nombres} {paciente.apellido_paterno}
                </span>
                {renderGeneroIcon(paciente.genero)}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                DNI: <Badge bg="secondary">{paciente.dni}</Badge>
              </Card.Subtitle>
              <hr />
              <p>
                <strong>Apellido Materno:</strong> {paciente.apellido_materno}
              </p>
              <p>
                <strong>F. Nacimiento:</strong> {paciente.fecha_nacimiento}
              </p>
              <p>
                <strong>Ubigeo:</strong> {paciente.ubigeo}
              </p>
              <p>
                <strong>Dirección:</strong>{" "}
                {paciente.direccion || <em>No registrada</em>}
              </p>
              <p>
                <strong>Teléfono:</strong>{" "}
                {paciente.telefono || <em>No registrado</em>}
              </p>
            </Card.Body>
          </Card>

          <div className="d-grid gap-2">
            <Button variant="info" onClick={() => setShowCitasModal(true)}>
              <FaCalendarAlt /> Ver Citas
            </Button>
            <Button variant="success" onClick={() => setShowModal(true)}>
              <FaPlus /> Crear Cita
            </Button>
          </div>
        </Col>

        <Col md={8}>
          <HistorialClinico historial={historial} paciente={paciente} />
        </Col>
      </Row>

      {/* Modal con el formulario */}
      <Modal show={showModal} onHide={handleCerrarModal} size="lg" centered>
        <Modal.Body>
          <CrearCitaPaciente
            onCitaCreada={handleCitaCreada}
            onCancel={handleCerrarModal}
          />
        </Modal.Body>
      </Modal>

      <Modal
        show={showCitasModal}
        onHide={handleCerrarCitasModal}
        size="xl"
        centered
      >
        <Modal.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0">📅 Citas del Paciente</h4>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={handleCerrarCitasModal}
            >
              ✖
            </Button>
          </div>
          <VerCitasPaciente pacienteId={paciente.id} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default PacienteHome;
