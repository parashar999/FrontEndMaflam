import { useContext } from "react";
import styles from "./VariousCourse.module.css";
import { PricingPageContext } from "../../store/PricingPageContext";

const VariousCourse = () => {
  const { pricingPageContextDetails, loading, error } =
    useContext(PricingPageContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const courses = pricingPageContextDetails?.formattedCourseData || [];
  const buttonTitle =
    pricingPageContextDetails?.getPricingCourse1DetailsSecButton?.title ||
    "Buy now";

  return (
    <div className={styles.maincontainer}>
      <div className={styles.container}>
        <h2>
          {pricingPageContextDetails?.getPricingCourse1DetailsSec4?.title ||
            "Or, choose from our various courses"}
        </h2>
        <div className={styles.cardsContainer}>
          {courses.map((course) => (
            <div key={course.courseId} className={styles.card}>
              <img
                src={course.promoPhoto}
                alt={course.title}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <div className={styles.instructorContainer}>
                  {course.instructors.map((instructor) => (
                    <div key={instructor.name} className={styles.instructor}>
                      <img
                        src={instructor.photoUrl}
                        alt={instructor.name}
                        className={styles.instructorImage}
                      />
                      <p>{instructor.name}</p>
                    </div>
                  ))}
                </div>
                <h3 className={styles.title}>{course.title}</h3>
                <p className={styles.description}>{course.description}</p>
                <div className={styles.footer}>
                  <span>{course.price}</span>
                  <p>{course.estimatedLearningTime?.time}</p>
                  <button className={styles.buyNow}>{buttonTitle}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VariousCourse;

// import { useContext } from "react";
// import styles from "./VariousCourse.module.css";
// import { PricingPageContext } from "../../store/PricingPageContext";
// // import { PricingPageContext } from "../../context/PricingPageContext";

// const VariousCourse = () => {
//   const { pricingPageContextDetails, loading, error } = useContext(PricingPageContext);

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   // Fetching the course data from context
//   const courses = pricingPageContextDetails?.formattedCourseData || [];
//   const buttonTitle = pricingPageContextDetails?.getPricingCourse1DetailsSecButton?.title || "Buy now";

//   return (
//     <div className={styles.maincontainer}>
//       <div className={styles.container}>
//         <h2>Or, choose from our various courses</h2>
//         <div className={styles.cardsGrid}>
//           {courses.map((course) => (
//             <div key={course.courseId} className={styles.card}>
//               <img
//                 src={course.promoPhoto}
//                 alt={course.title}
//                 className={styles.cardImage}
//               />
//               <div className={styles.cardContent}>
//                 <div className={styles.imageflex}>
//                   {course.instructors.map((instructor) => (
//                     <div key={instructor.name}>
//                       <img src={instructor.photoUrl} alt={instructor.name} />
//                       <p className={styles.instructor}>{instructor.name}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <h3 className={styles.title}>{course.title}</h3>
//                 <p className={styles.description}>{course.description}</p>
//                 <div className={styles.footer}>
//                   <p>{course.para}</p>
//                   <img src={course.icon} alt="" />
//                   <span>{course.price}</span>
//                   <p>{course.duration}</p>
//                   <button className={styles.buyNow}>{buttonTitle}</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VariousCourse;
// import { VariousCard } from "../../assets/assests";

// import styles from "./VariousCourse.module.css";
// import { VariousCard } from "../../assets/assests";
// const VariousCourse = () => {
//   return (
//     <div className={styles.maincontainer}>
//     <div className={styles.container}>
//       <h2>Or, choose from our various courses.</h2>
//       <div className={styles.cardsGrid}>
// {VariousCard.map((course) => (
//   <div key={course.id} className={styles.card}>
//     <img src={course.imageUrl} alt={course.title} className={styles.cardImage} />
//     <div className={styles.cardContent}>
//       <div className={styles.imageflex}>  <img src={course.image} alt="" />
//       <p className={styles.instructor}>{course.instructor}</p></div>
//       <h3 className={styles.title}>{course.title}</h3>
//       <p className={styles.description}>{course.description}</p>
//       <div className={styles.footer}>
//         <p> {course.para}</p>
//         <span>{course.price}</span>
//         <img src={course.icon} alt="" />
//         <p>{course.duration}</p>
//         <button className={styles.buyNow}>Buy now</button>
//       </div>
//     </div>
//   </div>
// ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default VariousCourse;
