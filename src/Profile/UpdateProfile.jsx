import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaPen } from "react-icons/fa";

const UpdateProfile = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    profile: ""
  });

  const [editField, setEditField] = useState("");
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users"));
    if (data) {
      setUser(data);
    }
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser((prev) =>
       ({...prev, [name]: value})
  );
  };

  const handleImage = (e) => {
    let file = e.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = () => {
        setUser((prev) => ({...prev, profile: reader.result}));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.patch(`http://localhost:2000/users/${user.id}`,user);
      localStorage.setItem("users",JSON.stringify(user));
      toast.success("Profile Updated");
      setEditField("");

    } catch (error) {
      console.log(error);
      toast.error("Update failed");
    }
  };

  return (
    <div className="h-[90vh] bg-gradient-to-r from-indigo-900 via-purple-900 to-black flex justify-center items-center pt-4">
      <div className="bg-white w-[40vw] h-[85vh] rounded-3xl shadow-2xl overflow-hidden">
        <div className="h-[115px] bg-gradient-to-r from-blue-500 to-purple-600"></div>

        <div className="flex flex-col items-center -mt-14">
          <img src={user.profile} alt=""
            className="w-28 h-28 rounded-full border-4 border-white object-cover"/>
          <label className="mt-3 bg-blue-500 text-white px-4 py-1 rounded-xl cursor-pointer hover:bg-blue-600">Change Photo
            <input type="file" hidden onChange={handleImage}/>
          </label>
          <div className="mt-2 text-center">
            <h1 className="font-bold text-2xl text-indigo-700"> {user.firstname || "First"} {" "} {user.lastname || "Last"}</h1>
            <p className="text-gray-500"> {user.email} </p>
          </div>
        </div>

        <div className="p-8">
          <div className="relative mb-4">
            <input type="text" name="firstname" value={user.firstname} onChange={handleChange} 
              className="w-full p-2 border rounded-xl bg-gray-100 pr-10" />
            <FaPen className="absolute top-4 right-4 text-blue-500 cursor-pointer" onClick={() => setEditField("firstname")}/>
          </div>
          <div className="relative mb-4">
            <input type="text" name="lastname" value={user.lastname} onChange={handleChange} disabled={editField !== "lastname"} className="w-full p-2 border rounded-xl bg-gray-100 pr-10" />
            <FaPen className="absolute top-4 right-4 text-blue-500 cursor-pointer" onClick={() => setEditField("lastname")}/>
          </div>
          <div className="relative mb-4">
            <input type="email" name="email" value={user.email}onChange={handleChange} disabled={editField !== "email" } className="w-full p-2 border rounded-xl bg-gray-100 pr-10"/>
            <FaPen className="absolute top-4 right-4 text-blue-500 cursor-pointer" onClick={() => setEditField("email")}/>
          </div>
          <button onClick={handleUpdate} className="w-full bg-green-500 text-white p-3 rounded-xl font-bold hover:scale-105 duration-300">Save Changes </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;