import { Link } from "react-router-dom";


export default function Navbar({ email, logout }) {


    return (

        <nav className="
            flex
            justify-between
            items-center
            mb-10
        ">


            <div>

                <Link
                    to="/dashboard"
                    className="
                    text-xl
                    font-bold
                    tracking-tight
                    "
                >
                    Gym Tracker
                </Link>

            </div>



            <div className="
                flex
                items-center
                gap-4
            ">


                <span className="text-sm text-zinc-400">
                    {email}
                </span>


                <button
                    onClick={logout}
                    className="
                    bg-zinc-800
                    hover:bg-zinc-700
                    px-4
                    py-2
                    rounded-xl
                    transition
                    "
                >
                    Salir
                </button>


            </div>


        </nav>

    );

}