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
import { HomePageContext, HomePageProvider } from "./store/HomePageContext.jsx";
import { LanguageContext, LanguageProvider } from "./Component/LanguageContext/LanguageContext.jsx";

import "./App.css";
import { AboutusPageProvider } from "./store/AboutUsPageContext.jsx";
import { TermsConditionProvider } from "./store/TermsConditionContext.jsx";
import { EbookPageContextProvider } from "./store/ebookPageContext.jsx";
import LoginPage from "./Pages/LoginPage/LoginPage.jsx"

const App = () => {
  // usePreventZoom()
  return (
  
    <Routes>
      
     
      <Route
        path="/"
        element={
          <LanguageProvider>
            <HomePageProvider>
              <Home />
            </HomePageProvider>
          </LanguageProvider>
        }
      />
      <Route path="/aboutus" element=  {  <LanguageProvider>
        <HomePageProvider>  <AboutusPageProvider>
          
            <AboutUs />  </AboutusPageProvider>    </HomePageProvider>

          </LanguageProvider>} />

      <Route path="/terms&condition" element={
        <LanguageProvider> <HomePageProvider> 
          <TermsConditionProvider>
            <TermsAndConditionsPage>
              </TermsAndConditionsPage>
               </TermsConditionProvider> 
                </HomePageProvider>  
                 </LanguageProvider> } />   


      <Route path="/prc" element={<Pricing />} />
      <Route path="/blogDetails" element={<BlogDetails />} />
      <Route path="/coursedetails" element={<CourseDetail />   } />
      <Route path="/contact" element={<ContactUs />} /> 
      <Route path="/devinciresolve" element={<DevinciResolveCourseDetail />} />
      <Route path="/adobe" element={<AdobePrimereProCourse />} />
      <Route path="/vegas" element={<VegasProCourse />} />
      <Route path="/rep" element={<RepresentationCourseDetail />} />
      <Route path="/ebooks" element={
        <LanguageProvider>
         
          <AboutusPageProvider>
            <EbookPageContextProvider>
        <Ebooks /> 
        </EbookPageContextProvider>
        </AboutusPageProvider>
        
        </LanguageProvider>
      } />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/login" element={<LoginPage></LoginPage>} />
      <Route path="/terms&condition" element={ <TermsAndConditionsPage />} />
      <Route path="/faqs" element={<FaqPage />} />
      <Route path="/checkout" element={<Checkouts />} />
      <Route path="/pricing" element={<PricingDetails />} />
      
    </Routes>
  
  );
};

export default App;
