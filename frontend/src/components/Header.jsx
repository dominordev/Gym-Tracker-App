import { Button } from "@/components/ui/button";


export default function Header({ email, logout }) {

    return (
        <header className="flex justify-between items-center mb-8">

            <div>
                <h1 className="text-4xl font-bold">
                    Gym Tracker
                </h1>

                <p className="text-slate-400">
                    {email}
                </p>
            </div>


            <Button
                variant="destructive"
                onClick={logout}
            >
                Cerrar sesión
            </Button>

        </header>
    );
}