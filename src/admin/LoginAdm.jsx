import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginPersonalClinico } from '../services/authService';
function LoginAdm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    seterror("")
    try {
      const response = await loginPersonalClinico({ email, password })

      const token = response.data.access_token;
      const expiration = response.data.token_expiration;

      localStorage.setItem("token", token)
      navigate("/admin/inicio")
    } catch (err) {
      console.error('Error de inicio', err)
      seterror(err.message)
    };
  };
  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h3 className="mb-4 text-center">Login para administradores</h3>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Ingrese su correo"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Ingrese su contraseña"
          />
        </div>
        {error && (
          <div className="alert alert-danger py-2">{error}</div>
        )}
        <button type="submit" className="btn btn-primary w-100">
          Iniciar sesión
        </button>
      </form>
    </div>
  )
}

export default LoginAdm