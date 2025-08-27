import React, { useState } from 'react'

import axios from 'axios';
import {Link,useNavigate} from "react-router-dom";



export default function AddSchedule() {

 let navigate = useNavigate();

  const[schedule,setSchedule]=useState({
  examId:"",
  ModuleName:"",
  Date:"",
  Time:"",
  Venue:""
});


const{examId,ModuleName,Date,Time,Venue}=schedule;

const onInputChange=(e)=>{

  setSchedule({...schedule,[e.target.name]:e.target.value});
};



const onSubmit= async(e)=>{
  e.preventDefault();
  await axios.post("http://localhost:8090/api/Examination/save",schedule);
  navigate("/");
};


  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
       <h2 className="text-center m-4">Add New Schedule</h2>
       <form onSubmit={(e)=>onSubmit(e)}>
       <div className="mb-3">
        <label htmlFor="Name" className="form-label">
      Exam ID
      </label>
      <input
      type={"text"}
      className="form-control"
      placeholder="Enter Exam ID"
      name="examId"
      value={examId}
      onChange={(e)=>onInputChange(e)}
      />
       </div>
       <div className="mb-3">
        <label htmlFor="Name" className="form-label">
      Module Name
      </label>
      <input
      type={"text"}
      className="form-control"
      placeholder="Enter Module Name"
      name="ModuleName"
      value={ModuleName}
      onChange={(e)=>onInputChange(e)}
      />
       </div>
       <div className="mb-3">
        <label htmlFor="Name" className="form-label">
      Date
      </label>
      <input
      type={"text"}
      className="form-control"
      placeholder="Enter Date"
      name="Date"
      value={Date}
      onChange={(e)=>onInputChange(e)}
      />
       </div>
       <div className="mb-3">
        <label htmlFor="Name" className="form-label">
      Time
      </label>
      <input
      type={"text"}
      className="form-control"
      placeholder="Enter Time"
      name="Time"
      value={Time}
      onChange={(e)=>onInputChange(e)}
      />
       </div>
       <div className="mb-3">
        <label htmlFor="Name" className="form-label">
      Venue
      </label>
      <input
      type={"text"}
      className="form-control"
      placeholder="Enter Venue"
      name="Venue"
      value={Venue}
      onChange={(e)=>onInputChange(e)}
      />
       </div>
       <button type="Submit" className="btn btn-outline-primary">
        Submit
       </button>
       <Link  className="btn btn-outline-danger mx-2" to="/">
        Cancel
       </Link>
       </form>
            </div>
            
        </div>
    </div>
  );
}
