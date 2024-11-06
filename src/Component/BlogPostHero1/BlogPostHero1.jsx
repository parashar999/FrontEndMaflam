import React, { useEffect, useState, useContext } from "react";
import styles from "./BlogPostHero1.module.css"
import stylesArabic from "./BlogPostHero1Arabic.module.css"
import BlogHero from '../BlogHero/BlogHero'
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";
import { assests } from "../../assets/assests";

export default function BlogPostHero1() {

  const { language} = useContext(LanguageContext);
  const stylesSelected = language === "ar"?stylesArabic:styles;

  return (
    <div className={styles.header}>
        <div>
        <h1>Read and Explore Various Articles in the Film Industry</h1>
        
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search" />
          <button className={styles.categoryButton}>Category
            <span style={{width:"10px"}}></span>
          <img src={assests.filter} alt="Search Icon" />
          </button>
         
        </div>
        <BlogHero></BlogHero>
    
        </div>
        </div>
  )
}
