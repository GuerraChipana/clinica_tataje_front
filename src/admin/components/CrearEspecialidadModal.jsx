import React, { useState, useEffect } from 'react';
import {
    crearEspecialidad,
    actualizarEspecialidad,
    obtenerEspecialidadPorId
} from '../../services/especialidadesServices';

function CrearEspecialidadModal({ onClose, onSuccess, modo = 'crear', especialidadId = null }) {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagenFile, setImagenFile] = useState(null);
    const [error, setError] = useState('');
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        if (modo === 'editar' && especialidadId) {
            obtenerEspecialidadPorId(especialidadId)
                .then((data) => {
                    const esp = data.data;
                    setNombre(esp.nombre);
                    setDescripcion(esp.descripcion);
                })
                .catch((err) => console.error('Error al cargar especialidad', err));
        }
    }, [modo, especialidadId]);

    const handleFileChange = (e) => {
        setImagenFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombre || !descripcion || (modo === 'crear' && !imagenFile)) {
            setError('Todos los campos son obligatorios');
            return;
        }

        try {
            if (modo === 'crear') {
                await crearEspecialidad({ nombre, descripcion }, imagenFile);
                setMensaje('Especialidad registrada con éxito');
            } else {
                await actualizarEspecialidad(especialidadId, { nombre, descripcion }, imagenFile);
                setMensaje('Especialidad actualizada con éxito');
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
            <div className="modal-content card p-4">
                <h4>{modo === 'crear' ? 'Registrar' : 'Editar'} Especialidad</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Nombre:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Descripción:</label>
                        <textarea
                            className="form-control"
                            placeholder="Descripción"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            {modo === 'editar' ? 'Nueva Imagen (opcional):' : 'Imagen:'}
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            accept="image/*"
                            onChange={handleFileChange}
                            required={modo === 'crear'}
                        />
                    </div>

                    {error && <div className="alert alert-danger">{error}</div>}
                    {mensaje && <div className="alert alert-success">{mensaje}</div>}

                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary">
                            {modo === 'crear' ? 'Registrar' : 'Actualizar'}
                        </button>
                        <button className="btn btn-secondary" onClick={onClose}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CrearEspecialidadModal;
