import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {  useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    let { id } = useParams()
      console.log(id);

   
    let [state , setstate] = useState({
        Course_Name:"",
        Trainer_Name:"",
        Fees:"",
        Duration_of_Courses:"",
        Description:"",
        Url:""
    })
     let {Course_Name,Trainer_Name,Fees , Duration_of_Courses ,  Description , Url} = state
     let handlechange=(e)=>{
        let {name , value} = e.target
        setstate({...state , [name] :value})
    }
    

    let navigate= useNavigate()
    let handleupdate =async(e)=>{
        e.preventDefault()
        console.log(state);
    let handledata={}
    if(Course_Name){
        handledata.Course_Name = Course_Name
    }
    if(Trainer_Name){
        handledata.Trainer_Name = Trainer_Name
    }
    if(Fees){
        handledata.Fees = Fees
    }

    if(Description){
        handledata.Description=Description
    }
     if(Url){
        handledata.Url= Url
    }

    try{
        let posting = await axios.patch(`http://localhost:2000/courses/${id}`,handledata)
        console.log(posting.data);
        toast.success("update succesfully")
        navigate("/")
    }

    catch(error){
        console.log(error);
        alert("error found try again")
        
    }    
    }
  return (
  <div className="h-[90vh] flex items-center justify-center bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">

  <form onSubmit={handleupdate}
    className="w-[40vw] h-[80vh] bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 flex flex-col gap-2">
      
    <h1 className="text-4xl font-bold text-center text-white "> Update Course </h1>

    <div className="flex flex-col gap-2">
      <label className="text-white font-semibold"> Course Name </label>
      <input type="text" name="Course_Name" value={Course_Name} onChange={handlechange} placeholder="Enter Course Name"
        className="p-2 rounded-xl outline-none border text-white border-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400"/>
    </div>

    <div className="flex flex-col gap-2">
      <label className="text-white font-semibold"> Trainer Name</label>
      <input type="text" name="Trainer_Name" value={Trainer_Name} onChange={handlechange} placeholder="Enter Trainer Name"
        className="p-2 rounded-xl outline-none border text-white border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-400"/>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold"> Fees</label>
        <input type="number"name="Fees" value={Fees} onChange={handlechange} placeholder="Fees"
          className="p-2 rounded-xl outline-none border text-white border-gray-300"/>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold"> Duration </label>
        <input type="number" name="Duration_of_Courses" value={Duration_of_Courses} onChange={handlechange} placeholder="Duration"
          className="p-2 rounded-xl outline-none border text-white border-gray-300"/>
      </div>
    </div>

    <div className="flex flex-col gap-2">
      <label className="text-white font-semibold"> Description</label>
      <textarea name="Description" value={Description} onChange={handlechange} placeholder="Enter Description" rows="2"
        className="p-2 rounded-xl outline-none text-white border border-gray-300 resize-none" />
    </div>

    <div className="flex flex-col gap-2">
      <label className="text-white font-semibold"> Image URL </label>
      <input type="text" name="Url" value={Url} onChange={handlechange} placeholder="Enter Image URL"
        className="p-2 rounded-xl outline-none text-white border border-gray-300"/>
    </div>

    <button type="submit"
      className="mt-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 duration-300 text-white font-bold py-3 rounded-2xl shadow-lg">Update Course
    </button>
  </form>
</div>
  )
}
export default Update
