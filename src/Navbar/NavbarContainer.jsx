import Logo from "./Logo"
import Menu from "./Menu"


let NavbarContainer=()=>{
    return(
        <div className="flex  w-full justify-between  h-[10vh] px-10 bg-black/60  text-white font-bold items-center">
            <Logo/>
            <Menu/>
        </div>
    )
}
export default NavbarContainer