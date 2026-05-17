import { NavLink } from "react-router"
import { AuthContext } from "../ContextApi/ContextApi";
import { useContext } from "react";

let Menu=()=>{
    let {user,logout}= useContext(AuthContext)
    console.log(user);

    return(
        <div>
            {
                user?(
                    <ul className="flex gap-10">
                        <NavLink to="/"> <li>Home</li></NavLink>
                        <NavLink to="/updateprofile">{user.firstname + " " + user.lastname}</NavLink>
                        <li onClick={logout} className="cursor-alias" >Logout</li>
                    </ul>
                ):(
            <ul className="flex  gap-10">
            <NavLink to="/"> <li>HOME</li></NavLink>
            <NavLink to="/Login"> <li>LOGIN</li></NavLink>  
            <NavLink to="/Register"> <li>REGISTER</li></NavLink>
            </ul>
                )
            }
        </div>
    )
}
export default  Menu