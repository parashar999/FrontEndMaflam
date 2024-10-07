import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import CourseDetail from "./Pages/CourseDetail/CourseDetail";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import ContactUs from "./Pages/ContactUs/ContactUS.jsx";
import Ebooks from "./Pages/Ebooks/Ebooks.jsx";
import Blogs from "./Pages/Blogs/Blogs.jsx";
import TermsAndConditionsPage from "./Pages/TermsAndConditionsPage/TermsAndConditionsPage.jsx";
import Pricing from "./Pages/Pricing/pricing.jsx";
import FaqPage from "./Pages/FaqPage/FaqPage.jsx";
import DevinciResolveCourseDetail from "./Pages/DevinciResolveCourseDetail/DevinciResolveCourseDetail.jsx";
import AdobePrimereProCourse from "./Pages/AdobePrimereProCourse/AdobePrimereProCourse.jsx";
import VegasProCourse from "./Pages/VegasProCourse/VegasProCourse.jsx";
import RepresentationCourseDetail from "./Pages/RepresentationCourseDetail/RepresentationCourseDetail.jsx";
import Checkouts from "./Pages/Checkout/Checkouts.jsx";
import PricingDetails from "./Pages/PricingDetails/PricingDetails.jsx";


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
        <Route
          path="/devinciresolve"
          element={<DevinciResolveCourseDetail />}
        />
        <Route path="/adobe" element={<AdobePrimereProCourse />} />
        <Route path="/vegas" element={<VegasProCourse />} />
        <Route path="/rep" element={<RepresentationCourseDetail />} />
        <Route path="/ebooks" element={<Ebooks></Ebooks>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route
          path="/terms&condition"
          element={<TermsAndConditionsPage></TermsAndConditionsPage>}
        />
        <Route path="/faqs" element={<FaqPage></FaqPage>} />
        <Route path="/checkout" element={<Checkouts></Checkouts>} />
        <Route path="/pricing" element={<PricingDetails></PricingDetails>} />
      </Routes>
    </div>
  );
};

export default App;
