import React from "react";
import styles from "./BlogContainer.module.css";
import { Link } from 'react-router-dom';

function BlogContainer() {
  return (
    <div>
      <div className={styles.MainContainer}>
        <h1>Blogs</h1>
        <div className={styles.pricingimg}>
           
        </div>
        <div className={styles.Rectangle}>
            <h2>How does a professional <br /> director deal with the film crew?</h2>
            <p>In his important book, “Memoirs of a Film Director,” <br />Sergei Eisenstein says, “How did I become a film <br /> director? ...</p>
            <Link to=''>Continue reading</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogContainer;
