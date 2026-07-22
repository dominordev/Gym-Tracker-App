import {
    Card,
    CardContent
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
    Dumbbell,
    Trash2
} from "lucide-react";


export default function WorkoutCard({
    workout,
    onDelete
}) {


    return (

        <Card className="
            bg-zinc-900
            border-zinc-800
            text-white
            transition
            hover:border-zinc-700
        ">


            <CardContent className="
                flex
                items-center
                justify-between
                p-5
            ">


                <div className="
                    flex
                    items-center
                    gap-4
                ">


                    <div className="
                        flex
                        items-center
                        justify-center
                        h-12
                        w-12
                        rounded-xl
                        bg-zinc-800
                    ">

                        <Dumbbell
                            className="
                                h-6
                                w-6
                                text-zinc-300
                            "
                        />

                    </div>



                    <div>


                        <h3 className="
                            text-lg
                            font-semibold
                        ">
                            {workout.exercise}
                        </h3>


                        <p className="
                            text-sm
                            text-zinc-400
                            mt-1
                        ">
                            {workout.sets} series
                            {" • "}
                            {workout.reps} reps
                            {" • "}
                            {workout.weight} kg
                        </p>


                    </div>


                </div>



                <Button

                    variant="destructive"

                    size="icon"

                    onClick={() => onDelete(workout.id)}

                    className="
                        rounded-lg
                    "

                >

                    <Trash2
                        className="h-5 w-5"
                    />

                </Button>


            </CardContent>


        </Card>

    );

}