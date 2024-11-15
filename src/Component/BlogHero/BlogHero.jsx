import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BlogHero.module.css";
import { BlogsPageContent } from "../../store/BlogsPageContent.jsx";

const BlogHero = () => {
  const { blogsPageContentDetails, loading, error } = useContext(BlogsPageContent);
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const { formattedBlogDataforheader = [] } = blogsPageContentDetails || {};

  if (!formattedBlogDataforheader.length) return <p>No blog data available</p>;

  // Function to handle "Continue Reading" button click
  const handleContinueReading = (id) => {
    navigate(`/blogDetails/${id}`);
  };

  return (
    <div className={styles.blogDetails}>
      <div className={styles.heroSection}>
        <div className={styles.featuredBlog}>
          <div className={styles.featuredContent}>
            <img
              src={formattedBlogDataforheader[0].blogImage}
              alt="Featured Blog"
              className={styles.featuredImage}
            />
            <h2 className={styles.featuredTitle}>
              {formattedBlogDataforheader[0].title}
            </h2>
            <p className={styles.featuredDescription}>
              {formattedBlogDataforheader[0].blogSubtitle1}
            </p>
            <button
              onClick={() => handleContinueReading(formattedBlogDataforheader[0].id)}
              className={styles.readMoreBtn}
            >
              {formattedBlogDataforheader[0].btnTitle}
            </button>
          </div>
        </div>

        <div className={styles.blogList}>
          {formattedBlogDataforheader.slice(1).map((post, index) => (
            <div key={index} className={styles.blogCard}>
              <img
                src={post.blogImage || "default-image-url.jpg"}
                alt={post.title}
                className={styles.blogImage}
              />
              <div className={styles.blogContent}>
                <h3 className={styles.title}>{post.title}</h3>
                <a
                  onClick={() => handleContinueReading(post.id)}
                  className={styles.readMore}
                >
                  {post.btnTitle}
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
