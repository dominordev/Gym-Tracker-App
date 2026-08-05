import { useEffect, useState } from "react";
import { supabase } from "./utils/supabase";
import AppRouter from "./routes/AppRouter";

export default function App() {

    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        async function loadSession() {

            const {
                data: {
                    session
                }
            } = await supabase.auth.getSession();

            console.log("INITIAL SESSION:", session);

            setSession(session);
            setLoading(false);

        }


        loadSession();


        const {
            data: {
                subscription
            }
        } = supabase.auth.onAuthStateChange(
            (_event, session) => {

                console.log("AUTH EVENT:", session);

                setSession(session);

            }
        );


        return () => {
            subscription.unsubscribe();
        };


    }, []);


    if (loading) {
        return (
            <div>
                Cargando sesión...
            </div>
        );
    }


    return (
        <AppRouter session={session}/>
    );

}