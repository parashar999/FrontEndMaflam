// import React from "react";
// import { FaRegCheckCircle } from "react-icons/fa";
// import { Link } from "react-router-dom";

// import styles from "./LearnAbout.module.css";

// function LearnAbout() {
//   return (
//     <div>
//       <div className={styles.mainConatiner}>
//         <h1>Learn About The World Of Cinema</h1>
//         <h2>The prices of maflam courses compared to traditional education</h2>
//         <p>
//           The registration is easy and convenient,{" "}
//           <span className={styles.para1}>
//             subscribers have more lifetime access to our filmmaking content
//           </span>
//         </p>

//         <div className={styles.contentConatiner}>
//           <div className={styles.firstcard}>
//             <h4>The full filmmaking fundamental Package</h4>
//             <div className={styles.breakline}></div>
//             <p>
//               2,200 <span>SR</span>
//             </p>

//             <button className={styles.subscribebutton}>Subscribe</button>
//             <br></br>
//             <div className={styles.buttondiv}>
//               <br></br>
//               <button className={styles.rigthcheck}>
//                 <FaRegCheckCircle className={styles.rigthclick} /> 30+ Hours
//               </button>

//               <button className={styles.rigthcheck}>
//                 <FaRegCheckCircle className={styles.rigthclick} /> Flexible and
//                 Focused Learning
//               </button>

//               <button className={styles.rigthcheck}>
//                 <FaRegCheckCircle className={styles.rigthclick} /> Available for
//                 a Lifetime
//               </button>
//             </div>
//           </div>
//           <div className={styles.secondcard}>
//             <h4>Traditional Education</h4>
//             <div className={styles.breakline}></div>
//             <p>
//               +240,000 <span>SR</span>
//             </p>

//             <button className={styles.rigthcheck}>
//               <FaRegCheckCircle className={styles.rigthclick} /> At least a year
//             </button>

//             <button className={styles.rigthcheck}>
//               <FaRegCheckCircle className={styles.rigthclick} /> Interrupted and
//               Mandatory Learning
//             </button>

//             <button className={styles.rigthcheck}>
//               <FaRegCheckCircle className={styles.rigthclick} /> Limited-Time
//               Access
//             </button>
//           </div>
//         </div>
//         <p className={styles.para}>
//           Prices may vary based on country, currency exchange rates, bank fees,
//           and subscription plan{" "}
//           <Link to={"/to"} className={styles.link}>
//             Terms & Conditions
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default LearnAbout;
import React, { useContext } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HomePageContext } from "../../store/HomePageContext.jsx";
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";
import stylesSelected from "./LearnAboutEng.module.css";


function LearnAbout() {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);
  const { language } = useContext(LanguageContext);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const packageData = homeScreenDetails?.packageData || [];
  const termsText =
    language === "ar" ? "الشروط والأحكام  " : " terms and condition";
  const currencyText = language === "ar" ? "ر.س" : "SAR";

  const renderCourseCategory = (categories) => {
    return categories.map((category, index) => (
      <button key={index} className={stylesSelected.rigthcheck}>
        <FaRegCheckCircle className={stylesSelected.rigthclick} /> {category}
      </button>
    ));
  };

  return (
    <div>
      <div className={stylesSelected.mainConatiner} >
        <h1 style={{zIndex:'1'}}>{packageData[0]?.title || "Default Title"}</h1>
        <h2>{packageData[1]?.title || "Default Title"}</h2>
        <p>
          {packageData[1]?.description.substring(0, 39) ||
            "Default description"}
          <span className={stylesSelected.para1}>
            {packageData[1]?.description.substring(40) || ""}
          </span>
        </p>

        <div className={stylesSelected.contentConatiner}>
          <div className={stylesSelected.firstcard}>
            <h4>{packageData[2]?.title || "Default Title"}</h4>
            <div className={stylesSelected.breakline}></div>
            <p>
              {packageData[3]?.title} <span>{currencyText}</span>
            </p>

            <button className={stylesSelected.subscribebutton}>
              {packageData[4]?.title || "Subscribe"}
            </button>
            <br></br>
            <div className={stylesSelected.buttondiv}>
              <br></br>
              {renderCourseCategory(packageData[2]?.nameOfCourseCategory || [])}
            </div>
          </div>

          <div className={stylesSelected.secondcard}>
            <h4>{packageData[5]?.title || "Traditional Education"}</h4>
            <div className={stylesSelected.breakline}></div>
            <p>
              {packageData[6]?.title} <span>{currencyText}</span>
            </p>

            <div className={stylesSelected.buttondiv}>
              {renderCourseCategory(packageData[5]?.nameOfCourseCategory || [])}
            </div>
          </div>
        </div>

        <p className={stylesSelected.para}>
          {packageData[7]?.description}
          <Link to={"/terms&condition"} className={stylesSelected.link}>
            {termsText}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LearnAbout;
