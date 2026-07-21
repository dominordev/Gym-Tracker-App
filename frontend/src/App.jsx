import "./App.css";
import { useEffect, useState } from "react";
import { supabase } from "./utils/supabase";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [session, setSession] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    async function getSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      
      console.log("Initial session:", session);
      
      setSession(session);
    }

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("EVENT:", event);
      console.log("SESSION:", session);

      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div className="container">
        {showRegister ? <Register /> : <Login />}

        <p style={{ marginTop: "20px" }}>
          {showRegister
            ? "¿Ya tienes una cuenta?"
            : "¿No tienes una cuenta?"}

          <button
            style={{ marginLeft: "10px" }}
            onClick={() => setShowRegister(!showRegister)}
          >
            {showRegister ? "Iniciar sesión" : "Registrarse"}
          </button>
        </p>
      </div>
    );
  }

  return <Dashboard session={session} />;
}