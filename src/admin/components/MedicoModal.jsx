import React, { useState, useEffect } from 'react';
import {
  crearMedico,
  actualizarMedico,
} from '../../services/medicoService';
import { obtenerEspecialidades } from '../../services/especialidadesServices';

function MedicoModal({ onClose, onSuccess, modo = 'crear', medico = null }) {
  const [idPersonal, setIdPersonal] = useState(medico?.personalClinico?.id_personal || '');
  const [idEspecialidad, setIdEspecialidad] = useState(medico?.especialidad?.id_especialidad || '');
  const [especialidades, setEspecialidades] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const cargarEspecialidades = async () => {
      try {
        const response = await obtenerEspecialidades();
        setEspecialidades(response.data || []);
      } catch (err) {
        console.error('Error al obtener especialidades', err);
        setEspecialidades([]);
      }
    };

    cargarEspecialidades();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!idEspecialidad || (modo === 'crear' && !idPersonal)) {
      setError('Todos los campos son obligatorios');
      return;
    }

    try {
      if (modo === 'crear') {
        await crearMedico({
          id_personal: Number(idPersonal),
          id_especialidad: Number(idEspecialidad),
        });
        setMensaje('Médico registrado exitosamente');
      } else {
        await actualizarMedico(medico.id_medico, {
          id_especialidad: Number(idEspecialidad),
        });
        setMensaje('Médico actualizado exitosamente');
      }

      setError('');
      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      setError('Error al procesar la solicitud');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h4>{modo === 'crear' ? 'Registrar Médico' : 'Editar Médico'}</h4>
        <form onSubmit={handleSubmit}>
          {modo === 'crear' && (
            <div className="mb-3">
              <label className="form-label">ID Personal Clínico:</label>
              <input
                type="number"
                className="form-control"
                value={idPersonal}
                onChange={(e) => setIdPersonal(e.target.value)}
                required
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Especialidad:</label>
            <select
              className="form-select"
              value={idEspecialidad}
              onChange={(e) => setIdEspecialidad(e.target.value)}
              required
            >
              <option value="">Seleccione una especialidad</option>
              {especialidades.map((esp) => (
                <option key={esp.id_especialidad} value={esp.id_especialidad}>
                  {esp.nombre}
                </option>
              ))}
            </select>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}
          {mensaje && <div className="alert alert-success">{mensaje}</div>}

          <div className="modal-buttons d-flex justify-content-end gap-2">
            <button type="submit" className="btn btn-primary">
              {modo === 'crear' ? 'Registrar' : 'Actualizar'}
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MedicoModal;
