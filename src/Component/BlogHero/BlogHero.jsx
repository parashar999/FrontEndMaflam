import React from "react";
import styles from "./BlogHero.module.css";
import { blogPosts } from "../../assets/assests.js";
import { assests } from "../../assets/assests.js";
// import BlogPostHero1 from "../BlogPostHero1/BlogPostHero1.JSX";

const BlogHero = () => {
  return (
    <div className={styles.blogDetails}>    
    

    <div className={styles.heroSection}>
  
      <div className={styles.featuredBlog}>
        
        <div className={styles.featuredContent}>
          <img
            src={assests.mainBlog}
            alt="Featured Blog"
            className={styles.featuredImage}
          />
          <p className={styles.featuredCategory}>
            Educational, Entertaining, Research-Based, Critical
          </p>
          <h2 className={styles.featuredTitle}>
            How does a professional director <br /> manage the crew on set?
          </h2>
          <p className={styles.featuredDescription}>
            Yes, make sure to select the best lessons that fit your needs and
            skill level.
          </p>
          <a href="#" className={styles.readMoreBtn}>
            Read story
          </a>
        </div>
      </div>

      <div className={styles.blogList}>
        {blogPosts.map((post) => (
          <div key={post.id} className={styles.blogCard}>
            <img
              src={post.image}
              alt={post.title}
              className={styles.blogImage}
            />
            <div className={styles.blogContent}>
              <p className={styles.category}>{post.category}</p>
              <h3 className={styles.title}>{post.title}</h3>
              <a href="#" className={styles.readMore}>
                {post.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BlogHero;



// // import React, { useState, useEffect } from 'react';
// import styles from './BlogHero.module.css';
//  // Importing the JSON data

// const BlogHero = () => {
  

//   return (
//     <div className={styles.ArticlePage}>
      // <header className={styles.header}>
      //   <h1>Read and Explore Various Articles in the Film Industry</h1>
      //   <div className={styles.searchBar}>
      //     <input type="text" placeholder="Search" />
      //     <button className={styles.categoryButton}>Category</button>
      //   </div>
      // </header>

//       <section className={styles.popularArticles}>
//         <h2>Most Popular Articles</h2>
//         <div className={styles.articlesGrid}>
//           {articles.map((article, index) => (
//             <div key={index} className={styles.articleCard}>
//               <img src={article.imageUrl} alt={article.title} className={styles.articleImage} />
//               <div className={styles.articleInfo}>
//                 <p className={styles.articleCategory}>{article.category}</p>
//                 <h3 className={styles.articleTitle}>{article.title}</h3>
//                 {article.description && <p className={styles.articleDescription}>{article.description}</p>}
//                 <a href={article.readMoreLink} className={styles.readMore}>Read more</a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BlogHero;
