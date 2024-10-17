import React from 'react'
import styles from "./BlogPostHero1.module.css"
import BlogHero from '../BlogHero/BlogHero'

export default function BlogPostHero1() {
  return (
    <div className={styles.header}>
        <div>
        <h1>Read and Explore Various Articles in the Film Industry</h1>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search" />
          <button className={styles.categoryButton}>Category</button>
         
        </div>
        <BlogHero></BlogHero>
    
        </div>
        </div>
  )
}
