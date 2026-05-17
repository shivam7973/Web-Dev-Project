import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'
import { NavLink, useLocation, useNavigation, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const CourseDetail = () => {
  let { id } = useParams()
  console.log(id);
  let { state } = useLocation()
  console.log(state);

  let navigate = useNavigate()
  let handledelete = async (id) => {
    let data = confirm("Are you sure want to delete")
    try {
      if (data) {
        let response = await axios.delete(`http://localhost:2000/courses/${id}`)
        console.log(response.data);
        toast.success("delete successfully")
        navigate("/")
      }
     
    } catch (error) {
           console.log(error);
              
    }
  }



  return (
  <div className="h-[90vh] flex justify-center items-center bg-gradient-to-br from-indigo-900 via-black to-indigo-950 p-6">
  <div className="bg-white w-[80vw] rounded-3xl shadow-2xl overflow-hidden">

    <div className="flex">

      <div className="w-[40%] pl-10 pt-10 pb-10">
        <img src={state?.Url} alt="" className="w-[40vw]  h-[40vh] bg-cover object-cover"/>
      </div>

      <div className="flex flex-col justify-between p-8 w-[60%]">
        <div>
          <h1 className="text-3xl font-bold text-indigo-700 mb-6"> {state?.Course_Name}</h1>

          <p className="text-lg font-semibold mb-4">
            👨‍🏫 Trainer: {state?.Trainer_Name}
          </p>

          <p className="text-gray-700 leading-8">
            {state?.Description}
          </p>
        </div>

        <div className="flex gap-6 mt-10">
          <button onClick={() => handledelete(state.id)} className="bg-red-500 hover:scale-105 duration-300 text-white px-6 py-2 rounded-xl">
            Delete
          </button>

          <NavLink
            to={`/UpdateCourse/${id}`} className="bg-green-500 hover:scale-105 duration-300 text-white px-6 py-2 rounded-xl text-center">
            Update
          </NavLink>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default CourseDetail
