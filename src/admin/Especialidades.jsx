import { useEffect, useState } from 'react';
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
      .then(({ data }) => setEspecialidades(data))
      .catch(e => console.error('Error al obtener especialidades:', e));
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
    <div className="container-fluid py-4 px-3">
      <div className="card shadow rounded">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Especialidades Registradas</h4>
          <button className="btn btn-outline-light btn" onClick={abrirCrear}>
            Registrar
          </button>
        </div>

        <div className="card-body p-3">
          {especialidades.length === 0 ? (
            <div className="alert alert-info text-center m-0">
              No hay especialidades registradas.
            </div>
          ) : (
            <div className="table-responsive" style={{ maxHeight: '430px', overflowY: 'auto' }}>
              <table className="table table-hover table-bordered align-middle mb-0 text-center">
                <thead className="table-primary sticky-top">
                  <tr>
                    <th style={{ width: '5%' }}>#</th>
                    <th style={{ width: '20%' }}>Nombre</th>
                    <th style={{ width: '45%' }}>Descripción</th>
                    <th style={{ width: '15%' }}>Imagen</th>
                    <th style={{ width: '15%' }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {especialidades.map((esp, i) => (
                    <tr key={esp.id_especialidad}>
                      <td>{i + 1}</td>
                      <td className="text-start">{esp.nombre}</td>
                      <td className="text-start">{esp.descripcion}</td>
                      <td>
                        <img
                          src={`data:image/jpeg;base64,${esp.imagen}`}
                          alt={esp.nombre}
                          className="img-thumbnail"
                          style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-warning me-2"
                          onClick={() => abrirEditar(esp.id_especialidad)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleEliminar(esp.id_especialidad)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
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
