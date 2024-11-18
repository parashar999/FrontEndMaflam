

import { useContext } from "react";
import styles from "./BlogContainer.module.css";
import stylesEng from "./BlogContainerEng.module.css";
import { Link } from 'react-router-dom';
import { HomePageContext } from "../../store/HomePageContext.jsx";
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";
import RightNavArrow from "../../assets/rightNavArrow.png";
import LeftNavArrow from "../../assets/leftNavArrow.png";


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
        <div className={stylesSelected.pricingimg} >
          <img src={blogData[0]?.imageUrl || ""} alt="Blog" />
          <div className={stylesSelected.contentContainer}>
          <h2 >{blogData[1]?.title || "Default Blog Subtitle"}</h2>
          <p >{blogData[1]?.description || "No description available."}</p>
          {/* <div>  <Link to='/blogDetails'>{blogData[2]?.title || "Read More"}</Link></div> */}
          <div> 
             <h5> 
              <a href="/blogs"> {blogData[2]?.title || "Read More"} <span className={stylesSelected.continuereadingarrow}> → </span></a>
          </h5></div>
        </div>
        </div> 
      </div>
      </div>
  );
}
//Taruns Code



export default BlogContainer;


