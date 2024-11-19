import { Navigate, Route, Routes } from "react-router-dom";
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
import { LoginPageContextProvider } from "./store/LoginPageContext.jsx";
import { SingupPageContextProvider } from "./store/SingupPageContext.jsx";
import ContactUsPage2 from "./Pages/ContactUsPage2/ContactUsPage2.jsx";
import ContactUsPage3 from "./Pages/ContactUsPage3/ContactUsPage3.jsx";
import MyCertificate from "./Pages/MyCertificate/MyCertificate.jsx";
import PersonalInformation from "./Pages/PersonalInformation/PersonalInformation.jsx";
import FilmProduction from "./Pages/FilmProduction/FilmProduction.jsx";
import { ContactUsContextProvider } from "./store/ContactUsContext.jsx";
import { ContactUs2ContextProvider } from "./store/ContactUs2Context.jsx";
import MyCousesPages from "./Pages/MyCousesPages/MyCousesPages.jsx";
import PaymentGateWayApi from "./Pages/PaymentGateWayApi.jsx";
import SocialMediaPage from "./Pages/SocialMedialPage/SocialMediaPage.jsx";
// import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy.jsx";
// import { PrivacyPolicyProvider } from "./store/PrivacyPolicy.jsx";
import EbookTwo from "./Pages/EbookTwo/EbookTwo.jsx";
import { FilmProductionProvider } from "./store/FilmProductionContext.jsx";
import MyWishlist from "./Pages/MyWishlist/MyWishlist.jsx";
import PageNotFoundPage from "./Pages/PageNotFoundPage/PageNotFoundPage.jsx";
import ContentRequiredPage from "./Pages/ContentRequiredPage/ContentRequiredPage.jsx";
import BlogEjsPage from "./Pages/BlogEjsPage/BlogEjsPage.jsx";
import { ContactUs3ContextProvider } from "./store/ContactUs3Context.jsx";
import PrivacyPolicy from "./Component/PrivacyPolicy/PrivacyPolicy.jsx";
import { PrivacyPolicyProvider } from "./store/PrivacyPolicy.jsx";
import PrivacyPolicyPage from "./Pages/PrivacyPolicy/PrivacyPolicyPage.jsx";
// import { PrivacyPolicyProvider } from "./store/PrivacyPolicy.jsx";
// import PrivacyPolicyPage from "./Pages/PrivacyPolicy/PrivacyPolicy.jsx";

//import Mycourses from "./Component/MyCourses/Mycourses.jsx";
//import Mycourses from "./Pages/MyCourses/Mycourses1.jsx";
import auth from "./Auth/Auth.js";
import Podcost from "./Component/Podcast/Podcost.jsx";
import ResetPasswordPage from "./Pages/ResetPasswordPage/ResetPasswordPage.jsx";

const userDetails = auth.getAuthData();
const PrivateRoute = ({ children }) => {
  return userDetails ? children : <Navigate to="/login" />;
};
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
      <Route
        path="/blogDetails"
        element={
          <LanguageProvider>
            <HomePageProvider>
              <AboutusPageProvider>
                <BlogDetails />
              </AboutusPageProvider>
            </HomePageProvider>
          </LanguageProvider>
        }
      />
     
      <Route
        path="/coursedetails"
        element={
          <LanguageProvider>
            <HomePageProvider>
              <CourseDetail />
            </HomePageProvider>
          </LanguageProvider>
        }
      />
      <Route
        path="/contact"
        element={
          <LanguageProvider>
            <AboutusPageProvider>
              <ContactUsContextProvider>
                <ContactUs />
              </ContactUsContextProvider>
            </AboutusPageProvider>
          </LanguageProvider>
        }
      />
      <Route
        path="/contact2"
        element={
          <LanguageProvider>
            <AboutusPageProvider>
              <ContactUsContextProvider>
                <ContactUs2ContextProvider>
                  <ContactUsPage2 />
                </ContactUs2ContextProvider>
              </ContactUsContextProvider>
            </AboutusPageProvider>
          </LanguageProvider>
        }
      />
      <Route
        path="/contact3"
        element={
          <LanguageProvider>
            <AboutusPageProvider>
              <ContactUsContextProvider>
                <ContactUs3ContextProvider>
                  <ContactUsPage3 />
                </ContactUs3ContextProvider>
              </ContactUsContextProvider>
            </AboutusPageProvider>
          </LanguageProvider>
        }
      />
      <Route path="/devinciresolve" element={<DevinciResolveCourseDetail />} />
      <Route path="/adobe" element={<AdobePrimereProCourse />} />
      <Route path=" " element={<VegasProCourse />} />
      <Route path="/rep" element={<RepresentationCourseDetail />} />
      <Route path="/mycertificate" element={<MyCertificate />} />
      <Route
        path="/personalinformation"
        element={
          <PrivateRoute>
            <PersonalInformation />
          </PrivateRoute>
        }
      />

      <Route
        path="/pagenotfound"
        element={
          <LanguageProvider>
            <PageNotFoundPage />
          </LanguageProvider>
        }
      />

      <Route
        path="/contentrequired"
        element={
          <LanguageProvider>
            <ContentRequiredPage />
          </LanguageProvider>
        }
      />

      <Route
        path="/filmproduction/:courseId"
        element={
          <LanguageProvider>
            <FilmProductionProvider>
              <AboutusPageProvider>
                <FilmProduction/>
              </AboutusPageProvider>
            </FilmProductionProvider>
          </LanguageProvider>
        }
      />
      <Route path="/ebooktwo" element={<EbookTwo />} />

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
      <Route
        path="/blogs"
        element={
          <LanguageProvider>
            <AboutusPageProvider>
              <Blogs />
            </AboutusPageProvider>
          </LanguageProvider>
        }
      />
      <Route path="/blogDetails/:id" element={<BlogEjsPage />} />
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
      <Route
        path="/privacypolicy"
        element={
          <LanguageProvider>
            <HomePageProvider>
              <PrivacyPolicyProvider>
                {/* <PrivacyPolicy/> */}
                <PrivacyPolicyPage></PrivacyPolicyPage>
              </PrivacyPolicyProvider>
            </HomePageProvider>
          </LanguageProvider>
        }
      />
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

      <Route
        path="/socialmedia"
        element={<SocialMediaPage></SocialMediaPage>}
      />

      <Route path="/paymentgateway" element={<PaymentGateWayApi />} />
      <Route path="/mycourses" element={<MyCousesPages />} />
      <Route path="/pricing" element={<PricingDetails />} />
      <Route path="/reset" element={
    <LanguageProvider>
        <ResetPasswordPage/>
        </LanguageProvider>
      
        } />

      <Route
        path="/mywishlist"
        element={
          <LanguageProvider>
            <HomePageProvider>
              <EbookPageContextProvider>
                <AboutusPageProvider>
                  <MyWishlist />
                </AboutusPageProvider>
              </EbookPageContextProvider>
            </HomePageProvider>
          </LanguageProvider>
        }
      />
    </Routes>
  );
};

export default App;
