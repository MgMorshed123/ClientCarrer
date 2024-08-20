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
import PostJob from "./components/AdminComponents/Admin/PostJob";
import Applicants from "./components/AdminComponents/Admin/Applicants";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
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
      element: (
        <PrivateRoute requiredRole="student">
          <JobDescription></JobDescription>
        </PrivateRoute>
      ),
    },

    {
      path: "/profile",
      element: (
        <PrivateRoute requiredRole="student">
          <Profile></Profile>
        </PrivateRoute>
      ),
    },

    {
      path: "/admin/companies",
      element: (
        <PrivateRoute requiredRole="recruiter">
          <Companies></Companies>
        </PrivateRoute>
      ),
    },
    {
      path: "/admin/companies/create",
      element: (
        <PrivateRoute requiredRole="recruiter">
          {" "}
          <CreateCompany></CreateCompany>
        </PrivateRoute>
      ),
    },
    {
      path: "/admin/companies/:id",
      element: (
        <PrivateRoute requiredRole="recruiter">
          <CompanySetup></CompanySetup>
        </PrivateRoute>
      ),
    },
    {
      path: "/admin/jobs",
      element: (
        <PrivateRoute requiredRole="recruiter">
          {" "}
          <Admin></Admin>
        </PrivateRoute>
      ),
    },
    {
      path: "/admin/jobs/create",
      element: (
        <PrivateRoute requiredRole="recruiter">
          {" "}
          <PostJob></PostJob>
        </PrivateRoute>
      ),
    },
    // /admin/job/${job._id}/applicants`
    // admin/job/66c2b50d80bc724c13c74d2e/applicants
    {
      path: "/admin/job/:id/applicants",
      element: (
        <PrivateRoute requiredRole="recruiter">
          {" "}
          <Applicants></Applicants>{" "}
        </PrivateRoute>
      ),
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
