import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useParams} from "react-router-dom";


export default function TimeTable() {
  const [schedule, setSchedule] = useState([]);

  const {id}=useParams()

  useEffect(() => {
    loadSchedule();
  }, []);

  async function loadSchedule() {
    try {
      const response = await axios.get("http://localhost:8090/api/Examination/all");
      if (response.status === 200) {
        setSchedule(response.data);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.log(error);
    }
  }
  

  const deleteSchedule = async (id) => {
    try {
      await axios.delete(`http://localhost:8090/api/Examination/${id}`);
      loadSchedule();
    } catch (error) {
      console.log(error);
      alert("Failed to delete schedule");
    }
  };
  
  const editSchedule = async (id, editSchedule) => {
    try {
      await axios.put(`http://localhost:8090/api/Examination/${id}`, editSchedule);
      loadSchedule();
    } catch (error) {
      console.log(error);
      alert("Failed to update schedule");
    }
    // validate inputs
    if (editSchedule.moduleName.trim() === "" || editSchedule.date.trim() === "" || editSchedule.time.trim() === "" || editSchedule.venue.trim() === "") {
      alert("Please fill in all fields");
      return;
    }
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const timeRegex = /^\d{2}:\d{2}$/;
    if (!dateRegex.test(editSchedule.date) || !timeRegex.test(editSchedule.time)) {
      alert("Please enter a valid date (YYYY-MM-DD) and time (HH:MM)");
      return;
    }
    // send PUT request
    await axios.put(`http://localhost:8090/api/Examination/${id}`, editSchedule);
    loadSchedule();
  };
  
  
  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-success table-striped">
          <thead>
            <tr>
              
              <th scope="col">Exam ID</th>
              <th scope="col">Module Name</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Venue</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((exam) => (
              <tr key={exam.examId}>
                
                <td>{exam.examId}</td>
                <td>{exam.moduleName}</td>
                <td>{exam.date}</td>
                <td>{exam.time}</td>
                <td>{exam.venue}</td>
                <td>

                  <Link className="btn btn-outline-primary mx-2"  to={`/editschedule/${exam.examId}`}>
                    Edit
                  </Link>
                </td>
                <td>
                <button className="btn btn-outline-secondary mx-2" onClick={() => deleteSchedule(exam.examId)}>
                    Delete
                  </button>

                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-outline-secondary"to ="/AddSchedule">Add Schedule</Link>
                    
                 
      </div>
    </div>
  );
}

