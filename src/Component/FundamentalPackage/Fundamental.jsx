
// import styles from "./Fundamental.module.css";
// import Book from "../../assets/Rectangle 88 (1).png";
// import { CiCircleCheck } from "react-icons/ci";

// function Fundamental() {
//   return (
//     <div>
//       <div className={styles.Fundamental}>
//         <div className={styles.secondcontainer}>
//           <div className={styles.content}>
//             <p>Subscribe To The Full Filmmaking Fundamentals Package</p>
//           </div>
//           <div className={styles.subscribe}>
//             <div className={styles.imgcontainer}>
//               <img src={Book} alt="Rectangle" />
//               <div className={styles.ctn}>
//                 <div className={styles.item}>
//                   <CiCircleCheck className={styles.checkico} />
//                   <p>Lifetime access to over 600 lessons</p>
//                 </div>

//                 <div className={styles.item}>
//                   <CiCircleCheck className={styles.checkico} />
//                   <p>Over 30 hours of content in Arabic</p>
//                 </div>

//                 <div className={styles.item}>
//                   <CiCircleCheck className={styles.checkico} />
//                   <p>Access to over 70 educational resources</p>
//                 </div>

//                 <div className={styles.item}>
//                   <CiCircleCheck className={styles.checkico} />
//                   <p>
//                     Includes all specialized courses plus two exclusive ones
//                   </p>
//                 </div>

//                 <div className={styles.item}>
//                   <button className={styles.checkicobuttun}>Subscribe</button>
//                   <p>
//                     <b>2.200</b>
//                     <span>SAR</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Fundamental;


import { useContext } from "react";
import styles from "./Fundamental.module.css";
import { CiCircleCheck } from "react-icons/ci";
import { HomePageContext } from "../../store/HomePageContext.jsx";

function Fundamental() {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  // Extract the relevant data from homeScreenDetailsSec7
  const sectionData = homeScreenDetails?.homeScreenDetailsSec7 || [];
  const title = sectionData[0]?.title || "Subscribe To The Full Filmmaking Fundamentals Package";
  const imageUrl = sectionData[0]?.imageUrl || ""; // Use context imageUrl or a fallback
  const categories = sectionData[0]?.category || [
    
  ];
  const subscribeText = sectionData[1]?.title || "Subscribe";
  const price = sectionData[2]?.title || "2.200 SAR";

  return (
    <div className={styles.Fundamental}>
      <div className={styles.secondcontainer}>
        <div className={styles.content}>
          <p>{title}</p>
        </div>
        <div className={styles.subscribe}>
          <div className={styles.imgcontainer}>
            {/* Use dynamic imageUrl from the context */}
            <img src={imageUrl} alt="Filmmaking Package" />
            <div className={styles.ctn}>
              {categories.map((item, index) => (
                <div key={index} className={styles.item}>
                  <CiCircleCheck className={styles.checkico} />
                  <p>{item}</p>
                </div>
              ))}
              <div className={styles.item}>
                <button className={styles.checkicobuttun}>{subscribeText}</button>
                <p>
                  <b>{price}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fundamental;
