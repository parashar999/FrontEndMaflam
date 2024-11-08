import React, { useContext, useEffect } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import BlogHero from "../../Component/BlogHero/BlogHero";
import LatestInsights from "../../Component/LatestInsights/LatestInsights";
import JoinUs from "../../Component/JoinUs/JoinUs.jsx";
import Footer from "../../Component/Footer/Footer.jsx";
import PopularResources from "../../Component/PopularResources/PopularResources.jsx";
import styles from "./Blogs.module.css";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext.jsx";
import { AboutusPageContext, AboutusPageProvider } from "../../store/AboutUsPageContext.jsx";
import BlogPostHero1 from "../../Component/BlogPostHero1/BlogPostHero1.jsx";
import { BlogsPageContent, BlogsPageContentProvider } from "../../store/BlogsPageContent.jsx";

const Blogs = () => {
  const { aboutusScreenDetails, loading: aboutLoading, error: aboutError } =
    useContext(AboutusPageContext);

  useEffect(() => {
    if (aboutusScreenDetails) {
      console.log("About Us Screen Details:", aboutusScreenDetails);
    }
  }, [aboutusScreenDetails]);

  const {
    blogsPageContentDetails,
    loading: blogsLoading,
    error: blogsError,
  } = useContext(BlogsPageContent) || {}; // Add a fallback here

  useEffect(() => {
    if (blogsPageContentDetails) {
      console.log("Blog Page Content Details:", blogsPageContentDetails);
    }
  }, [blogsPageContentDetails]);

  return (
    <div>
      <LanguageProvider>
        <AboutusPageProvider>
          <BlogsPageContentProvider>
            <Navbar />
            <BlogPostHero1 />

            <LatestInsights />
            <div className={styles.container}>
              {/* <PopularResources /> */}
              <JoinUs />
            </div>
            <Footer />
          </BlogsPageContentProvider>
        </AboutusPageProvider>
      </LanguageProvider>
    </div>
  );
};

export default Blogs;
