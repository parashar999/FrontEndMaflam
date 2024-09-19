
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import ContactUS from "./Pages/ContactUs/ContactUS";



const App = () => {
  return (
    <div>
     <Routes>
        <Route path="/" element ={ <Home></Home>}/>
        <Route path="/aboutus" element ={ <AboutUs></AboutUs>}/>
        <Route path="/contact" element ={ <ContactUS></ContactUS>}/>
     </Routes>
    </div>
  );
};

export default App;
