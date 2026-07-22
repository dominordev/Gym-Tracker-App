import Navbar from "./Navbar";


export default function AppLayout({
    children,
    session,
    logout
}) {


    return (

        <div className="
            min-h-screen
            bg-zinc-950
            text-white
        ">


            <main className="
                max-w-6xl
                mx-auto
                px-6
                py-8
            ">


                <Navbar

                    email={session.user.email}

                    logout={logout}

                />


                {children}


            </main>


        </div>

    );

}