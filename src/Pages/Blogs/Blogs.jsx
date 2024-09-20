import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import BlogHero from "../../Component/BlogHero/BlogHero";
import LatestInsights from "../../Component/LatestInsights/LatestInsights";
import JoinUs from "../../Component/JoinUs/JoinUs.jsx";
import Footer from "../../Component/Footer/Footer.jsx";
import PopularResources from "../../Component/PopularResources/PopularResources.jsx";
import styles from "./Blogs.module.css";
const Blogs = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BlogHero></BlogHero>
      <LatestInsights></LatestInsights>
      <div className={styles.container}>
        <PopularResources></PopularResources>
        <JoinUs></JoinUs>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
