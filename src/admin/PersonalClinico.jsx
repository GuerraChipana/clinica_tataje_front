import { useState, useEffect } from "react";
import { obtenerPersonalClinico } from "../services/personalClinico";
import CrearPersonalModal from "./components/CrearPersonalModal";

function PersonalClinico() {
  const [personales, setPersonales] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  const cargarPersonal = () => {
    obtenerPersonalClinico()
      .then((data) => setPersonales(data.data))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    cargarPersonal();
  }, []);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Personal Registrado</h2>
        <button className="btn btn-primary" onClick={() => setMostrarModal(true)}>
          Registrar Personal
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped align-middle">
          <thead className="table-dark">
            <tr>
              <th>N°</th>
              <th>DNI</th>
              <th>Nombres</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Dirección</th>
              <th>Correo</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {personales.map((personal) => (
              <tr key={personal.id_personal}>
                <td>{personal.id_personal}</td>
                <td>{personal.dni}</td>
                <td>{personal.nombres}</td>
                <td>{personal.apellido_paterno}</td>
                <td>{personal.apellido_materno}</td>
                <td>{personal.direccion}</td>
                <td>{personal.email}</td>
                <td>{personal.rol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {mostrarModal && (
        <CrearPersonalModal
          onClose={() => setMostrarModal(false)}
          onSuccess={cargarPersonal}
        />
      )}
    </div>
  );
}

export default PersonalClinico;
