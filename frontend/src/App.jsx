import './App.css'
import { useState, useEffect } from 'react'

export default function App() {
  const [workouts, setWorkouts] = useState([])
  const [newWorkout, setNewWorkout] = useState({
    exercise: "",
    sets: "",
    reps: "",
    weight: ""
  })

  async function getWorkouts() {
    try {
      const response = await fetch(
        "http://localhost:8080/workouts"
      )
      const data = await response.json()
      setWorkouts(data)
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getWorkouts()
  }, [])

  function handleChange(e) {
    const { name, value } = e.target
    setNewWorkout({
      ...newWorkout,
      [name]: value
    })
  }

  async function createWorkout(e) {
    e.preventDefault()
    
    try {
      const response = await fetch(
        "http://localhost:8080/workouts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            exercise: newWorkout.exercise,
            sets: Number(newWorkout.sets),
            reps: Number(newWorkout.reps),
            weight: Number(newWorkout.weight)
          })
        }
      )

      if(!response.ok){
        throw new Error("Error creando workout")
      }

      setNewWorkout({
        exercise: "",
        sets: "",
        reps: "",
        weight: ""
      })

      getWorkouts()

    } catch(error) {
      console.error(error)
    }
  }

  async function deleteWorkout(id) {
    try {
      const response = await fetch(
        `http://localhost:8080/workouts/${id}`,

        {
          method: "DELETE"
        }
      )

      if(!response.ok){
        throw new Error("Error eliminando workout")
      }
      getWorkouts()

    } catch(error) {
      console.error(error)
    }
  }

  return (
    <div className="container">
      <h1>
        Gym Tracker
      </h1>

      <form onSubmit={createWorkout}>
        <input
          name="exercise"
          placeholder="Ejercicio"
          value={newWorkout.exercise}
          onChange={handleChange}
        />

        <input
          name="sets"
          placeholder="Series"
          type="number"
          value={newWorkout.sets}
          onChange={handleChange}
        />

        <input
          name="reps"
          placeholder="Repeticiones"
          type="number"
          value={newWorkout.reps}
          onChange={handleChange}
        />

        <input
          name="weight"
          placeholder="Peso"
          type="number"
          value={newWorkout.weight}
          onChange={handleChange}
        />

        <button>
          Guardar workout
        </button>

      </form>

      <h2>
        Historial
      </h2>

      <table border="1">
        <thead>
          <tr>
            <th>
              Ejercicio
            </th>

            <th>
              Series
            </th>

            <th>
              Reps
            </th>

            <th>
              Peso
            </th>

            <th>
              Acción
            </th>

          </tr>
        </thead>

        <tbody>
          {
            workouts.map((workout) => (
              <tr key={workout.id}>
                <td>
                  {workout.exercise}
                </td>

                <td>
                  {workout.sets}
                </td>

                <td>
                  {workout.reps}
                </td>

                <td>
                  {workout.weight} kg
                </td>

                <td>
                  <button
                    onClick={() => deleteWorkout(workout.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}