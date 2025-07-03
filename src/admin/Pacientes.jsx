import React, { useEffect, useState } from 'react';
import { getPacientes } from '../services/pacientes';
import CrearPacienteModal from './components/CrearPacienteModal';

function Pacientes() {
  const [pacientes, setPacientes] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  const cargarPacientes = () => {
    getPacientes()
      .then((data) => setPacientes(data.data))
      .catch((error) => console.error('Error al obtener pacientes:', error));
  };

  useEffect(() => {
    cargarPacientes();
  }, []);

  const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Pacientes Registrados</h2>
        <button className="btn btn-primary" onClick={() => setMostrarModal(true)}>
          Registrar Paciente
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-dark">
            <tr className='text-center'>
              <th>N°</th>
              <th>DNI</th>
              <th>Nombres</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((paciente) => (
              <tr key={paciente.id_paciente}>
                <td>{paciente.id_paciente}</td>
                <td>{paciente.dni}</td>
                <td>{paciente.nombres}</td>
                <td className="text-center">{paciente.apellido_paterno}</td>
                <td className="text-center">{paciente.apellido_materno}</td>
                <td>{paciente.direccion}</td>
                <td className="text-center">{paciente.telefono}</td>
                <td className="text-center">{calcularEdad(paciente.fecha_nacimiento)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {mostrarModal && (
        <CrearPacienteModal
          onClose={() => setMostrarModal(false)}
          onSuccess={cargarPacientes}
        />
      )}
    </div>
  );
}

export default Pacientes;
