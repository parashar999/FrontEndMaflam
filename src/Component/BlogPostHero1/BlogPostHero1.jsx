
import React, { useContext, useState, useEffect } from "react";
import styles from "./BlogPostHero1.module.css";
import BlogHero from '../BlogHero/BlogHero';
import BlogPopup from "../BlogPopup/BlogPopup"; 
import { assests } from "../../assets/assests";
import { BlogsPageContent } from "../../store/BlogsPageContent";

export default function BlogPostHero1() {
  const { blogsPageContentDetails, loading, error } = useContext(BlogsPageContent);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup visibility

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  // Destructure blogTitle data from context
  const { blogTitle = [] } = blogsPageContentDetails || {};

  // Toggle popup open/close state
  const handleCategoryClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className={`${styles.header} ${isPopupOpen ? styles.fixed : ""}`}>
      <div>
        <h1>{blogTitle[0]?.title || "Read and Explore Various Articles in the Film Industry"}</h1>
        
        <div className={styles.searchBar}>
          <input type="text" placeholder={blogTitle[1]?.title || "Search"} />
          <button className={styles.categoryButton} onClick={handleCategoryClick}>
            {blogTitle[2]?.title || "Category"}
            <span style={{ width: "10px" }}></span>
            <img src={assests.filter} alt="Search Icon" />
          </button>
        </div>
        
        <BlogHero />  
        
        {/* Render the BlogPopup component if isPopupOpen is true */}
        {isPopupOpen && <BlogPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />}
      </div>
    </div>
  );
}
