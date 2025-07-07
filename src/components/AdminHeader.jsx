import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/admin/AdminHeader.css';
import { getDecodedToken } from '../utils/tokenUtils';

const AdminHeader = () => {
    const navigate = useNavigate();

    const user = getDecodedToken();
    const role = user?.rol;

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login/personal');
    };

    return (
        <header className="admin-header">
            <h2 className="logo">Clínica Admin</h2>
            <nav className="admin-nav">
                <NavLink to="/admin/inicio">Inicio</NavLink>

                {/* Solo para superadministrador y administrador */}
                {(role === 'superadministrador' || role === 'administrador') && (
                    <>
                        <NavLink to="/admin/personal">Personal</NavLink>
                        <NavLink to="/admin/especialidades">Especialidades</NavLink>
                        <NavLink to="/admin/medicos">Medicos</NavLink>
                    </>
                )}

                {/* Todos los que acceden a admin */}
                <NavLink to="/admin/pacientes">Pacientes</NavLink>
                <NavLink to="/admin/citas">Citas</NavLink>
                <NavLink to="/admin/historial">Historial Clínico</NavLink>
                <NavLink to="/admin/cuenta">Mi Cuenta</NavLink>

                <button onClick={handleLogout} style={{ marginLeft: '1rem' }}>Salir</button>
            </nav>
        </header>
    );
};

export default AdminHeader;
