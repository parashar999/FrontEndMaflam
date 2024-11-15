import React, { useContext, useState } from "react";
import styles from "./LatestInsights.module.css";
import { BlogsPageContent } from "../../store/BlogsPageContent.jsx";
import { LanguageContext } from "../LanguageContext/LanguageContext.jsx"; // Assume this provides language state

const LatestInsights = () => {
  const { blogsPageContentDetails, loading, error } = useContext(BlogsPageContent);
  const { language } = useContext(LanguageContext); // Get the current language from context
  const [visibleBlogs, setVisibleBlogs] = useState(2); // Show 2 blogs initially

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const { otherBlogDataforbody = [] } = blogsPageContentDetails || {};

  // Function to load more blogs
  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisible) => prevVisible + 2); // Load 2 more blogs each time
  };

  // Translation handling
  const translations = {
    en: {
      loadMore: "Load more",
      latestInsights: "Latest Insights from Maflam",
    },
    ar: {
      loadMore: "تحميل المزيد",
      latestInsights: "أحدث الأفكار من مافلام",
    },
  };

  const t = translations[language] || translations.en;

  return (
    <section className={styles.insightsSection}>
      <h2 className={styles.heading}>{t.latestInsights}</h2>
      <div className={styles.insightsContainer}>
        {otherBlogDataforbody.slice(0, visibleBlogs).map((blog, index) => (
          <div key={index} className={styles.insightCard}>
            <img
              src={blog.blogImage}
              alt={blog.title}
              className={styles.insightImage}
            />
            <div className={styles.cardContent}>
              <p className={styles.title}>{blog.title}</p>
              <a href="/blogDetails" className={styles.readMore}>
                ← {blog.btnTitle}
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Show the "Load more" button only if there are more blogs to load */}
      {visibleBlogs < otherBlogDataforbody.length && (
        <button className={styles.loadMoreBtn} onClick={loadMoreBlogs}>
          {t.loadMore} ({otherBlogDataforbody.length - visibleBlogs})
        </button>
      )}
    </section>
  );
};

export default LatestInsights;


// import React, { useContext } from "react";
// import styles from "./LatestInsights.module.css";
// import { BlogsPageContent } from "../../store/BlogsPageContent.jsx";

// const LatestInsights = () => {
//   const { blogsPageContentDetailsEjs, loading, error } = useContext(BlogsPageContent);

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   // Ensure data is available
//   const insights = blogsPageContentDetailsEjs?.blogTitle || [];

//   return (
//     <section className={styles.insightsSection}>
//       <h2 className={styles.heading}>Latest Insights from Maflam</h2>
//       <div className={styles.insightsContainer}>
//         {insights.map((insight) => (
//           <div key={insight.id} className={styles.insightCard}>
//             <img
//               src={insight.imageUrl} // Ensure this field exists in blogsPageContentDetailsEjs
//               alt={insight.title}
//               className={styles.insightImage}
//             />
//             <div className={styles.cardContent}>
//               <span className={styles.category}>{insight.category}</span>
//               <p className={styles.title}>{insight.title}</p>
//               <a href={`/blogDetails/${insight.id}`} className={styles.readMore}>
//                 ← Continue reading
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className={styles.loadMoreBtn}>Load more (58)</button>
//     </section>
//   );
// };

// export default LatestInsights;
