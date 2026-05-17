import { useContext, useEffect, useState } from "react"
import NavbarContainer from "../Navbar/NavbarContainer"
import { NavLink, useNavigate } from "react-router"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../ContextApi/ContextApi";



let Login = () => {
    let { user, setuser } = useContext(AuthContext)

    let [state, setstate] = useState({ email: "", password: "" })
    let { email, password } = state
    let [userdata, setuserdata] = useState()
    useEffect(() => {
        let fetching = async () => {
            try {
                let response = await axios.get("http://localhost:2000/users")
                setuserdata(response.data)
                console.log(userdata)
            } catch (error) {
                console.log(error);
            }
        }
        fetching()
    }, [])

    let [eye, seteye] = useState(false)
    let handleEye = () => {
        seteye(!eye)
    }
    let handlechange = (e) => {
        let { name, value } = e.target
        setstate({ ...state, [name]: value })
    }

    let navigate = useNavigate()
    let handlesubmit = async (e) => {
        e.preventDefault()
        console.log(state);
        try {
            let userDeatils = userdata.find((x) => x.email === email && x.password === password)
            if (userDeatils) {
                setuser(userDeatils)
                localStorage.setItem("users", JSON.stringify(userDeatils))
                toast.success(`${email} has been successfully login`)
                navigate('/')
            }
        }
        catch (error) {
            console.log(error);
            toast.error("error")
        }
    }

    return (
        <div className="h-[90vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <article className="flex h-[90vh] w-full items-center justify-center">
                <section className="flex bg-gradient-to-r from-indigo-300 via-red-400  to-green-200  h-[50vh]  w-[30vw]   rounded-3xl flex-col items-center  ">
                    <form action="" onSubmit={handlesubmit}>
                        <h1 className="text-3xl font-bold text-center m-10">Login </h1>
                        <div className="mt-8 flex flex-col  ">
                            <input type="email" name="email" value={email} onChange={handlechange} className="w-full mb-4 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" />
                        </div>
                        <div className="mt-4 flex flex-col relative ">
                            <input type={eye ? "text" : "password"} name="password" value={password} onChange={handlechange} className="w-full mb-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500" placeholder="password" />
                            <div className="absolute  top-5 left-43" onClick={handleEye} id="eye" > {eye ? <FaEye /> : <FaEyeSlash />}</div>
                        </div>

                        <div className="">
                            <NavLink to="/register" className="hover:text-sky-400 text-[12px]  "> Dont have an Account</NavLink>
                        </div>
                        <div className="border-2 rounded-2xl w-[7vw] mt-3 pl-7 ml-12 bg-sky-300 hover:bg-green-300  animate-bounce   [animationDelay:5s] font-bold">
                            <button onClick={useNavigate}>Login</button>
                        </div>
                    </form>
                </section>
            </article>
        </div>
    )
}
export default Login


