import React, { useEffect, useState } from 'react';
import { getPacientes } from '../services/pacientes';
import CrearPacienteModal from './components/CrearPacienteModal';

function Pacientes() {
  const [pacientes, setPacientes] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  const cargarPacientes = () => {
    getPacientes()
      .then(({ data }) => setPacientes(data))
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
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary fw-bold">Pacientes Registrados</h2>
        <button
          className="btn btn-outline-primary "
          onClick={() => setMostrarModal(true)}
          type="button"
        >
        Registrar Paciente
        </button>
      </div>

      <div className="table-responsive rounded shadow-sm border border-secondary" style={{ maxHeight: '480px' }}>
        <table className="table table-striped table-hover table-bordered align-middle mb-0 text-center">
          <thead className="table-primary sticky-top">
            <tr>
              <th scope="col" className="w-5">N°</th>
              <th scope="col" className="w-10">DNI</th>
              <th scope="col" className="text-start w-15">Nombres</th>
              <th scope="col" className="w-12">Apellido Paterno</th>
              <th scope="col" className="w-12">Apellido Materno</th>
              <th scope="col" className="text-start w-20">Dirección</th>
              <th scope="col" className="w-10">Teléfono</th>
              <th scope="col" className="w-8">Edad</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-4 text-muted fst-italic">
                  No hay pacientes registrados.
                </td>
              </tr>
            ) : (
              pacientes.map((paciente, i) => (
                <tr key={paciente.id_paciente}>
                  <th scope="row">{i + 1}</th>
                  <td>{paciente.dni}</td>
                  <td className="text-start">{paciente.nombres}</td>
                  <td>{paciente.apellido_paterno}</td>
                  <td>{paciente.apellido_materno}</td>
                  <td className="text-start">{paciente.direccion}</td>
                  <td>{paciente.telefono}</td>
                  <td>{calcularEdad(paciente.fecha_nacimiento)}</td>
                </tr>
              ))
            )}
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
