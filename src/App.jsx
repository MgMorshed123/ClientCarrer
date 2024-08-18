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
import Jobs from "./components/Jobs/Jobs";
import Browse from "./components/Browse/Browse";
import Profile from "./components/Profile/Profile";
import JobDescription from "./components/JobDescription/JobDescription";
import Companies from "./components/AdminComponents/Compnaies/Companies";
import Admin from "./components/AdminComponents/Admin/Admin";
import CreateCompany from "./components/AdminComponents/Compnaies/CreateCompany";
import CompanySetup from "./components/AdminComponents/Compnaies/CompanySetup";
// import JobDescription from "./components/JobDescription/JobDescription";
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
    {
      path: "/browse",
      element: <Browse></Browse>,
    },

    {
      path: "/description/:id",
      element: <JobDescription></JobDescription>,
    },

    {
      path: "/profile",
      element: <Profile></Profile>,
    },
    {
      path: "/admin/companies",
      element: <Companies></Companies>,
    },
    {
      path: "/admin/companies/create",
      element: <CreateCompany></CreateCompany>,
    },
    {
      path: "/admin/companies/:id",
      element: <CompanySetup></CompanySetup>,
    },
    {
      path: "/admin/jobs",
      element: <Admin></Admin>,
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
