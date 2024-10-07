import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import CourseDetail from "./Pages/CourseDetail/CourseDetail";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import ContactUs from "./Pages/ContactUs/ContactUS";
import Ebooks from "./Pages/Ebooks/Ebooks";
import Blogs from "./Pages/Blogs/Blogs";
import TermsAndConditionsPage from "./Pages/TermsAndConditionsPage/TermsAndConditionsPage";
import Pricing from "./Pages/Pricing/Pricing";
import FaqPage from "./Pages/FaqPage/FaqPage";
import DevinciResolveCourseDetail from "./Pages/DevinciResolveCourseDetail/DevinciResolveCourseDetail";
import AdobePrimereProCourse from "./Pages/AdobePrimereProCourse/AdobePrimereProCourse";
import VegasProCourse from "./Pages/VegasProCourse/VegasProCourse";
import RepresentationCourseDetail from "./Pages/RepresentationCourseDetail/RepresentationCourseDetail";
import Checkouts from "./Pages/Checkout/Checkouts";
import PricingDetails from "./Pages/PricingDetails/PricingDetails";
import styles from './App.module.css';  

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/prc" element={<Pricing />} />
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="/coursedetails" element={<CourseDetail />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/devinciresolve" element={<DevinciResolveCourseDetail />} />
          <Route path="/adobe" element={<AdobePrimereProCourse />} />
          <Route path="/vegas" element={<VegasProCourse />} />
          <Route path="/rep" element={<RepresentationCourseDetail />} />
          <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/terms&condition" element={<TermsAndConditionsPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/checkout" element={<Checkouts />} />
          <Route path="/pricing" element={<PricingDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
