import { useEffect, useState } from "react";

import {
    getWorkouts,
    createWorkout,
    deleteWorkout
} from "../api/workoutApi";


export function useWorkouts(session) {

    const [workouts, setWorkouts] = useState([]);

    const [loading, setLoading] = useState(false);



    async function loadWorkouts() {

        try {

            setLoading(true);

            const data = await getWorkouts(session);

            setWorkouts(data);

        } catch(error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }



    async function addWorkout(workoutData) {

        try {

            setLoading(true);


            const created = await createWorkout(
                session,
                workoutData
            );


            setWorkouts(prev => [
                ...prev,
                created
            ]);


        } catch(error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }




    async function removeWorkout(id) {

        try {

            setLoading(true);


            await deleteWorkout(
                session,
                id
            );


            setWorkouts(prev =>
                prev.filter(
                    workout => workout.id !== id
                )
            );


        } catch(error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }



    useEffect(() => {

        if(session) {
            loadWorkouts();
        }

    }, [session]);



    return {

        workouts,

        loading,

        addWorkout,

        removeWorkout

    };

}