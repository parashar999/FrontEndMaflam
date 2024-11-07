import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import BlogHero from "../../Component/BlogHero/BlogHero";
import LatestInsights from "../../Component/LatestInsights/LatestInsights";
import JoinUs from "../../Component/JoinUs/JoinUs.jsx";
import Footer from "../../Component/Footer/Footer.jsx";
import PopularResources from "../../Component/PopularResources/PopularResources.jsx";
import styles from "./Blogs.module.css";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext.jsx";
import { AboutusPageProvider } from "../../store/AboutUsPageContext.jsx";
import BlogPostHero1 from "../../Component/BlogPostHero1/BlogPostHero1.jsx";
// import BlogPostHero1 from "../../Component/BlogPostHero1/BlogPostHero1.JSX";
// import BlogPostHero1 from "../../Component/BlogPostHero1/BlogPostHero1.JSX";
const Blogs = () => {
  return (
    <div>
      <LanguageProvider>
        <AboutusPageProvider>
          <Navbar></Navbar>
          <BlogPostHero1></BlogPostHero1>
          <LatestInsights></LatestInsights>
          <div className={styles.container}>
            {/* <PopularResources></PopularResources> */}
            <JoinUs></JoinUs>
          </div>
          <Footer></Footer>
        </AboutusPageProvider>
      </LanguageProvider>
    </div>
  );
};

export default Blogs;
