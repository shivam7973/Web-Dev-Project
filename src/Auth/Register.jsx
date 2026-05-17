import { useState } from "react";
import { FaEye, FaEyeSlash, FaUserPlus } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-hot-toast";

let Register = () => {

    let [state, setstate] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    let {
        firstname,
        lastname,
        email,
        password,
        confirmpassword,
    } = state;

    let [eye, seteye] = useState(false);
    let navigate = useNavigate()
    let handleEye = () => {
        seteye(!eye);
    };

    let handlechange = (e) => {
        let { name, value } = e.target;

        setstate({...state, [name]: value});
    };

    let handlesubmit = async (e) => {
        e.preventDefault();

        if (
            firstname === "" ||
            lastname === "" ||
            email === "" ||
            password === "" ||
            confirmpassword === ""
        ) {
            toast.error("All fields are compulsory");
            return;
        }

        if (password !== confirmpassword) {
            toast.error("Passwords should match");
            return;
        }

        if (password.length < 6) {
            toast.error("Password should be greater than 6 characters");
            return;
        }

        try {
            let emaildata = await fetch(
                `http://localhost:2000/users?email=${email}`
            );

            let parsedData = await emaildata.json();

            if (parsedData.length > 0) {
                return toast.error("Email already registered");
            }

          
            await fetch("http://localhost:2000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(state),
            });

            toast.success(`${email} registered successfully`);
            navigate("/Login");

        } catch (error) {
            console.log(error);
            toast.error("Error Found");
        }
    };

    return (
        <div className="h-[90vh] bg-gradient-to-br from-black via-indigo-950 to-black flex justify-center items-center p-5">
            <div className="bg-white w-[32vw]   mt-3 h-[85vh] rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-[100px] flex justify-center items-center">
                    <div className="bg-white p-5 rounded-full shadow-xl">
                        <FaUserPlus className="text-5xl text-indigo-600" />
                    </div>
                </div>
                <form onSubmit={handlesubmit} className="p-7 flex flex-col">
                    <h1 className="text-3xl font-bold text-center text-indigo-700 mb-1">Create Account</h1>

                    <div className="">
                        <label className="font-semibold text-gray-700"> First Name</label>

                        <input type="text" name="firstname" value={firstname} onChange={handlechange} placeholder="Enter first name" 
                        className="w-full p-2 mt-1 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-400"/>
                    </div>

                    
                    <div className="">
                        <label className="font-semibold text-gray-700"> Last Name </label>
                        <input type="text" name="lastname" value={lastname} onChange={handlechange} placeholder="Enter last name" 
                        className="w-full p-2 mt-1 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-400" />
                    </div>

                    <div className="">
                        <label className="font-semibold text-gray-700"> Email </label>
                        <input type="email" name="email"value={email}onChange={handlechange}placeholder="Enter email"  
                        className="w-full p-2 mt-1 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-400"/>

                    </div>

                    <div className=" relative">
                        <label className="font-semibold text-gray-700"> Password </label>
                        <input type={eye ? "text" : "password"}name="password" value={password} onChange={handlechange} placeholder="Enter password" 
                        className="w-full p-2 mt-1 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-400"/>

                        <div
                            className="absolute right-4 top-12 cursor-pointer text-indigo-600" onClick={handleEye}>{eye ? <FaEye /> : <FaEyeSlash />}
                        </div>

                    </div>
                    <div className="mb-2 relative">
                        <label className="font-semibold text-gray-700"> Confirm Passwor </label>
                        <input type={eye ? "text" : "password"} name="confirmpassword" value={confirmpassword} onChange={handlechange} placeholder="Confirm password" 
                        className="w-full p-2 mt-1 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-400"/>

                        <div
                            className="absolute right-4 top-12 cursor-pointer text-indigo-600" onClick={handleEye}> {eye ? <FaEye /> : <FaEyeSlash />}
                        </div>

                    </div>
                    <div className="mb-4">
                        <NavLink to="/login" className="text-sm text-indigo-600 hover:text-pink-500">
                            Already have an account?
                        </NavLink>
                    </div>
                    <button
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-xl font-bold hover:scale-105 duration-300 shadow-lg">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;