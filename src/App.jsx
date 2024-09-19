
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";



const App = () => {
  return (
    <div>
     <Routes>
         <Route path="/" element ={ <Home></Home>}/>
         <Route path="/aboutus" element ={ <AboutUs></AboutUs>}/>
     </Routes>
    </div>
  );
};

export default App;
