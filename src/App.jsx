import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import Pricing from "./Pages/Pricing/pricing";

import BlogDetails from "./Pages/BlogDetails/BlogDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/aboutus" element={<AboutUs></AboutUs>} />
        <Route path="/prc" element={<Pricing></Pricing>}></Route>
        <Route path="/blogDetails" element={<BlogDetails></BlogDetails>} />
      </Routes>
    </div>
  );
};

export default App;
