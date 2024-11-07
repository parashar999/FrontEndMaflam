

import { useContext } from "react";
import styles from "./BlogContainer.module.css";
import stylesEng from "./BlogContainerEng.module.css";
import { Link } from 'react-router-dom';
import { HomePageContext } from "../../store/HomePageContext.jsx";
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";
import RightNavArrow from "../../assets/rightNavArrow.png";
import LeftNavArrow from "../../assets/leftNavArrow.png";
// function BlogContainer() {
//   const { homeScreenDetails, loading, error } = useContext(HomePageContext);
//   const { language} = useContext(LanguageContext);

//   const stylesSelected = language === "ar"?styles:stylesEng;

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   // Ensure that the API data exists before rendering
//   const blogData = homeScreenDetails?.blogData || [];
//   const description = homeScreenDetails?.blogData?.description || [];
//   const arrow = language === "ar"?<img src={LeftNavArrow} alt="" style={{marginRight:'10px'}} /> :
//   <img src={RightNavArrow} alt="" style={{marginRight:'10px'}} /> 

//   return (
//     <div>
//       <div className={stylesSelected.MainContainer}>
//         <div >
//         <Link className={stylesSelected.header} to="/blogs">{blogData[0]?.title || "Default Blog Title"}</Link>
//         </div>
//           {/* <h2> {blogData[0]?.title || "Default Blog Title"}</h2> */}
//         <div className={stylesSelected.pricingimg}>
//           <img src={blogData[0]?.imageUrl || ""} alt="Blog" />
//         </div>
//         <div className={stylesSelected.Rectangle}></div>

        
        
//         <div className={stylesSelected.contentContainer}>
//           <h2  style={{width:'616px'}}>{blogData[1]?.title || "Default Blog Subtitle"}</h2>
//           <p style={{width:'595px'}}>{blogData[1]?.description || "No description available."}</p>
//           {/* <div>  <Link to='/blogDetails'>{blogData[2]?.title || "Read More"}</Link></div> */}
//           {/* <div>  <h5> <a href="/blogDetails"> {blogData[2]?.title || "Read More"}</a></h5></div> */}
//           <div>  <h5> <a 
//                 href="/blogDetails"
                
//               >
                
//                 {blogData[2]?.title || "Read More"}
//                 {arrow}
//               </a>
//             )</h5></div>

//           {/* <a
//                 href="#login"
//                 className={`${styles.loginButton} ${styles.navButton}`}
//                 onClick={() => navigate("/login")}
//               >
//                 {navItems1.find((item) => item.logIn).logIn.name}
//               </a> */}
//         </div>
       
//       </div>
//     </div>
//   );
// }
//nimit code 


function BlogContainer() {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);
  const { language} = useContext(LanguageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state
  const stylesSelected = language === "ar"?styles:stylesEng;
  const arrow = language === "ar"?<img src={LeftNavArrow} alt="" style={{marginRight:'10px'}} /> :
  <img src={RightNavArrow} alt="" style={{marginRight:'10px'}} /> 
  //   <img src={RightNavArrow} alt="" style={{marginRight:'10px'}} /> 
  // Ensure that the API data exists before rendering
  const blogData = homeScreenDetails?.blogData || [];
  const description = homeScreenDetails?.blogData?.description || [];

  return (
    
    <div className="parentcont" style={{marginTop:"150px"}}>
      <div className={stylesSelected.MainContainer}>
        <Link style={{marginbottom:'20px', textAlign:'center', display:'block'}} to="/blogs">{blogData[0]?.title || "Default Blog Title"}</Link>
        <div className={stylesSelected.pricingimg}>
          <img src={blogData[0]?.imageUrl || ""} alt="Blog" />
        </div>  
        <div className={stylesSelected.contentContainer}>
          <h2>{blogData[1]?.title || "Default Blog Subtitle"}</h2>
          <p>{blogData[1]?.description || "No description available."}</p>
          {/* <div>  <Link to='/blogDetails'>{blogData[2]?.title || "Read More"}</Link></div> */}
          <div>  <h5> <a href="/blogDetails"> {blogData[2]?.title || "Read More"}</a>
          {arrow}
          </h5></div>
        </div>
       
      </div>
      </div>
  );
}
//Taruns Code



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

