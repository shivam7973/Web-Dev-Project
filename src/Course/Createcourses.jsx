import React, { useState } from 'react'

const Createcourses = () => {
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

    let handlesumit=async(e)=>{
        e.preventDefault()
        console.log(state);

    try{
        let posting = await fetch("http://localhost:2000/courses",{
            method:'POST',
            headers:{"Content-Type" :"application/json"},
            body: JSON.stringify(state)
        })
        alert("post successfully")
    }
    catch(error){
        console.log(error);
        alert("error found try again")
        
    }    
    }
    
    return (
    <div className=" h-[90vh] w-[80vw]  flex items-center justify-center bg-gradient-to-r from-[#141e30] via-[#243b55] to-[#141e30] ">

    <form onSubmit={handlesumit} className="w-[42vw] h-[80vh] mt-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[30px] shadow-2xl p-7 flex flex-col ">

    <h1 className="text-4xl font-extrabold text-center text-white "> Create Course </h1>

    <div className="flex flex-col gap-2">
        <label className="text-cyan-300 font-semibold text-lg"> Course Name </label>

        <input type="text" name="Course_Name" value={Course_Name} onChange={handlechange} placeholder="Enter Course Name"
        className="bg-white/20 text-white placeholder-gray-300 border border-cyan-400 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400"/>
    </div>

    <div className="flex flex-col gap-2">
        <label className="text-pink-300 font-semibold text-lg"> Trainer Name </label>
        <input type="text" name="Trainer_Name" value={Trainer_Name} onChange={handlechange} placeholder="Enter Trainer Name"
        className="bg-white/20 text-white placeholder-gray-300 border border-pink-400 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-pink-400"/>
    </div>

    <div className="grid grid-cols-2 gap-5">
      <div className="flex flex-col gap-2">
        <label className="text-yellow-300 font-semibold text-lg"> Fees </label>
        <input type="number" name="Fees" value={Fees} onChange={handlechange} placeholder="Enter Fees"
          className="bg-white/20 text-white placeholder-gray-300 border border-yellow-400 rounded-xl px-4 py-2 outline-none" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-green-300 font-semibold text-lg"> Duration </label>
        <input type="number" name="Duration_of_Courses" value={Duration_of_Courses} onChange={handlechange} placeholder="Course Duration"
          className="bg-white/20 text-white placeholder-gray-300 border border-green-400 rounded-xl px-4 py-2 outline-none"/>
      </div>
    </div>

    <div className="flex flex-col gap-2">
      <label className="text-orange-300 font-semibold text-lg"> Description </label>
      <textarea name="Description" value={Description} onChange={handlechange} rows="3" placeholder="Enter Course Description"
        className="bg-white/20 text-white placeholder-gray-300 border border-orange-400 rounded-xl px-4 py-2 outline-none resize-none"/>
    </div>

    <div className="flex flex-col gap-2">
      <label className="text-purple-300 font-semibold text-lg"> Image URL </label>
      <input type="text" name="Url" value={Url} onChange={handlechange} placeholder="Enter Image URL"
        className="bg-white/20 text-white placeholder-gray-300 border border-purple-400 rounded-xl px-4 py-2 outline-none"/>
    </div>

    <button type="submit"
      className="mt-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:scale-105 duration-300 text-white font-bold py-3 rounded-2xl shadow-lg text-lg"> Create Course</button>
  
  </form>
</div>
    
    )
}

export default Createcourses
