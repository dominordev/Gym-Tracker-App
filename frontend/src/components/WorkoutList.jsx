import WorkoutCard from "./WorkoutCard";


export default function WorkoutList({
    workouts = [],
    onDelete
}) {


    if (!workouts || workouts.length === 0) {

        return (

            <div className="
                rounded-xl
                border
                border-zinc-800
                bg-zinc-900
                p-6
                text-center
            ">

                <p className="
                    text-zinc-400
                ">
                    Todavía no tienes entrenamientos registrados.
                </p>

            </div>

        );

    }


    return (

        <div className="
            space-y-4
        ">

            {
                workouts.map((workout) => (

                    <WorkoutCard

                        key={workout.id}

                        workout={workout}

                        onDelete={onDelete}

                    />

                ))
            }


        </div>

    );

}