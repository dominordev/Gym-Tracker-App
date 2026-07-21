import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

export default function Dashboard({ session }) {
  const [workouts, setWorkouts] = useState([]);

  const [newWorkout, setNewWorkout] = useState({
    exercise: "",
    sets: "",
    reps: "",
    weight: "",
  });

  async function getWorkouts() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/workouts`); 
      const data = await response.json();
      setWorkouts(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getWorkouts();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;

    setNewWorkout({
      ...newWorkout,
      [name]: value,
    });
  }

  async function createWorkout(e) {
    e.preventDefault();

    if (
      !newWorkout.exercise ||
      !newWorkout.sets ||
      !newWorkout.reps ||
      !newWorkout.weight
    ) {
      alert("Completa todos los campos.");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/workouts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            exercise: newWorkout.exercise,
            sets: Number(newWorkout.sets),
            reps: Number(newWorkout.reps),
            weight: Number(newWorkout.weight),
            userId: session.user.id
        }),
      });

      if (!response.ok) {
        throw new Error("Error creando workout");
      }

      setNewWorkout({
        exercise: "",
        sets: "",
        reps: "",
        weight: "",
      });

      getWorkouts();
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteWorkout(id) {
  try {
    await fetch(`${import.meta.env.VITE_API_URL}/workouts/${id}`, {
      method: "DELETE",
    });

      getWorkouts();
    } catch (error) {
      console.error(error);
    }
  }

  async function logout() {
    await supabase.auth.signOut();
  }

  return (
    <div className="container">

      <header className="header">
        <div>
          <h1>Gym Tracker</h1>
          <p>{session.user.email}</p>
        </div>

        <button onClick={logout}>
          Cerrar sesión
        </button>
      </header>

      <section className="card">

        <h2>➕ Nuevo entrenamiento</h2>

        <form onSubmit={createWorkout}>

          <input
            name="exercise"
            placeholder="Ejercicio"
            value={newWorkout.exercise}
            onChange={handleChange}
          />

          <input
            name="sets"
            type="number"
            placeholder="Series"
            value={newWorkout.sets}
            onChange={handleChange}
          />

          <input
            name="reps"
            type="number"
            placeholder="Repeticiones"
            value={newWorkout.reps}
            onChange={handleChange}
          />

          <input
            name="weight"
            type="number"
            placeholder="Peso (kg)"
            value={newWorkout.weight}
            onChange={handleChange}
          />

          <button type="submit">
            Guardar entrenamiento
          </button>

        </form>

      </section>

      <section>

        <h2>📋 Historial</h2>

        {workouts.length === 0 ? (
          <p>No hay entrenamientos registrados.</p>
        ) : (
          workouts.map((workout) => (
            <div className="workout-card" key={workout.id}>

              <div>

                <h3>{workout.exercise}</h3>

                <p>
                  {workout.sets} series • {workout.reps} reps •{" "}
                  {workout.weight} kg
                </p>

              </div>

              <button
                onClick={() => deleteWorkout(workout.id)}
              >
                🗑️
              </button>

            </div>
          ))
        )}

      </section>

    </div>
  );
}