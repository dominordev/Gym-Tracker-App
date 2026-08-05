// const API = import.meta.env.VITE_API_URL;


// function getToken(session) {

//     if (!session) {
//         throw new Error("No active session");
//     }

//     return session.access_token;

// }



// export async function getWorkouts(session) {

//     const token = getToken(session);


//     const response = await fetch(
//         `${API}/workouts`,
//         {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }
//     );


//     if (!response.ok) {
//         throw new Error("Failed to fetch workouts");
//     }


//     return response.json();

// }





// export async function createWorkout(
//     session,
//     workoutData
// ) {

//     const token = getToken(session);


//     const response = await fetch(
//         `${API}/workouts`,
//         {
//             method: "POST",

//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`
//             },

//             body: JSON.stringify(workoutData)
//         }
//     );


//     if (!response.ok) {
//         throw new Error("Failed to create workout");
//     }


//     return response.json();

// }





// export async function deleteWorkout(
//     session,
//     id
// ) {

//     const token = getToken(session);


//     const response = await fetch(
//         `${API}/workouts/${id}`,
//         {
//             method: "DELETE",

//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }
//     );


//     if (!response.ok) {
//         throw new Error("Failed to delete workout");
//     }

// }

// // workoutApi.jsx
// const API = import.meta.env.VITE_API_URL;

// function getToken(session) {
//   console.log("getToken received session:", session);

//   if (!session) {
//     console.error("getToken: no active session");
//     throw new Error("No active session");
//   }

//   console.log("getToken: access_token:", session.access_token);
//   return session.access_token;
// }

// export async function createWorkout(session, workoutData) {
//   console.log("createWorkout called with session:", session);
//   console.log("createWorkout called with workoutData:", workoutData);
//   console.log("createWorkout API URL:", API);

//   const token = getToken(session);

//   const response = await fetch(`${API}/workouts`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`
//     },
//     body: JSON.stringify(workoutData)
//   });

//   console.log("createWorkout response status:", response.status);

//   const text = await response.text();
//   console.log("createWorkout response body (raw text):", text);

//   if (!response.ok) {
//     console.error("createWorkout: response not ok, throwing error");
//     throw new Error("Failed to create workout");
//   }

//   let json;
//   try {
//     json = JSON.parse(text);
//   } catch (e) {
//     console.error("createWorkout: failed to parse JSON:", e);
//     throw e;
//   }

//   console.log("createWorkout parsed JSON:", json);
//   return json;
// }

const API = import.meta.env.VITE_API_URL;

function getToken(session) {
  if (!session) {
    throw new Error("No active session");
  }

  // Debug de la sesión y del token
  console.log("getToken session:", session);
  console.log("getToken access_token:", session.access_token);

  return session.access_token;
}

export async function getWorkouts(session) {
  const token = getToken(session);

  console.log("getWorkouts: calling", `${API}/workouts`);
  console.log("getWorkouts: Authorization header:", `Bearer ${token}`);

  const response = await fetch(`${API}/workouts`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const text = await response.text();
  console.log("getWorkouts response status:", response.status);
  console.log("getWorkouts response body:", text);

  if (!response.ok) {
    // Mantengo tu error, solo añado info en consola
    throw new Error("Failed to fetch workouts");
  }

  return JSON.parse(text);
}

export async function createWorkout(session, workoutData) {
  const token = getToken(session);

  console.log("createWorkout: calling", `${API}/workouts`);
  console.log("createWorkout: Authorization header:", `Bearer ${token}`);
  console.log("createWorkout: body:", workoutData);

  const response = await fetch(`${API}/workouts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(workoutData),
  });

  const text = await response.text();
  console.log("createWorkout response status:", response.status);
  console.log("createWorkout response body:", text);

  if (!response.ok) {
    throw new Error("Failed to create workout");
  }

  return JSON.parse(text);
}

export async function deleteWorkout(session, id) {
  const token = getToken(session);

  console.log("deleteWorkout: calling", `${API}/workouts/${id}`);
  console.log("deleteWorkout: Authorization header:", `Bearer ${token}`);

  const response = await fetch(`${API}/workouts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const text = await response.text();
  console.log("deleteWorkout response status:", response.status);
  console.log("deleteWorkout response body:", text);

  if (!response.ok) {
    throw new Error("Failed to delete workout");
  } 
}