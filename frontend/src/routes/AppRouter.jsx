import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";


export default function AppRouter({ session }) {

    return (

        <Routes>

            <Route
                path="/login"
                element={<Login />}
            />


            <Route
                path="/register"
                element={<Register />}
            />


            <Route
                path="/dashboard"
                element={
                    <Dashboard session={session}/>
                }
            />


            <Route
                path="*"
                element={
                    <Navigate to="/login" />
                }
            />


        </Routes>

    );

}