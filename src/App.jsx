
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import Pricing from "./Pages/Pricing/pricing";
import Fundamental from "./Component/FundamentalPackage/Fundamental";





const App = () => {
  return (
    <div>
  
     <Routes>
         {/* <Route path="/" element ={ <Home></Home>}/>
         <Route path="/aboutus" element ={ <AboutUs></AboutUs>}/> */}
        <Route path="/prc" element={<Pricing></Pricing>}></Route>
       
     </Routes>
    </div>
  );
};

export default App;
