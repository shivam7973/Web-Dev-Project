import { Outlet } from "react-router"
import NavbarContainer from "../Navbar/NavbarContainer"
import { Toaster } from "react-hot-toast"

let Layout=()=>{
    return(
        <div>
            <Toaster/>
            <NavbarContainer/>
            <Outlet/>
        </div>
    )
}
export default Layout
