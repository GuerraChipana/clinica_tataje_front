import React from 'react';
import { FaClinicMedical, FaCalendarAlt, FaClipboardList } from 'react-icons/fa';  // Iconos adecuados para las nuevas secciones

const InicioAdmin = () => {
    const containerStyle = {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f9',
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '30px',
    };

    const titleStyle = {
        fontSize: '2.5rem',
        color: '#4A90E2',
    };

    const textStyle = {
        fontSize: '1.2rem',
        color: '#555',
    };

    const cardsContainerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '30px',
    };

    const cardStyle = {
        backgroundColor: '#fff',
        width: '250px',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
    };

    const iconStyle = {
        fontSize: '3rem',
        color: '#4A90E2',
        marginBottom: '15px',
    };

    const cardTitleStyle = {
        fontSize: '1.5rem',
        color: '#333',
    };

    const cardTextStyle = {
        fontSize: '1rem',
        color: '#777',
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <h1 style={titleStyle}>Bienvenido al Sistema de la Clínica</h1>
                <p style={textStyle}>Utiliza el menú lateral para gestionar las secciones del sistema.</p>
            </div>

            <div style={cardsContainerStyle}>
                <div
                    style={cardStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                    <FaClinicMedical style={iconStyle} />
                    <h3 style={cardTitleStyle}>Gestión de Pacientes</h3>
                    <p style={cardTextStyle}>Accede a la información de los pacientes y realiza el seguimiento de su historial médico.</p>
                </div>
                <div
                    style={cardStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                    <FaCalendarAlt style={iconStyle} />
                    <h3 style={cardTitleStyle}>Gestión de Citas</h3>
                    <p style={cardTextStyle}>Administra las citas médicas de los pacientes, revisa horarios y disponibilidad.</p>
                </div>
                <div
                    style={cardStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                    <FaClipboardList style={iconStyle} />
                    <h3 style={cardTitleStyle}>Gestión de Reserva de Citas</h3>
                    <p style={cardTextStyle}>Gestiona las reservas de citas en línea, confirmaciones y ajustes de horarios.</p>
                </div>
            </div>
        </div>
    );
};

export default InicioAdmin;
