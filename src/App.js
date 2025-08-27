
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';


import TimeTable from './pages/TimeTable';
import Footer  from './layout/Footer';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AddSchedule from './pages/AddSchedule';
import EditSchedule from './pages/EditSchedule';
import StudentResult from './pages/StudentResult'


function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/> 
      <Routes>
        <Route exact path="/" element={<TimeTable/>}/>
        <Route exact path="/AddSchedule" element={<AddSchedule/>}/>
        <Route exact path="/EditSchedule/:examId" element={<EditSchedule/>}/>
        <Route exact path="/StudentResult" element={<StudentResult/>}/>
     
  
        
      </Routes>
       <Footer/>
      </Router>
     
      
     
    </div>
  );
};

export default App;
