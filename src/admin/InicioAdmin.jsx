import React from 'react';
import { FaClinicMedical, FaCalendarAlt, FaClipboardList } from 'react-icons/fa';

const InicioAdmin = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.8rem', color: '#1e3144', fontWeight: '700' }}>Bienvenido al Sistema de la Clínica</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>Utiliza el menú para acceder a las funciones del sistema</p>
      </div>

      <div style={styles.cardsContainer}>
        <div style={styles.card} className="admin-card">
          <FaClinicMedical style={styles.icon} />
          <h3 style={styles.cardTitle}>Gestión de Pacientes</h3>
          <p style={styles.cardText}>Accede y administra la información de pacientes y su historial clínico.</p>
        </div>
        <div style={styles.card} className="admin-card">
          <FaCalendarAlt style={styles.icon} />
          <h3 style={styles.cardTitle}>Gestión de Citas</h3>
          <p style={styles.cardText}>Visualiza y organiza las citas médicas con facilidad.</p>
        </div>
        <div style={styles.card} className="admin-card">
          <FaClipboardList style={styles.icon} />
          <h3 style={styles.cardTitle}>Reserva de Citas</h3>
          <p style={styles.cardText}>Gestiona las solicitudes de citas hechas en línea.</p>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .admin-card {
              width: 100% !important;
              margin-bottom: 2rem;
            }
          }

          .admin-card:hover {
            transform: translateY(-10px);
            box-shadow: 0px 8px 20px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '2rem',
    width: '300px',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  },
  icon: {
    fontSize: '3rem',
    color: '#1e3144',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#1e3144',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  cardText: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default InicioAdmin;
