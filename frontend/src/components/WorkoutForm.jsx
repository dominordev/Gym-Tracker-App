// import {
//     Card,
//     CardContent,
//     CardHeader,
//     CardTitle
// } from "@/components/ui/card";

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";


// export default function WorkoutForm({
//     workout,
//     onChange,
//     onSubmit
// }) {

//     return (

//         <Card className="
//         bg-zinc-900
//         border-zinc-800
//         shadow-xl
//         rounded-2xl
//         ">

//             <CardHeader>
//                 <CardTitle>
//                     Nuevo entrenamiento
//                 </CardTitle>
//             </CardHeader>


//             <CardContent>

//                 <form
//                     onSubmit={onSubmit}
//                     className="space-y-4"
//                 >

//                     <Input
//                         name="exercise"
//                         placeholder="Ejercicio"
//                         value={workout.exercise}
//                         onChange={onChange}
//                         className="
//                         bg-zinc-950
//                         border-zinc-800
//                         rounded-xl
//                         "
//                     />


//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

//                         <Input
//                             name="sets"
//                             type="number"
//                             placeholder="Series"
//                             value={workout.sets}
//                             onChange={onChange}
//                             className="
//                             bg-zinc-950
//                             border-zinc-800
//                             rounded-xl
//                             "
//                         />


//                         <Input
//                             name="reps"
//                             type="number"
//                             placeholder="Repeticiones"
//                             value={workout.reps}
//                             onChange={onChange}
//                             className="
//                             bg-zinc-950
//                             border-zinc-800
//                             rounded-xl
//                             "
//                         />


//                         <Input
//                             name="weight"
//                             type="number"
//                             placeholder="Peso (kg)"
//                             value={workout.weight}
//                             onChange={onChange}
//                             className="
//                             bg-zinc-950
//                             border-zinc-800
//                             rounded-xl
//                             "
//                         />

//                     </div>


//                     <Button
//                         type="submit"
//                         className="w-full"
//                     >
//                         Guardar entrenamiento
//                     </Button>


//                 </form>

//             </CardContent>

//         </Card>

//     );
// }

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useState } from "react";


export default function WorkoutForm({
    onSubmit,
    loading = false
}) {

    const [workout, setWorkout] = useState({
        exercise: "",
        sets: "",
        reps: "",
        weight: ""
    });


    function handleChange(e) {

        const { name, value } = e.target;

        setWorkout(prev => ({
            ...prev,
            [name]: value
        }));

    }


    function handleSubmit(e) {

        e.preventDefault();


        if (
            !workout.exercise ||
            !workout.sets ||
            !workout.reps ||
            !workout.weight
        ) {
            return;
        }


        onSubmit({
            exercise: workout.exercise,
            sets: Number(workout.sets),
            reps: Number(workout.reps),
            weight: Number(workout.weight)
        });


        setWorkout({
            exercise: "",
            sets: "",
            reps: "",
            weight: ""
        });

    }


    return (

        <Card className="
            bg-zinc-900
            border-zinc-800
            text-white
        ">


            <CardHeader>

                <CardTitle className="
                    text-xl
                ">
                    Nuevo entrenamiento
                </CardTitle>

            </CardHeader>


            <CardContent>


                <form
                    onSubmit={handleSubmit}
                    className="
                        space-y-4
                    "
                >


                    <Input
                        name="exercise"
                        placeholder="Ejercicio (Bench Press, Squat...)"
                        value={workout.exercise}
                        onChange={handleChange}
                    />


                    <div className="
                        grid
                        grid-cols-1
                        md:grid-cols-3
                        gap-4
                    ">


                        <Input
                            name="sets"
                            type="number"
                            placeholder="Series"
                            value={workout.sets}
                            onChange={handleChange}
                        />


                        <Input
                            name="reps"
                            type="number"
                            placeholder="Reps"
                            value={workout.reps}
                            onChange={handleChange}
                        />


                        <Input
                            name="weight"
                            type="number"
                            placeholder="Peso (kg)"
                            value={workout.weight}
                            onChange={handleChange}
                        />


                    </div>


                    <Button
                        type="submit"
                        className="
                            w-full
                        "
                        disabled={loading}
                    >

                        {loading
                            ? "Guardando..."
                            : "Guardar entrenamiento"
                        }

                    </Button>


                </form>


            </CardContent>


        </Card>

    );

}