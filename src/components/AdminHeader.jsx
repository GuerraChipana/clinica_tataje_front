import { NavLink } from 'react-router-dom';
import '../styles/admin/AdminHeader.css';

const AdminHeader = () => {
    return (
        <header className="admin-header">
            <h2 className="logo">Clínica Admin</h2>
            <nav className="admin-nav">
                <NavLink to="/admin/inicio">Inicio</NavLink>
                <NavLink to="/admin/personal">Personal</NavLink>
                <NavLink to="/admin/pacientes">Pacientes</NavLink>
                <NavLink to="/admin/especialidades">Especialidades</NavLink>
                <NavLink to="/admin/medicos">Medicos</NavLink>
                <NavLink to="/admin/citas">Citas</NavLink>
                <NavLink to="/admin/historial">Historial Clinico</NavLink>
                <NavLink to="/admin/cuenta">Mi Cuenta</NavLink>
                <NavLink to="/login/personal">Salir</NavLink>
            </nav>
        </header>
    );
};

export default AdminHeader;
