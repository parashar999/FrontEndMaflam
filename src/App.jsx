import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import ContactUs from "./Pages/ContactUs/ContactUS.jsx";
import Blogs from "./Pages/Blogs/Blogs.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/aboutus" element={<AboutUs></AboutUs>} />
        <Route path="/blogDetails" element={<BlogDetails></BlogDetails>} />
        <Route path="/contact" element={<ContactUs></ContactUs>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
      </Routes>
    </div>
  );
};

export default App;
