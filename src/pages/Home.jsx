import { Outlet } from "react-router"
import SideNavContainer from "../SideNavbar/SideNavContainer"

let Home=()=>{
    return(
        <div className="flex">
            <SideNavContainer/>
            <Outlet/>
        </div>  
    )
}
export default Home