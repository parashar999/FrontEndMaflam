
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import CourseDetail from "./Pages/CourseDetail/CourseDetail";



const App = () => {
  return (
    <div>
     <Routes>
     <Route path="/" element ={ <Home></Home>}/>
     <Route path="/aboutus" element ={ <AboutUs></AboutUs>}/>
     <Route path="/coursedetails" element ={ <CourseDetail />}/>
     </Routes>
    </div>
  );
};

export default App;
