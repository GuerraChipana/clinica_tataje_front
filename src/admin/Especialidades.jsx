import React, { useEffect, useState } from 'react';
import {
  obtenerEspecialidades,
  eliminarEspecialidad
} from '../services/especialidadesServices.js';
import CrearEspecialidadModal from './components/CrearEspecialidadModal.jsx';

function Especialidades() {
  const [especialidades, setEspecialidades] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [modo, setModo] = useState('crear');
  const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState(null);

  const cargarEspecialidades = () => {
    obtenerEspecialidades()
      .then((data) => setEspecialidades(data.data))
      .catch((error) => console.error('Error al obtener especialidades:', error));
  };

  useEffect(() => {
    cargarEspecialidades();
  }, []);

  const abrirCrear = () => {
    setModo('crear');
    setEspecialidadSeleccionada(null);
    setMostrarModal(true);
  };

  const abrirEditar = (id) => {
    setModo('editar');
    setEspecialidadSeleccionada(id);
    setMostrarModal(true);
  };

  const handleEliminar = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar esta especialidad?')) {
      try {
        await eliminarEspecialidad(id);
        cargarEspecialidades();
      } catch (err) {
        console.error('Error al eliminar especialidad:', err);
      }
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Especialidades Registradas</h2>
        <button className="btn btn-success" onClick={abrirCrear}>
          Registrar Especialidad
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped align-middle">
          <thead className="table-dark text-center">
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {especialidades.map((especialidad, index) => (
              <tr key={especialidad.id_especialidad}>
                <td>{index + 1}</td>
                <td>{especialidad.nombre}</td>
                <td>{especialidad.descripcion}</td>
                <td className="text-center">
                  <img
                    src={`data:image/jpeg;base64,${especialidad.imagen}`}
                    alt={especialidad.nombre}
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => abrirEditar(especialidad.id_especialidad)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleEliminar(especialidad.id_especialidad)}
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
        <CrearEspecialidadModal
          modo={modo}
          especialidadId={especialidadSeleccionada}
          onClose={() => setMostrarModal(false)}
          onSuccess={cargarEspecialidades}
        />
      )}
    </div>
  );
}

export default Especialidades;
