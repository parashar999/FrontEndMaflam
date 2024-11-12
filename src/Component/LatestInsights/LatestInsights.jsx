// import React, { useContext } from "react";
// import styles from "./LatestInsights.module.css";
// import { insights } from "../../assets/assests.js";
// import { BlogsPageContent } from "../../store/BlogsPageContent.jsx";

// const LatestInsights = () => {
//   const { blogsPageContentDetails, loading, error } = useContext(BlogsPageContent);

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   // Destructure blogTitle data from context
//   const { blogTitle = [] } = blogsPageContentDetails || {};
//   return (
//     <section className={styles.insightsSection}>
//       <h2 className={styles.heading}>Latest Insights from Maflam</h2>
//       <div className={styles.insightsContainer}>
//         {insights.map((insight) => (
//           <div key={insight.id} className={styles.insightCard}>
//             <img
//               src={insight.imageUrl}
//               alt={insight.title}
//               className={styles.insightImage}
//             />
//             <div className={styles.cardContent}>
//               <span className={styles.category}>{insight.category}</span>
//               <p className={styles.title}>{insight.title}</p>
//               <a href="/blogDetails" className={styles.readMore}>
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

import React, { useContext } from "react";
import styles from "./LatestInsights.module.css";
import { insights } from "../../assets/assests.js";
import { BlogsPageContent } from "../../store/BlogsPageContent.jsx";

const LatestInsights = () => {
  const { blogsPageContentDetails, loading, error } = useContext(BlogsPageContent);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  // Destructure otherBlogDataforbody from context
  const { otherBlogDataforbody = [] } = blogsPageContentDetails || {};

  return (
    <section className={styles.insightsSection}>
      <h2 className={styles.heading}>Latest Insights from Maflam</h2>
      <div className={styles.insightsContainer}>
        {/* Render insights data */}
        {/* {insights.map((insight) => (
          <div key={insight.id} className={styles.insightCard}>
            <img
              src={insight.imageUrl}
              alt={insight.title}
              className={styles.insightImage}
            />
            <div className={styles.cardContent}>
              <span className={styles.category}>{insight.category}</span>
              <p className={styles.title}>{insight.title}</p>
              <a href="/blogDetails" className={styles.readMore}>
                ← Continue reading
              </a>
            </div>
          </div>
        ))} */}

        {/* Render otherBlogDataforbody data */}
        {otherBlogDataforbody.map((blog, index) => (
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
      {/* <button className={styles.loadMoreBtn}>Load more (58)</button> */}
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
