import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigation } from 'react-router-dom'

const AllCourses = () => {
  let [jsondata, setjsondata] = useState([])

  useEffect(() => {
    let fetching = async () => {
      let response = await fetch("http://localhost:2000/courses")
      let data = await response.json()
      setjsondata(data)

    }
    fetching()
  }, [])
  console.log(jsondata);


  let navigate = useNavigation()
  let handledelete = async (id) => {
    try {
      let response = await axios.delete(`http://localhost:2000/courses/${id}`)
      console.log(response.data);
      alert("delete successfully")
      navigate("/")
    } catch (error) {
      console.log(error);

    }
  }


  return (
  <div className="h-[90vh] w-[90vw] bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 p-10">
  <div className="grid grid-cols-4 gap-8">
    {
      jsondata?.map((x) => {
        return (

          <div key={x.id}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 duration-300">
            <img src={x?.Url} alt="" className="h-[200px] w-full object-cover"/>

            <div className="p-5 flex flex-col gap-3">
              <h1 className="text-2xl font-bold text-cyan-300">{x.Course_Name} </h1>
              <p className="text-white">
                <span className="font-semibold text-pink-300"> Trainer :
                </span>{" "} {x.Trainer_Name}
              </p>

              <p className="text-white">
                <span className="font-semibold text-yellow-300">
                  Fees :
                </span>{" "} ₹ {x.Fees}
              </p>

              <p className="text-white">
                <span className="font-semibold text-green-300">
                  Duration :
                </span>{" "} {x.Duration_of_Courses} Months
              </p>

              <NavLink to={`/allcourse/${x.id}`} state={x}
                className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-3 rounded-2xl font-bold hover:from-pink-500 hover:to-purple-500 duration-300 shadow-lg">
                View More
              </NavLink>
            </div>
          </div>
        )
      })
    }
  </div>
</div>
  )
}

export default AllCourses
