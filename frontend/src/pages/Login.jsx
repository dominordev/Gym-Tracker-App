import "./Login.css";
import { useState } from "react";
import { supabase } from "../utils/supabase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSuccess("Inicio de sesión exitoso. Redirigiendo...");
    navigate("/dashboard");

    console.log("LOGIN SESSION", data.session);

const {
  data: { session },
} = await supabase.auth.getSession();

console.log("GET SESSION", session);
  }

  return (
   <div className="login-container">
  <div className="login-card">

    <div className="login-header">
      <div className="logo-circle">
        💪
      </div>

      <h1>Gym Tracker</h1>
      <p>Bienvenido de nuevo</p>
    </div>

    <form onSubmit={handleLogin}>
  <div className="input-group">
    <label>Correo electrónico</label>
    <input
      type="email"
      placeholder="correo@ejemplo.com"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>

  <div className="input-group">
    <label>Contraseña</label>
    <input
      type="password"
      placeholder="••••••••"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </div>

  {error && (
    <div className="login-error">
      {error}
    </div>
  )}

  <button
    type="submit"
    disabled={loading}
    className="login-button"
  >
    {loading ? "Iniciando sesión..." : "Iniciar sesión"}
  </button>
</form>

<p className="register-link">
  ¿No tienes cuenta?{" "}
  <span onClick={() => navigate("/register")}>
    Crear una cuenta
  </span>
</p>
    

  </div>
</div>
  );
}