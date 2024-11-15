
import React, { useContext, useState } from "react";
import styles from "./Carousel.module.css";
import { PricingPageContext } from "../../store/PricingPageContext";

const Carousel = () => {
  const { pricingPageContextDetails, loading, error } = useContext(PricingPageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Fetching the title and success stories data from context
  const successTitle = pricingPageContextDetails?.getPricingCourse1DetailsSec2?.title || "Success Stories";
  const successStories = pricingPageContextDetails?.repeatedSuccessStories|| [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { id: 1, text: "" },
    { id: 2, text: "" },
    { id: 3, text: "" },
    { id: 4, text: "" },
    { id: 5, text: "" },
    { id: 6, text: "" },
  ];

  const nextSlide = () => {
    if (currentIndex < successStories.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Reset to the first card after reaching the end
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(successStories.length - 3); // Reset to the last set of cards
    }
  };

  return (
    <>
      <div className={styles.carouselcontainer}>
        <h2>كيف يحقق المتعلمون مثلك أهدافهم</h2>
        <div className={styles.carousel}>
          <button
            className={`${styles.arrow} ${styles.left}`}
            onClick={prevSlide}
          >
            ◀
          </button>
          <div className={styles.sliderContainer}>
            <div
              className={styles.slider}
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }} // Move cards by index
            >
              {items.map((item) => (
                <div key={item.id} className={styles.card}>
                  <h2>
                    نتعاون مع أكثر من 300 جامعة وشركة رائدةنتعاون مع أكثر من 300
                    جامعة وشركة رائدةنتعاون مع أكثر من 300 جامعة وشركة رائدة
                  </h2>
                  <span className={styles.contentimg}>
                    <p>نتعاون مع أكثر من 300 جامعة وشركة</p>
                    <img src={assests.caraImg} alt="Carousel" />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <button
            className={`${styles.arrow} ${styles.right}`}
            onClick={nextSlide}
          >
            ▶
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;












// import React, { useState } from "react";
// import styles from "./Carousel.module.css";
// import { assests } from "../../assets/assests";

// // Array of carousel items
// const carouselItems = [
//   {
//     id: 1,
//     text: "I was solely focused on photography and didn’t know anything about videography, especially documentary filmmaking. During the course, I entered a national competition and won second place, thanks to God and their efforts.",
//     imgSrc: assests.caraImg,
//      title :"Zakaria",
//   },
//   {
//     id: 2,
//     text:"I was solely focused on photography and didn’t know anything about videography, especially documentary filmmaking. During the course, I entered a national competition and won second place, thanks to God and their efforts.",
//     imgSrc: assests.caraImg,
//      title :"Zakaria",
//   },

//   {
//     id: 3,
//     text: "I was solely focused on photography and didn’t know anything about videography, especially documentary filmmaking. During the course, I entered a national competition and won second place, thanks to God and their efforts.",
//     imgSrc: assests.caraImg,
//      title :"Zakaria",
//   },
//   {
//     id: 4,
//     text: "I was solely focused on photography and didn’t know anything about videography, especially documentary filmmaking. During the course, I entered a national competition and won second place, thanks to God and their efforts.",
//     imgSrc: assests.caraImg,
//      title :"Zakaria",
//   },
//   {
//     id: 5,
//     text: "I was solely focused on photography and didn’t know anything about videography, especially documentary filmmaking. During the course, I entered a national competition and won second place, thanks to God and their efforts.",
//     imgSrc: assests.caraImg,
//      title :"Zakaria",
//   },
//   {
//     id: 6,
//     text: "I was solely focused on photography and didn’t know anything about videography, especially documentary filmmaking. During the course, I entered a national competition and won second place, thanks to God and their efforts.",
//     imgSrc: assests.caraImg,
//     title:"Zakaria",
//   },
// ];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     if (currentIndex < carouselItems.length - 3) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       setCurrentIndex(0); // Reset to first card after reaching end
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     } else {
//       setCurrentIndex(carouselItems.length - 3); // Reset to last set of cards
//     }
//   };

//   return (
//     <div className={styles.carouselcontainer}>
//       <h2>كيف يحقق المتعلمون مثلك أهدافهم</h2>
//       <div className={styles.carousel}>
//         <button
//           className={`${styles.arrow} ${styles.left}`}
//           onClick={prevSlide}
//         >
//           ◀
//         </button>
//         <div className={styles.sliderContainer}>
//           <div
//             className={styles.slider}
//             style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
//           >
//             {carouselItems.map((item) => (
//               <div key={item.id} className={styles.card}>
//                 <h2>{item.text}</h2>
//                 <span className={styles.contentimg}>
//                   <h4>{item.title}</h4>
//                   <img src={item.imgSrc} alt={`Carousel ${item.id}`} />
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//         <button
//           className={`${styles.arrow} ${styles.right}`}
//           onClick={nextSlide}
//         >
//           ▶
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;




// import React, { useState } from "react";
// import styles from "./Carousel.module.css";
// import { assests } from "../../assets/assests";

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const items = [
//     { id: 1, text: "" },
//     { id: 2, text: "" },
//     { id: 3, text: "" },
//     { id: 4, text: "" },
//     { id: 5, text: "" },
//     { id: 6, text: "" },
//   ];

//   const nextSlide = () => {
//     if (currentIndex < items.length - 3) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       setCurrentIndex(0); // Optionally reset to first card after reaching end
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     } else {
//       setCurrentIndex(items.length - 3); // Optionally reset to last set of cards
//     }
//   };

//   return (
//     <>
//       <div className={styles.carouselcontainer}>
//         <h2>كيف يحقق المتعلمون مثلك أهدافهم</h2>
//         <div className={styles.carousel}>
//           <button
//             className={`${styles.arrow} ${styles.left}`}
//             onClick={prevSlide}
//           >
//             ◀
//           </button>
//           <div className={styles.sliderContainer}>
//             <div
//               className={styles.slider}
//               style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }} // Move cards by index
//             >
//               {items.map((item) => (
//                 <div key={item.id} className={styles.card}>
//                   <h2>
//                     نتعاون مع أكثر من 300 جامعة وشركة رائدةنتعاون مع أكثر من 300
//                     جامعة وشركة رائدةنتعاون مع أكثر من 300 جامعة وشركة رائدة
//                   </h2>
//                   <span className={styles.contentimg}>
//                     <p>نتعاون مع أكثر من 300 جامعة وشركة</p>
//                     <img src={assests.caraImg} alt="Carousel" />
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <button
//             className={`${styles.arrow} ${styles.right}`}
//             onClick={nextSlide}
//           >
//             ▶
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Carousel;
