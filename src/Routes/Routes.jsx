import { createBrowserRouter } from "react-router-dom";
import Login from '../Component/Login/Login';
import Dashboard from "../Component/Dashboard/Dashboard";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import TaskDes from "../Component/TaskDes/TaskDes";
import Signup from "../Component/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>

            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
            {
                path:'/taskdescription',
                element:<TaskDes/>
            },
            {
                path:'/signup',
                element:<Signup/>
            }
        ]
    }

    
])