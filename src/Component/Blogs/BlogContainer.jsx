

// import { useContext } from "react";
// import styles from "./BlogContainer.module.css";
// import stylesEng from "./BlogContainerEng.module.css";
// import { Link } from 'react-router-dom';
// import { HomePageContext } from "../../store/HomePageContext.jsx";
// import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";
// import RightNavArrow from "../../assets/rightNavArrow.png";
// import LeftNavArrow from "../../assets/leftNavArrow.png";


// function BlogContainer() {
//   const { homeScreenDetails, loading, error } = useContext(HomePageContext);
//   const { language} = useContext(LanguageContext);

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state
//   const stylesSelected = language === "ar"?styles:stylesEng;
//   const arrow = language === "ar"?<img src={LeftNavArrow} alt="" style={{marginRight:'10px'}} /> :
//   <img src={RightNavArrow} alt="" style={{marginRight:'10px'}} /> 
//   //   <img src={RightNavArrow} alt="" style={{marginRight:'10px'}} /> 
//   // Ensure that the API data exists before rendering
//   const blogData = homeScreenDetails?.blogData || [];
//   const description = homeScreenDetails?.blogData?.description || [];

//   return (
    
//     <div className="parentcont" style={{marginTop:"150px"}}>
//       <div className={stylesSelected.MainContainer}>
//         <Link style={{marginbottom:'20px', textAlign:'center', display:'block'}} to="/blogs">{blogData[0]?.title || "Default Blog Title"}</Link>
//         <div className={stylesSelected.pricingimg} >
//           <img src={blogData[0]?.imageUrl || ""} alt="Blog" />
//           <div className={stylesSelected.contentContainer}>
//           <h2 >{blogData[1]?.title || "Default Blog Subtitle"}</h2>
//           <p >{blogData[1]?.description || "No description available."}</p>
//           {/* <div>  <Link to='/blogDetails'>{blogData[2]?.title || "Read More"}</Link></div> */}
//           <div> 
//              <h5> 
//               <a href="/blogs"> {blogData[2]?.title || "Read More"} <span className={stylesSelected.continuereadingarrow}> → </span></a>
//           </h5></div>
//         </div>
//         </div> 
//       </div>
//       </div>
//   );
// }
// //Taruns Code



// export default BlogContainer;



// import { useContext } from "react";
// import styles from "./BlogContainer.module.css";
// import stylesEng from "./BlogContainerEng.module.css";
// import { Link } from "react-router-dom";
// import { HomePageContext } from "../../store/HomePageContext.jsx";
// import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";
// import RightNavArrow from "../../assets/rightNavArrow.png";
// import LeftNavArrow from "../../assets/leftNavArrow.png";

// function BlogContainer() {
//   const { homeScreenDetails, loading, error } = useContext(HomePageContext);
//   const { language } = useContext(LanguageContext);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading data</p>;

//   const stylesSelected = language === "ar" ? styles : stylesEng;
//   const arrow = (
//     <img
//       src={language === "ar" ? LeftNavArrow : RightNavArrow}
//       alt="Navigation Arrow"
//       style={{ marginRight: "10px" }}
//     />
//   );

//   // Fetch blog data and ensure proper structure
//   const blogData = homeScreenDetails?.blogData || [];
//   const primaryBlog = blogData[0] || {}; // Main blog entry
//   const continueReading = blogData[1] || {}; // "Continue reading" entry
//   const maflamShowsTitle = homeScreenDetails?.maflamShowsTitle?.title || "Maflam Shows";

//   return (
//     <div className="parentcont" style={{ marginTop: "150px" }}>
//       <div className={stylesSelected.MainContainer}>
//         {/* Blog Title */}
//         <Link
//           style={{
//             marginBottom: "20px",
//             textAlign: "center",
//             display: "block",
//           }}
//           to="/blogs"
//         >
//           {primaryBlog.title || "Default Blog Title"}
//         </Link>

//         {/* Blog Image and Description */}
//         <div className={stylesSelected.pricingimg}>
//           <img src={primaryBlog.imageUrl || ""} alt="Blog" />
//           <div className={stylesSelected.contentContainer}>
//             <h2>{primaryBlog.subTitle || "Default Blog Subtitle"}</h2>
//             <p>{primaryBlog.description || "No description available."}</p>

//             {/* Continue Reading Section */}
//             <div>
//               <h5>
//                 <a href="/blogs">
//                   {continueReading.title || "Read More"}{" "}
//                   <span className={stylesSelected.continuereadingarrow}>→</span>
//                 </a>
//               </h5>
//             </div>
//           </div>
//         </div>

//         {/* Additional Section */}
//         <div className={stylesSelected.additionalContent}>
//           <h3>{maflamShowsTitle}</h3>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BlogContainer;

import { useContext } from "react";
import styles from "./BlogContainer.module.css";
import stylesEng from "./BlogContainerEng.module.css";
import { Link } from "react-router-dom";
import { HomePageContext } from "../../store/HomePageContext.jsx";
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";
import RightNavArrow from "../../assets/rightNavArrow.png";
import LeftNavArrow from "../../assets/leftNavArrow.png";

function BlogContainer() {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);
  const { language } = useContext(LanguageContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const stylesSelected = language === "ar" ? styles : stylesEng;
  const arrow = (
    <img
      src={language === "ar" ? LeftNavArrow : RightNavArrow}
      alt="Navigation Arrow"
      style={{ marginRight: "10px" }}
    />
  );

  // Use the patched blogData
  const blogData = homeScreenDetails?.blogData || [];
  const primaryBlog = blogData[0] || {}; // Main blog
  const continueReading = blogData[1] || {}; // Continue reading section

  return (
    <div className="parentcont" style={{ marginTop: "150px" }}>
      <div className={stylesSelected.MainContainer}>
        {/* Blog Title */}
        <Link
          style={{
            marginBottom: "20px",
            textAlign: "center",
            display: "block",
          }}
          to="/blogs"
        >
          {primaryBlog.title || "Default Blog Title"}
        </Link>

        {/* Blog Image and Content */}
        <div className={stylesSelected.pricingimg}>
          <img
            src={primaryBlog.imageUrl || ""}
            alt={primaryBlog.title || "Blog"}
          />
          <div className={stylesSelected.contentContainer}>
            <h2>{primaryBlog.title || "Default Blog Subtitle"}</h2>
            <p>{primaryBlog.subTitle || "No description available."}</p>

            {/* Continue Reading Section */}
            <div>
              <h5>
                <Link to="/blogs">
                  {continueReading.title || "Continue reading"}{" "}
                  <span className={stylesSelected.continuereadingarrow}>→</span>
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogContainer;


