import React, { useState } from 'react';
import { getPacientes } from '../services/pacientes';
import { obtenerHistorialPorID } from '../services/historialClinicoService';
import {
  Container, Row, Col, Card, Form, Button, Alert, Badge, Dropdown, DropdownButton
} from 'react-bootstrap';
import { FaMars, FaVenus, FaSearch, FaTimesCircle } from 'react-icons/fa';
import ConsultaPdfButton from './components/ConsultaPdfButton';

function Historial_Clinico() {
  const [dni, setDni] = useState('');
  const [paciente, setPaciente] = useState(null);
  const [historial, setHistorial] = useState([]);
  const [error, setError] = useState('');

  // filtros adicionales
  const [filtros, setFiltros] = useState({ motivo: '', fecha: '', medico: '', especialidad: '' });

  const buscarHistorial = async () => {
    setError('');
    setPaciente(null);
    setHistorial([]);

    try {
      const { data } = await getPacientes();
      const encontrado = data.find((p) => p.dni === dni);
      if (!encontrado) {
        setError('Paciente no encontrado');
        return;
      }
      setPaciente(encontrado);

      const response = await obtenerHistorialPorID({ id_paciente: encontrado.id_paciente });
      setHistorial(response.data);
    } catch (err) {
      setError('Ocurrió un error al buscar el historial.');
    }
  };

  const limpiar = () => {
    setDni('');
    setPaciente(null);
    setHistorial([]);
    setError('');
    setFiltros({ motivo: '', fecha: '', medico: '', especialidad: '' });
  };

  const renderGeneroIcon = (genero) => {
    return genero === 'Masculino'
      ? <FaMars className="text-primary ms-2" />
      : <FaVenus className="text-danger ms-2" />;
  };

  const handleFiltro = (tipo, valor) => {
    setFiltros({ ...filtros, [tipo]: valor });
  };

  return (
    <Container fluid className="py-4">
      <h3 className="mb-4 text-center text-primary">
        📋 Historial Clínico del Paciente
      </h3>

      <Form className="mb-4">
        <Row className="align-items-end g-2 justify-content-center">
          <Col md={4}>
            <Form.Group>
              <Form.Label>DNI del Paciente</Form.Label>
              <Form.Control
                type="text"
                maxLength={8}
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                placeholder="Ingrese DNI (8 dígitos)"
              />
            </Form.Group>
          </Col>
          <Col md="auto">
            <Button variant="primary" onClick={buscarHistorial}>
              <FaSearch /> Buscar
            </Button>
          </Col>
          {paciente && (
            <Col md="auto">
              <Button variant="outline-danger" onClick={limpiar}>
                <FaTimesCircle /> Limpiar
              </Button>
            </Col>
          )}
        </Row>
      </Form>

      {error && <Alert variant="danger">{error}</Alert>}

      {paciente && (
        <Row>
          {/* Panel izquierdo */}
          <Col md={4}>
            <Card className="mb-4 shadow-sm border-0">
              <Card.Header className="bg-primary text-white text-center">
                <h5 className="mb-0">Datos del Paciente</h5>
              </Card.Header>
              <Card.Body>
                <Card.Title className="d-flex align-items-center justify-content-between">
                  <span>{paciente.nombres} {paciente.apellido_paterno}</span>
                  {renderGeneroIcon(paciente.genero)}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  DNI: <Badge bg="secondary">{paciente.dni}</Badge>
                </Card.Subtitle>
                <hr />
                <p><strong>Apellido Materno:</strong> {paciente.apellido_materno}</p>
                <p><strong>F. Nacimiento:</strong> {paciente.fecha_nacimiento}</p>
                <p><strong>Ubigeo:</strong> {paciente.ubigeo}</p>
                <p><strong>Teléfono:</strong> {paciente.telefono || <em>No registrado</em>}</p>
              </Card.Body>
            </Card>

            {/* Filtros debajo */}
            <Card className="shadow-sm border-0">
              <Card.Header className="bg-info text-white text-center">
                <h6 className="mb-0">Filtros de Búsqueda</h6>
              </Card.Header>
              <Card.Body>
                {['motivo', 'fecha', 'medico', 'especialidad'].map((filtro) => (
                  <div key={filtro} className="mb-2">
                    <DropdownButton
                      size="sm"
                      variant="outline-secondary"
                      title={filtros[filtro] || `Seleccionar ${filtro}`}
                    >
                      <Dropdown.Item onClick={() => handleFiltro(filtro, 'Opción 1')}>Opción 1</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleFiltro(filtro, 'Opción 2')}>Opción 2</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleFiltro(filtro, 'Opción 3')}>Opción 3</Dropdown.Item>
                    </DropdownButton>
                  </div>
                ))}

                <div className="mt-3">
                  {Object.entries(filtros).map(([k, v]) =>
                    v && (
                      <Badge bg="secondary" className="me-1" key={k}>
                        {k}: {v}
                      </Badge>
                    )
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Panel derecho */}
          <Col md={8}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Header className="bg-success text-white text-center">
                <h5 className="mb-0">Consultas Médicas</h5>
              </Card.Header>
              <Card.Body
                style={{
                  maxHeight: '600px',
                  overflowY: 'auto',
                  background: '#f9f9f9'
                }}
              >
                <Row xs={1} md={1} className="g-3">
                  {historial.length > 0 ? (
                    historial.map((consulta) => (
                      <Col key={consulta.id_consulta}>
                        <Card className="h-100 shadow-sm border border-success">
                          <Card.Header className="bg-light text-center">
                            <strong className="text-success">
                              Consulta #{consulta.id_consulta}
                            </strong>
                          </Card.Header>
                          <Card.Body>
                            <div className="d-flex justify-content-end mb-2">
                              <ConsultaPdfButton consulta={consulta} paciente={paciente} />
                            </div>
                            <Card.Subtitle className="mb-2 text-muted">
                              <small>
                                <strong>Fecha:</strong> {consulta.cita.fecha} <br />
                                <strong>Hora:</strong> {consulta.cita.hora}
                              </small>
                            </Card.Subtitle>
                            <p><strong>Motivo:</strong> {consulta.cita.motivo}</p>
                            <p><strong>Diagnóstico:</strong> {consulta.diagnostico}</p>
                            <p><strong>Tratamiento:</strong> {consulta.tratamiento}</p>
                            {consulta.observaciones && (
                              <p><strong>Observaciones:</strong> {consulta.observaciones}</p>
                            )}
                            <hr />
                            <p className="mb-0">
                              <strong>Médico:</strong> {consulta.cita.medico.nombres} {consulta.cita.medico.apellido_paterno}<br />
                              <strong>Especialidad:</strong> {consulta.cita.medico.especialidad}
                            </p>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))
                  ) : (
                    <p className="text-muted text-center">
                      No se encontraron consultas médicas para este paciente.
                    </p>
                  )}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Historial_Clinico;
