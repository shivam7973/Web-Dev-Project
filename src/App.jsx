// import { createBrowserRouter ,RouterProvider } from "react-router-dom"

import { createBrowserRouter, RouterProvider } from "react-router"
import NavbarContainer from "./Navbar/NavbarContainer"
import Login from "./Auth/Login"
import Register from "./Auth/Register"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import ContextApi from "./ContextApi/ContextApi"
import UpdateProfile from "./Profile/UpdateProfile"
import SideNavContainer from "./SideNavbar/SideNavContainer"
import AllCourses from "./Course/AllCourses"
import Createcourses from "./Course/Createcourses"
import PublicRoute from "./PublicRoute/PublicRoute"
import PrivateRoute from "./PrivateRoute/PrivateRoute"
import CourseDetail from "./Course/CourseDetail"
import Update from "./Course/Update"



let App = () => {
    let routes = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                    children: [{
                        path: "/",
                        element: <PrivateRoute>
                            <AllCourses />
                        </PrivateRoute>
                    }, {
                        path: "/createcourses",
                        element: <PrivateRoute>
                            <Createcourses />
                        </PrivateRoute>
                    }]
                },
                {
                    path: "/Login",
                    element: <PublicRoute>
                        <Login />
                    </PublicRoute>

                }, {
                    path: "/Register",
                    element: <PublicRoute>
                        <Register />
                    </PublicRoute>
                }, {
                    path: "/updateprofile",
                    element:<PrivateRoute><UpdateProfile/></PrivateRoute>
                    
                },{
                    path:"/allcourse/:id",
                    element:<CourseDetail/>
                },{
                    path:"/UpdateCourse/:id",
                    element:<Update/>
                }
                        
            ]
        }
    ])
    return (
        <ContextApi>
            <RouterProvider router={routes} />
            
        </ContextApi>
    )
}
export default App