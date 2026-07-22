const API = import.meta.env.VITE_API_URL;


function getToken(session) {

    if (!session) {
        throw new Error("No active session");
    }

    return session.access_token;

}



export async function getWorkouts(session) {

    const token = getToken(session);


    const response = await fetch(
        `${API}/workouts`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );


    if (!response.ok) {
        throw new Error("Failed to fetch workouts");
    }


    return response.json();

}





export async function createWorkout(
    session,
    workoutData
) {

    const token = getToken(session);


    const response = await fetch(
        `${API}/workouts`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify(workoutData)
        }
    );


    if (!response.ok) {
        throw new Error("Failed to create workout");
    }


    return response.json();

}





export async function deleteWorkout(
    session,
    id
) {

    const token = getToken(session);


    const response = await fetch(
        `${API}/workouts/${id}`,
        {
            method: "DELETE",

            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );


    if (!response.ok) {
        throw new Error("Failed to delete workout");
    }

}