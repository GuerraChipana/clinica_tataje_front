// Medicos.jsx
import React, { useEffect, useState } from 'react';
import {
  obtenerTodosLosMedicos,
  eliminarMedico,
} from '../services/medicoService';
import MedicoModal from './components/MedicoModal';

function Medicos() {
  const [medicos, setMedicos] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [modo, setModo] = useState('crear');
  const [medicoSeleccionado, setMedicoSeleccionado] = useState(null);

  const cargarMedicos = async () => {
    try {
      const response = await obtenerTodosLosMedicos();
      setMedicos(response.data.data);
    } catch (error) {
      console.error('Error al cargar médicos', error);
    }
  };

  useEffect(() => {
    cargarMedicos();
  }, []);

  const abrirModalCrear = () => {
    setModo('crear');
    setMedicoSeleccionado(null);
    setMostrarModal(true);
  };

  const abrirModalEditar = (medico) => {
    setModo('editar');
    setMedicoSeleccionado(medico);
    setMostrarModal(true);
  };

  const handleEliminar = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este médico?')) {
      try {
        await eliminarMedico(id);
        cargarMedicos();
      } catch (error) {
        console.error('Error al eliminar médico', error);
      }
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Médicos Registrados</h2>
        <button className="btn btn-primary" onClick={abrirModalCrear}>Registrar Médico</button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark text-center">
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Correo</th>
              <th>Especialidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {medicos.map((medico) => (
              <tr key={medico.id_medico}>
                <td>{medico.id_medico}</td>
                <td>{medico.personal_clinico?.nombres || 'No disponible'}</td>
                <td>
                  {(medico.personal_clinico?.apellido_paterno || '') + ' ' +
                    (medico.personal_clinico?.apellido_materno || '')}
                </td>
                <td>{medico.personal_clinico?.email || 'No disponible'}</td>
                <td>{medico.especialidad?.nombre || 'No asignado'}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => abrirModalEditar(medico)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleEliminar(medico.id_medico)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {mostrarModal && (
        <MedicoModal
          modo={modo}
          medico={medicoSeleccionado}
          onClose={() => setMostrarModal(false)}
          onSuccess={cargarMedicos}
        />
      )}
    </div>
  );
}

export default Medicos;