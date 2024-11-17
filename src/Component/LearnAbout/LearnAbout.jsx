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
    language === "ar" ? "الشروط والأحكام  " : "Terms and Conditions";
  const currencyText = language === "ar" ? "ر.س" : "SAR";

  const renderCourseCategory = (categories) => {
    return categories.map((category, index) => (
      <button key={index} className={stylesSelected.rigthcheck}>
        <FaRegCheckCircle className={stylesSelected.rigthclick} /> {category}
      </button>
    ));
  };

  return (
    <div className={stylesSelected.parentmain}>
      <div className={stylesSelected.mainConatiner}>
        <h1 style={{ zIndex: "1" }}>
          {packageData[0]?.title || "Default Title"}
        </h1>
        <h2>{packageData[1]?.title || "Default Title"}</h2>
        <p>
          {packageData[1]?.description.substring(0, 39) ||
            "Default description"}&nbsp;
          <span className={stylesSelected.para1}>
            {packageData[1]?.description.substring(40) || ""}
          </span>
        </p>

        <div className={stylesSelected.contentConatiner}>
          <div className={stylesSelected.firstcard}>
            <h4>{packageData[2]?.title || "Default Title"}</h4>
            <div
              className={`${stylesSelected.breakline} ${
                language === "ar" ? stylesSelected.flipLine : ""
              }`}
            ></div>
            <p>
              {packageData[3]?.title}{" "}
              <span className={stylesSelected.currencyText}>{currencyText}</span>
            </p>

            <button className={stylesSelected.subscribebutton}>
              {packageData[4]?.title || "Subscribe"}
            </button>
            <br />
            <div className={stylesSelected.buttondiv}>
              <br />
              {renderCourseCategory(packageData[2]?.nameOfCourseCategory || [])}
            </div>
          </div>

          <div className={stylesSelected.secondcard}>
            <h4>{packageData[5]?.title || "Traditional Education"}</h4>
            <div
              className={`${stylesSelected.breakline} ${
                language === "ar" ? stylesSelected.flipLine : ""
              }`}
            ></div>
            <p>
              {packageData[6]?.title}{" "}
              <span className={stylesSelected.currencyText}>{currencyText}</span>
            </p>

            <div className={stylesSelected.buttondiv}>
              {renderCourseCategory(packageData[5]?.nameOfCourseCategory || [])}
            </div>
          </div>
        </div>

        <p className={stylesSelected.para}>
          {packageData[7]?.description} &nbsp;
          <Link to={"/terms&condition"} className={stylesSelected.link}> 
            {termsText}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LearnAbout;
