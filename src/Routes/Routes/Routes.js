import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../Layout/DashboardLayout"
import Main from "../../Layout/Main"
import Appointment from "../../Pages/Appointment/Appointment/Appointment"
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor"
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers"
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard"
import Payment from "../../Pages/Dashboard/Dashboard/Payment/Payment"
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors"
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login"
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError"
import SignUp from "../../Pages/SignUp/SignUp"
import AdminRoute from "../AdminRoute/AdminRoute"
import PrivateRoute from "../PrivateRoute/PrivateRoute"



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/manageDoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <PrivateRoute><Payment></Payment></PrivateRoute>,
            //     loader: ({ params }) => fetch(`http://localhost:4000/booking/${params.id}`)
            // },

            {
                path: '/dashboard/payment/:id',
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:4000/booking/${params.id}`)
            },

        ]
    }
])
export default router