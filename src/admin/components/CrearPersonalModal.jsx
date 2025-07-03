import React, { useState } from 'react';
import { consultarDatosPorDni } from '../../services/DNI-Service';
import { crearPersonalClinico } from '../../services/personalClinico'; // Asegúrate de tener este servicio

function CrearPersonalModal({ onClose, onSuccess }) {
  const [dni, setDni] = useState('');
  const [datosReniec, setDatosReniec] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('');
  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState('');

  const buscarDni = async () => {
    if (dni.length !== 8) {
      setError('El DNI debe tener 8 dígitos');
      return;
    }

    try {
      const response = await consultarDatosPorDni(dni);
      setDatosReniec(response.data);
      setError('');
    } catch (err) {
      console.error(err);
      setError('No se encontraron datos para el DNI ingresado');
      setDatosReniec(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!datosReniec || !rol) {
      setError('Debes completar todos los campos obligatorios');
      return;
    }

    const nuevoPersonal = {
      ...datosReniec,
      email,
      password,
      rol,
    };

    try {
      await crearPersonalClinico(nuevoPersonal);
      setMensaje('Personal registrado correctamente');
      setError('');
      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      setError('Error al registrar personal');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h4>Registrar Personal Clínico</h4>

        <div className="mb-2">
          <label>DNI:</label>
          <input
            type="text"
            value={dni}
            maxLength={8}
            onChange={(e) => setDni(e.target.value)}
          />
          <button type="button" onClick={buscarDni}>🔍</button>
        </div>

        {datosReniec && (
          <form onSubmit={handleSubmit}>
            <input type="text" value={datosReniec.nombres} readOnly />
            <input type="text" value={datosReniec.apellido_paterno} readOnly />
            <input type="text" value={datosReniec.apellido_materno} readOnly />
            <input type="date" value={datosReniec.fecha_nacimiento} readOnly />

            <input type="hidden" name="estado_civil" value={datosReniec.estado_civil || ''} />
            <input type="hidden" name="genero" value={datosReniec.genero || ''} />
            <input type="hidden" name="ubigeo" value={datosReniec.ubigeo || ''} />
            <input type="hidden" name="direccion" value={datosReniec.direccion || ''} />

            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <select value={rol} onChange={(e) => setRol(e.target.value)} required>
              <option value="">-- Selecciona un rol --</option>
              <option value="superadministrador">Superadministrador</option>
              <option value="administrador">Administrador</option>
              <option value="secretaria">Secretaria</option>
              <option value="medico">Médico</option>
            </select>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}

            <div className="modal-buttons">
              <button type="submit">Registrar</button>
              <button type="button" onClick={onClose}>Cancelar</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default CrearPersonalModal;
