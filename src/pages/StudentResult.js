import axios from 'axios';
import {useEffect, useState } from "react";

//report gen
import jsPDF from "jspdf";

import "jspdf-autotable";

function StudentResult()
{
  
  
  //search
  const [query, setQuery] = useState("");



//report gen

  const [allResult, setAllResult] = useState([]);


  const [studentResultid, setId] = useState('');
  const [studentName, setstudentName] = useState("");
  const [score, setScore] = useState("");
  const [grade, setGrade] = useState(''); // default value is an empty string
  const [studentsResult, setStudentsResult] = useState([]);
 
 
 
useEffect(() => {
  (async () => await Load())();
  }, []);
  async function  Load()
  {
     const result = await axios.get(
         "http://localhost:8090/api/Result/all");
         setStudentsResult(result.data);
         console.log(result.data);
  }
 //report

  useEffect(() => {

 const fetchResult = async () => {
  
   try {
  
   const response = await axios.get("http://localhost:8090/api/Result/all");
  
   setAllResult(response.data);
  
  
  
   } catch (err) {
  
   console.log(err)
  
   }
  
  };
  
  fetchResult();
  
   }, []);

  const generateReport = () => {



     const doc = new jsPDF();
     
 
   
     doc.text("Student Result Report of Infomation Technology", 10, 10); 
     <br/>
     
     const columns = [
       
     "Student Name",
    
     "Score",
              
    
     "Grade",
    
  
    
     ];
    
     const rows = allResult.map(
    
    ({
    
     studentName,
    
     score,
    
     grade,
    
     Subject,
    
     }) => [
    
      studentName,
    
       score,
     
    
       grade,
     
    
    
    
     ]
    
     );
    
     doc.autoTable({
    
     head: [columns],
    
     body: rows,
    
     });
    
    
    
    
     doc.save("StudentResult.pdf");
    
    
    
    }
  
    async function save(event) {
      event.preventDefault();
      if (!studentName || !score || !grade) {
        alert("Please fill in all fields.");
        return;
      }
      if (isNaN(score) || score < 0 || score > 100) {
        alert("Please enter a valid score between 0 and 100.");
        return;
      }
      try {
        await axios.post("http://localhost:8090/api/Result/save", {
          studentName: studentName,
          score: score,
          grade: grade,
        });
        alert("Successfully Submitted");
        setId("");
        setstudentName("");
        setScore("");
        setGrade("");
        Load();
      } catch (err) {
        alert("User Update Failed");
      }
    }
    
 
   async function editStudentResult(studentsResult)
   {
    setstudentName(studentsResult.studentName);
    setScore(studentsResult.score);
    setGrade(studentsResult.grade);
    setId(studentsResult._id);
   }
   async function deleteStudentResult(studentResultid)
   {
        await axios.delete("http://localhost:8090/api/Result/delete/" + studentResultid);
        alert("Student deleted Successfully");
        Load();
   }
   async function update(event)
   {
    event.preventDefault();
   try
       {
        await axios.put("http://localhost:8090/api/Result/edit/" + studentResultid ,
       {
 
        studentName: studentName,
        score: score,
         grade: grade
      
       });
         alert(" Updated Sucessfully");
         setId("");
         setstudentName("");
         setScore("");
         setGrade("");
         Load();
       }
   catch(err)
       {
         alert(" Updated Failed");
       }
  }

 

 
  return (
    <div>
       <h1>Student Result Details</h1>
       <div class="container mt-4" >
          <form>
            
              <div class="form-group">
                <label>Student Name</label>
                <input  type="text" class="form-control" id="studentName"
                value={studentName}
                onChange={(event) =>
                  {
                    setstudentName(event.target.value);      
                  }}
                />
              </div>
 
 
              <div class="form-group">
                <label>Student Score</label>
                <input  type="text" class="form-control" id="score"
                 value={score}
                  onChange={(event) =>
                    {
                      setScore(event.target.value);      
                    }}
                    
                />
              </div>
 
              <div class="form-group"><br/>
              <label>Select Grade</label><br/>

              <select
                      value={grade}
                      onChange={(event) => {
                      setGrade(event.target.value);
                     }}
                  style={{ backgroundColor: 'white', color: 'black', padding: '10px',minWidth:'400px' }}
              >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="S">S</option>
                    </select>

 
              </div>
              <div>
              <button   class="btn btn-primary mt-4"  onClick={save}>Submit </button>
 
              <button   class="btn btn-warning mt-4"  onClick={update}>Update</button>
              </div>
              <br/>
            </form>
            <div>
            <input

                      aria-label="Search"

                      className="form-control-rounded form-control-prepended"

                      placeholder="Search By Template Name"

                      type="search"

                      onChange={(e) => setQuery(e.target.value)}

                      style={{borderRadius:"8px",width:"600px",marginLeft:"350px",height:"40px",padding:"5px"}}
          />
{/* report generation button */}

                      <button

                        style={{marginLeft:"10px"}}

                        className="btn-icon btn-3"

                        color="success"

                        type="button"

                        onClick={generateReport}

                       >Generate Report</button>

            </div>
          </div>
              <br/>
                <table class="table table-dark" align="center">
                
                  {studentsResult.filter(

                 (Result) =>

                        Result.studentName

                          ?.toLowerCase()

                          .includes(query.toLowerCase())

                   )
                  .map(function fn(studentResult,index)
                  {
                    return(
                      <tbody key={index}>
                        <tr>
               <td>{studentResult.studentName}</td>
                <td>{studentResult.score}</td>
                <td>{studentResult.grade}</td>        
                <td>
                
             
                <button type="button" class="btn btn-warning"  onClick={() => editStudentResult(studentResult)} >Edit</button>  
                    <button type="button" class="btn btn-danger" onClick={() => deleteStudentResult(studentResult._id)}>Delete</button>
             </td>
             </tr>
             </tbody>
                    );
                  })}
                  
              
        </table>
          </div>


            );
            
        }
  
  export default StudentResult;