import { useWorkouts } from "../hooks/useWorkouts";

import WorkoutForm from "../components/WorkoutForm";
import WorkoutList from "../components/WorkoutList";

import { supabase } from "../utils/supabase";


export default function Dashboard({ session }) {

    const {
        workouts,
        loading,
        addWorkout,
        removeWorkout
    } = useWorkouts(session);


    async function logout() {

        await supabase.auth.signOut();

    }


    return (

        <main className="
            min-h-screen
            bg-zinc-950
            text-white
            p-6
        ">

            <div className="
                max-w-5xl
                mx-auto
                space-y-8
            ">


                {/* Header */}

                <header className="
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    md:justify-between
                    gap-4
                ">

                    <div>

                        <h1 className="
                            text-4xl
                            font-bold
                            tracking-tight
                        ">
                            Gym Tracker
                        </h1>


                        <p className="
                            text-zinc-400
                            mt-2
                        ">
                            {session?.user?.email}
                        </p>

                    </div>


                    <button
                        onClick={logout}
                        className="
                            bg-zinc-800
                            hover:bg-zinc-700
                            transition
                            px-4
                            py-2
                            rounded-lg
                        "
                    >
                        Cerrar sesión
                    </button>


                </header>



                {/* Crear workout */}

                <WorkoutForm
                    onSubmit={addWorkout}
                    loading={loading}
                />



                {/* Lista */}

                <section className="
                    space-y-4
                ">

                    <h2 className="
                        text-2xl
                        font-semibold
                    ">
                        Historial de entrenamientos
                    </h2>


                    <WorkoutList
                        workouts={workouts}
                        onDelete={removeWorkout}
                    />

                </section>


            </div>


        </main>

    );

}