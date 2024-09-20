import React from "react";
import styles from "./BlogHero.module.css";
import { blogPosts } from "../../assets/assests.js";
import { assests } from "../../assets/assests.js";

const BlogHero = () => {
  return (
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
  );
};

export default BlogHero;
