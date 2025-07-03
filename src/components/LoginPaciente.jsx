import { useState } from "react";
import { loginPaciente } from "../services/authService";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPaciente.css"; // Asegúrate de tener este archivo

function LoginPaciente() {
    const [dni, setDni] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await loginPaciente({ dni, password });

            // Accede correctamente al access_token y la expiración
            const token = response.data.access_token;
            const expiration = response.data.token_expiration;

            // Guarda token y expiración
            localStorage.setItem("token", token);
            localStorage.setItem("token_expiration", expiration);

            navigate("/paciente-inicio");
        } catch (err) {
            console.error("Error al iniciar sesión:", err);
            setError("DNI o contraseña incorrectos");
        }
    };

    const handleRegister = () => {
        navigate("/registro-paciente");
    };

    return (
        <div className="login-paciente-container">
            <h2 className="login-paciente-title">Iniciar Sesión</h2>
            <form onSubmit={handleLogin} className="login-paciente-form">
                <div className="login-paciente-group">
                    <label className="login-paciente-label">DNI:</label>
                    <input
                        type="text"
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}
                        required
                        maxLength={8}
                        className="login-paciente-input"
                    />
                </div>
                <div className="login-paciente-group">
                    <label className="login-paciente-label">Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="login-paciente-input"
                    />
                </div>
                {error && <div className="login-paciente-error">{error}</div>}
                <button type="submit" className="login-paciente-button">
                    Iniciar Sesión
                </button>
            </form>
            <button onClick={handleRegister} className="login-paciente-register">
                Registrarse
            </button>
        </div>
    );
}

export default LoginPaciente;
