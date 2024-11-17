import { useContext } from "react";
import stylesArabic from "./ShowsPodcast.module.css";
import styles from "./ShowsPodcastEnglish.module.css";
import { CiCircleCheck } from "react-icons/ci";
import { HomePageContext } from "../../store/HomePageContext.jsx";
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";
import { useNavigate } from "react-router-dom";
import podcastImg from "../../assets/podcast.png"
import pdlogo from "../../assets/pdlogo.png"

function Podcast() {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const stylesSelected = language === "ar" ? stylesArabic : styles;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  // Extract the relevant data from homeScreenDetailsSec7
  const sectionData = homeScreenDetails?.homeScreenDetailsSec7 || [];
  const title =
    sectionData[0]?.title ||
    "Subscribe 60 The Full Filmmaking Fundamentals Package";
  const imageUrl = sectionData[0]?.imageUrl || ""; // Use context imageUrl or a fallback
  const categories = sectionData[0]?.category || [];
  const subscribeText = sectionData[1]?.title || "Subscribe";
  const price = sectionData[2]?.title || "2.200 SAR";
  const Subscribe = () => {
    navigate("/prc");
  };

  return (
    <>
    <h1 className={stylesSelected.title}>Maflam Podcast</h1>
    <div className={stylesSelected.parentfundamental}>
      <div className={stylesSelected.Fundamental}>
        <div className={stylesSelected.secondcontainer}>
          <div className={stylesSelected.content}>
            {/* <p style={{ maxWidth: "100%", textAlign: "center" }}>{title}</p> */}
          
            <div className={stylesSelected.imgcontainer}>
              <img
                src={podcastImg}
                alt="Filmmaking Package"
                className={styles.imgcontainer}
              />
            </div>
          </div>
          <div className={stylesSelected.subscribe}>
            <div className={stylesSelected.ctn}>
            <img src={pdlogo} alt="" />
             <p>
             Maflam Podcast is hosted by Khairia Abu Laban, featuring discussions with influential figures in the Saudi film industry, such as Faris Qudus, Fatima Al Banawi, Ahmed Al Mulla, and Imad Iskandar. The podcast delves into the details of the industry, behind-the-scenes secrets of films and festivals, and the future of cinema in the Kingdom. 
              </p> 
              <h6>Watch the full episodes</h6>
              <div>
              <svg width="118" height="33" viewBox="0 0 118 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="33" height="33" rx="16.5" fill="#39FFFB"/>
<g clip-path="url(#clip0_12151_2576)">
<path d="M22.024 10.9727H10.9767C9.88512 10.9727 9 11.869 9 12.9738V19.9709C9 21.0763 9.88512 21.972 10.9767 21.972H22.024C23.1149 21.972 24 21.0763 24 19.9709V12.9738C24 11.869 23.1149 10.9727 22.024 10.9727ZM18.2744 16.9551L15.2023 18.51C14.8475 18.6897 14.4307 18.429 14.4307 18.0279V14.9181C14.4307 14.5169 14.8481 14.2563 15.2023 14.4353L18.2744 15.9902C18.6667 16.1888 18.6667 16.7565 18.2744 16.9551Z" fill="#061C2B"/>
</g>
<rect x="42" width="33" height="33" rx="16.5" fill="#39FFFB"/>
<g clip-path="url(#clip1_12151_2576)">
<path d="M66.9735 24.1711C66.6351 24.1122 66.312 24.0561 65.9366 23.991C65.9366 23.8299 65.9366 23.6688 65.9366 23.5087C65.9366 21.0211 65.9384 18.5336 65.9366 16.0452C65.9339 12.0257 63.0875 8.70473 59.1337 8.10389C54.8207 7.44966 50.691 10.5688 50.1386 14.8978C49.5728 19.3353 52.5744 23.2978 57.0101 23.8688C57.8856 23.9819 58.8241 23.9159 59.6878 23.724C60.5605 23.5304 61.3339 23.7548 62.2725 23.8978C61.4377 24.3955 60.6453 24.6615 59.8178 24.8226C54.6032 25.8415 49.793 22.373 49.0764 17.0849C48.46 12.5396 51.6909 8.04055 56.1934 7.17276C61.1327 6.22082 65.7687 9.28477 66.8093 14.2119C66.9392 14.8263 66.9844 15.4679 66.9889 16.0977C67.0087 18.6911 66.997 21.2845 66.9961 23.877C66.9961 23.9656 66.9826 24.0543 66.9735 24.1711Z" fill="#061C2B"/>
<path d="M65.3259 23.8517C65.0037 23.8055 64.696 23.7621 64.3106 23.7069C64.3106 23.534 64.3106 23.3612 64.3106 23.1884C64.3106 20.852 64.3106 18.5146 64.3106 16.1782C64.3088 12.8835 62.1726 10.2666 58.93 9.76439C55.3751 9.21331 52.2372 11.6818 51.7851 15.0851C51.3113 18.6504 53.5241 21.6139 57.0528 22.2401C58.0582 22.4183 59.0591 22.3115 60.0319 21.9885C60.1583 21.9469 60.2837 21.9025 60.4236 21.8555V22.9884C57.7252 23.7947 55.2488 23.4046 53.1406 21.5216C50.8862 19.5082 50.1371 16.9248 50.9358 14.021C51.7372 11.1081 53.7353 9.30561 56.691 8.75001C61.1998 7.90123 65.3078 11.3353 65.3557 15.904C65.3828 18.4667 65.3647 21.0293 65.3647 23.5929C65.3647 23.6653 65.3439 23.7376 65.3268 23.8526L65.3259 23.8517Z" fill="#061C2B"/>
<path d="M60.4243 20.0257C60.4424 21.3912 60.7303 21.2166 59.3017 21.565C56.1682 22.3278 53.0583 20.2981 52.4202 17.1292C51.7858 13.9811 53.8994 10.8991 57.0662 10.3543C60.4622 9.76976 63.5848 12.2844 63.7049 15.7999C63.7906 18.3146 63.7256 20.8338 63.7256 23.3503C63.7256 23.4082 63.7067 23.4652 63.6886 23.5666C63.4007 23.5177 63.1101 23.5077 62.8556 23.4055C62.7564 23.3657 62.6941 23.1186 62.6941 22.9657C62.6842 20.6899 62.6923 18.4141 62.686 16.1374C62.6796 13.6933 61.1563 11.8492 58.7728 11.3832C55.9914 10.8393 53.2072 13.2726 53.3615 16.1121C53.5537 19.652 56.9958 21.6844 60.1753 20.1361C60.2411 20.1045 60.3088 20.0764 60.4243 20.0248V20.0257Z" fill="#061C2B"/>
<path d="M60.4404 17.818C60.4404 18.3175 60.4594 18.7202 60.4287 19.1202C60.4197 19.2369 60.2879 19.3735 60.1769 19.4477C57.8575 20.9824 54.5508 19.5835 54.0211 16.8498C53.5807 14.5785 54.9867 12.4195 57.1888 11.9824C59.4387 11.5363 61.5577 12.9678 62.0171 15.2545C62.0667 15.5033 62.0766 15.7639 62.0766 16.0191C62.0812 18.3266 62.0803 20.634 62.0784 22.9415C62.0784 23.0447 62.0595 23.1469 62.0478 23.2636C61.7193 23.2021 61.4106 23.1433 61.0325 23.0718C61.0325 22.9098 61.0325 22.7343 61.0325 22.5596C61.0325 20.4178 61.0415 18.2768 61.0298 16.1349C61.0207 14.5668 60.1381 13.4139 58.6959 13.0429C57.1013 12.633 55.4669 13.6284 55.0553 15.2599C54.6483 16.877 55.6329 18.5428 57.2348 18.9283C58.4821 19.2278 59.5091 18.8306 60.4395 17.8198L60.4404 17.818Z" fill="#061C2B"/>
</g>
<rect x="85" width="33" height="33" rx="16.5" fill="#39FFFB"/>
<g clip-path="url(#clip2_12151_2576)">
<path d="M101.946 25.9975C96.4992 26.0678 91.9716 21.5084 92.0001 16.0051C92.0291 10.4375 96.4588 5.98006 102.029 5.99982C107.644 6.02004 112.005 10.5551 112 16.0414C111.996 21.5438 107.463 26.1161 101.945 25.9975H101.946ZM100.698 11.2453C100.285 11.2453 99.8714 11.2292 99.4593 11.2485C98.172 11.3087 96.9026 11.4903 95.6686 11.874C95.1922 12.0219 94.8871 12.6175 95.0337 13.0775C95.1931 13.5779 95.7747 13.9262 96.2479 13.7713C97.0754 13.5002 97.9285 13.3702 98.7881 13.2875C100.472 13.1262 102.151 13.1946 103.816 13.4878C105.248 13.7401 106.624 14.1629 107.895 14.8875C108.411 15.1816 108.986 15.0465 109.273 14.5617C109.563 14.0696 109.411 13.5117 108.898 13.2015C107.802 12.538 106.611 12.1079 105.377 11.7977C103.843 11.4121 102.281 11.2269 100.698 11.2458L100.698 11.2453ZM100.429 14.695C98.9314 14.6849 97.6092 14.8567 96.3201 15.2552C95.8515 15.3999 95.5873 15.8434 95.7044 16.2606C95.8354 16.7256 96.27 16.9747 96.7671 16.8437C97.6345 16.6158 98.5092 16.443 99.4069 16.3966C101.998 16.2629 104.466 16.6866 106.733 18.0165C106.948 18.1424 107.173 18.192 107.415 18.1047C107.737 17.9889 107.943 17.7642 107.993 17.4255C108.047 17.0496 107.869 16.7734 107.558 16.5818C106.494 15.9279 105.346 15.4721 104.14 15.1642C102.875 14.8411 101.588 14.6674 100.429 14.6945V14.695ZM100.254 17.9416C99.615 17.9976 98.9728 18.0335 98.3374 18.1162C97.793 18.1874 97.2545 18.3083 96.7152 18.4149C96.2865 18.4999 96.0325 18.8441 96.1106 19.2163C96.1951 19.6193 96.5737 19.8105 97.012 19.7383C97.9078 19.5903 98.8055 19.4185 99.7092 19.3606C101.844 19.2236 103.882 19.5811 105.742 20.7139C105.861 20.7865 106.037 20.8099 106.179 20.7934C106.465 20.7603 106.709 20.5057 106.745 20.2351C106.785 19.9285 106.65 19.6845 106.387 19.5471C105.834 19.2572 105.282 18.9557 104.703 18.7246C103.279 18.1562 101.786 17.9457 100.255 17.9416H100.254Z" fill="#061C2B"/>
</g>
<defs>
<clipPath id="clip0_12151_2576">
<rect width="15" height="11" fill="white" transform="translate(9 10.9727)"/>
</clipPath>
<clipPath id="clip1_12151_2576">
<rect width="18" height="18" fill="white" transform="translate(49 7)"/>
</clipPath>
<clipPath id="clip2_12151_2576">
<rect width="20" height="20" fill="white" transform="translate(92 6)"/>
</clipPath>
</defs>
</svg>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );

}

export default Podcast;
