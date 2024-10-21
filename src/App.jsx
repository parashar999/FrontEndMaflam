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
import {
  LanguageContext,
  LanguageProvider,
} from "./Component/LanguageContext/LanguageContext.jsx";

import "./App.css";
import { AboutusPageProvider } from "./store/AboutUsPageContext.jsx";
import { TermsConditionProvider } from "./store/TermsConditionContext.jsx";
import { EbookPageContextProvider } from "./store/ebookPageContext.jsx";
import LoginPage from "./Pages/LoginPage/LoginPage.jsx";

import SignUpPage from "./Pages/SignUpPage/SignUpPage.jsx";
import { PurchaseCancellationProvider } from "./store/PurchaseCancellationContext.jsx";
import PurchaseCancellationPage from "./Pages/PurchaseCancellationPage/PurchaseCancellationPage.jsx";
import { CommunityGuidelinesProvider } from "./store/CommunityGuidelinesPageContext.jsx";
import CommunityGuidelinesPage from "./Pages/CommunityGuidelinesPage/CommunityGuidelinesPage.jsx";
import { CheckoutPaymentContextProvider } from "./store/CheckoutPaymentContext.jsx";
import { PricingPageContextProvider } from "./store/PricingPageContext.jsx";
import { LoginPageContextProvider } from "./store/loginPageContext.jsx";
import { SingupPageContextProvider } from "./store/SingupPageContext.jsx";
import ContactUsPage2 from "./Pages/ContactUsPage2/ContactUsPage2.jsx";
import ContactUsPage3 from "./Pages/ContactUsPage3/ContactUsPage3.jsx";
const App = () => {
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
      <Route
        path="/aboutus"
        element={
          <LanguageProvider>
            <HomePageProvider>
              <AboutusPageProvider>
                <AboutUs />
              </AboutusPageProvider>
            </HomePageProvider>
          </LanguageProvider>
        }
      />

      <Route
        path="/terms&condition"
        element={
          <LanguageProvider>
            <HomePageProvider>
              <TermsConditionProvider>
                <TermsAndConditionsPage></TermsAndConditionsPage>
              </TermsConditionProvider>
            </HomePageProvider>
          </LanguageProvider>
        }
      />

      <Route
        path="/purchaseCancellation"
        element={
          <LanguageProvider>
            <HomePageProvider>
              <PurchaseCancellationProvider>
                <PurchaseCancellationPage></PurchaseCancellationPage>
              </PurchaseCancellationProvider>
            </HomePageProvider>
          </LanguageProvider>
        }
      />

      <Route
        path="/CommunityGuidelines"
        element={
          <LanguageProvider>
            <HomePageProvider>
              <CommunityGuidelinesProvider>
                <CommunityGuidelinesPage></CommunityGuidelinesPage>
              </CommunityGuidelinesProvider>
            </HomePageProvider>
          </LanguageProvider>
        }
      />

      <Route
        path="/prc"
        element={
          <LanguageProvider>
            <HomePageProvider>
              <AboutusPageProvider>
                <PricingPageContextProvider>
                  <Pricing />
                </PricingPageContextProvider>
              </AboutusPageProvider>
            </HomePageProvider>
          </LanguageProvider>
        }
      />
      <Route path="/blogDetails" element={<BlogDetails />} />
      <Route path="/coursedetails" element={<CourseDetail />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/contact2" element={<ContactUsPage2 />} />
      <Route path="/contact3" element={<ContactUsPage3 />} />
      <Route path="/devinciresolve" element={<DevinciResolveCourseDetail />} />
      <Route path="/adobe" element={<AdobePrimereProCourse />} />
      <Route path="/vegas" element={<VegasProCourse />} />
      <Route path="/rep" element={<RepresentationCourseDetail />} />
      <Route
        path="/ebooks"
        element={
          <LanguageProvider>
            <AboutusPageProvider>
              <EbookPageContextProvider>
                <Ebooks />
              </EbookPageContextProvider>
            </AboutusPageProvider>
          </LanguageProvider>
        }
      />
      <Route path="/blogs" element={<Blogs />} />
      <Route
        path="/login"
        element={
          <LanguageProvider>
            <LoginPageContextProvider>
              <LoginPage></LoginPage>
            </LoginPageContextProvider>
          </LanguageProvider>
        }
      />

      <Route
        path="/signUp"
        element={
          <LanguageProvider>
            <SingupPageContextProvider>
              <SignUpPage></SignUpPage>
            </SingupPageContextProvider>
          </LanguageProvider>
        }
      />
      <Route path="/terms&condition" element={<TermsAndConditionsPage />} />
      <Route path="/faqs" element={<FaqPage />} />
      <Route
        path="/checkout"
        element={
          <LanguageProvider>
            <CheckoutPaymentContextProvider>
              <Checkouts />
            </CheckoutPaymentContextProvider>
          </LanguageProvider>
        }
      />
      <Route path="/pricing" element={<PricingDetails />} />
      
    </Routes>
  );
};

export default App;
