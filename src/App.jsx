import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import CourseDetail from "./Pages/CourseDetail/CourseDetail";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import ContactUs from "./Pages/ContactUs/ContactUS.jsx";
import Checkout from "./Component/PaymentForm/PaymentForm.jsx";
import Ebooks from "./Pages/Ebooks/Ebooks.jsx";
import Blogs from "./Pages/Blogs/Blogs.jsx";
import Pricing from "./Pages/Pricing/pricing.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/aboutus" element={<AboutUs></AboutUs>} />
        <Route path="/prc" element={<Pricing></Pricing>}></Route>
        <Route path="/blogDetails" element={<BlogDetails></BlogDetails>} />
        <Route path="/coursedetails" element={<CourseDetail />} />
        <Route path="/contact" element={<ContactUs></ContactUs>} />
        <Route path="/checkout" element={<Checkout></Checkout>} />
        <Route path="/ebooks" element={<Ebooks></Ebooks>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
      </Routes>
    </div>
  );
};

export default App;
