

import { useContext } from "react";
import styles from "./BlogContainer.module.css";
import { Link } from 'react-router-dom';
import { HomePageContext } from "../../store/HomePageContext.jsx";

function BlogContainer() {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Ensure that the API data exists before rendering
  const blogData = homeScreenDetails?.blogData || [];
  const description = homeScreenDetails?.blogData?.description || [];

  return (
    <div>
      <div className={styles.MainContainer}>
        <h1>{blogData[0]?.title || "Default Blog Title"}</h1>
        <div className={styles.pricingimg}>
          <img src={blogData[0]?.imageUrl || ""} alt="Blog" />
        </div>
        <div className={styles.Rectangle}></div>
        
        <div className={styles.contentContainer}>
          <h2>{blogData[1]?.title || "Default Blog Subtitle"}</h2>
          <p>{blogData[1]?.description || "No description available."}</p>
          <Link to=''>{blogData[2]?.title || "Read More"}</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogContainer;


// import React from "react";
// import styles from "./BlogContainer.module.css";
// import { Link } from 'react-router-dom';

// import { HomePageContext } from "../../store/HomePageContext.jsx"; 

// function BlogContainer() {
//   const { homeScreenDetails, loading, error } = useContext(HomePageContext);

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   // Ensure that the API data exists before rendering
//   const countData = homeScreenDetails?.countData || [];
  
//   const title1 = countData[0]?.title || "Default Title";
//   const description1 = countData[1]?.description || "No Description";
//   const description2 = countData[2]?.description || "No Description";
//   const description3 = countData[3]?.description || "No Description";
//   const testimonial = countData[4]?.title || "No Testimonial";

//   return (
//     <div>
//       <div className={styles.MainContainer}>
//         <h1>Maflam Blogs</h1>
//         <div className={styles.pricingimg}>
           
//         </div>
//         <div className={styles.Rectangle}> </div>
          
//            <div className={styles.contentContainer}>
//            <h2>How does a professional director deal with the film crew?</h2>
//             <p>In his important book, “Memoirs of a Film Director,” Sergei Eisenstein says, “How did I become a film  director? ...</p>
//             <Link to=''>Continue reading</Link>
           
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BlogContainer;

