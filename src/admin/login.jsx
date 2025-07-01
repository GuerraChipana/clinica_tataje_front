import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginPersonalClinico } from '../services/authService';
function login() {
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
    } catch (err) {
src/components/LoginPaciente.jsx
    }



  }


  return (


    <div>
      <h3>Login para administradores</h3>


      <div>
        emailc
      </div>
    </div>
  )
}

export default login