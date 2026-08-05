import { Navigate } from "react-router-dom";


export default function ProtectedRoute({
    session,
    children
}) {


    if (!session) {

        return (
            <Navigate 
                to="/login"
                replace
            />
        );

    }
    console.log(window.location.pathname);
    console.log("ProtectedRoute session:", session);
    return children;

}