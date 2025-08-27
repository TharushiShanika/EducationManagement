// import React, { useEffect ,useState} from "react";
// import axios from "axios";


// export default function Schedule() {

const[schedule,setSchedule]=useState([]);

useEffect(()=>{
  loadSchedule();
  
},[]);
const loadSchedule=async ()=>{
const result= await axios.get("http://localhost:8090/api/Examination/all");
  setSchedule(result.data);

};
  return (
    <div className='container'>
        <div className='py-4'>
  
        <table className="table table-success table-striped">
  <thead className="dark">
    <tr>
      <th scope="col">examId</th>
      <th scope="col">ModuleName</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">Venue</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
      schedule.map((shedule,index)=>(
        <tr key={index}>
      
      <td>{schedule.examId}</td>
      <td>{schedule.ModuleName}</td>
      <td>{schedule.Date}</td>
        <td>{schedule.Time }</td>
      <td>{schedule.Venue}</td>
      <td><button type="button" class="btn btn-outline-primary">Update</button></td>
      <td><button type="button" class="btn btn-outline-secondary">Delete</button></td>
      
    </tr>
    

      ))
    }
   
    
  </tbody>
</table>

        </div>
    </div>
  );
  