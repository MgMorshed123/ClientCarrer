import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import Navbar from "./components/shared/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login/Login";
import SignUp from "./components/auth/SignUp/SignUp";
import Home from "./components/Home/Home";
import { Toaster } from "./components/ui/sonner";
import Jobs from "./components/Job/Jobs";
// import { Home } from 'lucide-react'

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },

    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/jobs",
      element: <Jobs></Jobs>,
    },

    {
      path: "/signup",
      element: <SignUp></SignUp>,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
      <Toaster></Toaster>
    </>
  );
}

export default App;
