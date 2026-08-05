import { useState } from "react";
import { supabase } from "../utils/supabase";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log("DATA:", data);
    console.log("ERROR:", error);

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSuccess("¡Cuenta creada correctamente!");

    setEmail("");
    setPassword("");
  }

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="login-header">
          <div className="logo-circle">
            💪
          </div>

          <h1>Gym Tracker</h1>
          <p>Crea tu cuenta</p>
        </div>

       <form onSubmit={handleRegister}>
  <input
    type="email"
    placeholder="Correo electrónico"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />

  <input
    type="password"
    placeholder="Contraseña"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    minLength={6}
  />

  <button
  type="submit"
  disabled={loading}
  className="login-button"
>
  {loading ? "Creando cuenta..." : "Registrarse"}
</button>
</form>

<p className="auth-link">
  ¿Ya tienes cuenta?{" "}
  <span onClick={() => navigate("/login")}>
    Iniciar sesión
  </span>
</p>

      </div>
    </div>
  );
}