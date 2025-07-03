import React, { useEffect, useState } from 'react';
import { getDecodedToken } from '../utils/tokenUtils';
import { obtenerPersonalPorId } from '../services/personalClinico';

function MiCuenta() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const datosToken = getDecodedToken();

    if (datosToken?.rol !== 'paciente') {
      obtenerPersonalPorId(datosToken.id)
        .then(response => setUsuario(response.data))
        .catch(error => {
          console.error('Error al obtener información del personal:', error);
        });
    }
  }, []);

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card shadow-lg p-4 rounded-4" style={{ maxWidth: '600px', width: '100%' }}>
        <h3 className="mb-4 text-center text-primary">Mi Cuenta</h3>
        {usuario ? (
          <div className="row">
            <div className="col-12 mb-3">
              <label className="form-label text-muted">DNI</label>
              <div className="form-control bg-light">{usuario.dni}</div>
            </div>
            <div className="col-12 mb-3">
              <label className="form-label text-muted">Nombres</label>
              <div className="form-control bg-light">{usuario.nombres}</div>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label text-muted">Apellido Paterno</label>
              <div className="form-control bg-light">{usuario.apellido_paterno}</div>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label text-muted">Apellido Materno</label>
              <div className="form-control bg-light">{usuario.apellido_materno}</div>
            </div>
            <div className="col-12 mb-3">
              <label className="form-label text-muted">Correo Electrónico</label>
              <div className="form-control bg-light">{usuario.email}</div>
            </div>
            <div className="col-12 mb-3">
              <label className="form-label text-muted">Rol</label>
              <div className="form-control bg-light">
                <span className="badge bg-primary px-3 py-2 fs-6 rounded-pill shadow-sm">
                  {usuario.rol.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="alert alert-warning text-center">
            No se encontró información del usuario.
          </div>
        )}
      </div>
    </div>
  );
}

export default MiCuenta;
