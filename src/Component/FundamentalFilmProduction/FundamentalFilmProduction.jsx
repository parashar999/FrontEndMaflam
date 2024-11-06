// import React ,{ useState } from 'react';
// import styles from './FundamentalFilmProduction.module.css';
// import filmvideoimg from '../../assets/filmvideoimg.png'; 
// import { FaShoppingCart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
// import { CiClock2 } from "react-icons/ci";
// import { FilmProductionlearnData } from '../../assets/assests';


   

// const FundamentalFilmProduction = () => {

//     const [isOpen, setIsOpen] = useState(false);
  
//     const toggleContent = () => {
//       setIsOpen(!isOpen);
//     };
//   return (
//     <> 
//       <div className={styles.coursedetailsheader}>
//         <div className={styles.videoTheory}> 
         
//          <div className={styles.headerText}>
//              <h6> Fundamentals of Film Production</h6>
//              <p> This course is designed for imaginative writers who aspire to bring their ideas and stories to the screen. It focuses on learning how to craft a professional screenplay and understanding the key elements of a successful script that producers are looking for.</p>
//              <div className={styles.lessonsprice}>
//                   <div className={styles.riyals}>750 riyals <CiClock2 className={styles.icon} /></div>
//                   <div className={styles.lessons}>54 lessons <CiClock2 className={styles.icon} /></div>
//                   <div className={styles.time}>+6 hours <CiClock2 className={styles.icon} /></div>
//              </div>
//              <div className={styles.maincontainer}>
//                <div className={styles.collapsible}>
//                      <div className={styles.header}>
//                             {/* Toggle button */}
//                             <div  onClick={toggleContent} className={styles.toggleButton} style={{ cursor: 'pointer', color: '#39FFFb' }} >
//                                  {isOpen ? '-' : '+'}
//                               </div>
//                             {/* Title */}
//                             <h5 className={styles.toggle}>What you will learn</h5>
//                             <hr className={styles.line} />
//                       </div>
//                              {/* Content collapses/expands when clicked */}
//                              {isOpen && (
//                             <div>
//                          {FilmProductionlearnData.map((item, index) => (
//                          <p key={index} className={styles.answer}  style={{ margin: '0', padding: '0', lineHeight: '145%',fontSize: '20px' }}>{item}</p>
//                          ))}
//                      </div> 
//                    )}
//                  </div>
//              </div>
//          </div>

//          <div className={styles.courseVideo}> 
//               <img src={filmvideoimg} alt="Video" />
//               <div className={styles.videocontent}>
//                   <p> A berife summary of the contetnt and its contents:Our visions to becomea leading online platform for all Arab students who... </p>
//                   <button className={styles.subcribebtn}> <FaShoppingCart /> &nbsp;&nbsp;Subcribe </button>
//                   <button className={styles.addtowishlist}> <FaHeart />&nbsp;&nbsp;Add to whishlist </button>
//               </div>
//           </div>
//         </div>
//       </div>
    
//     </>
//   );
// }

// export default FundamentalFilmProduction; 


import React, { useState, useContext } from 'react';
import styles from './FundamentalFilmProduction.module.css';
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { FilmProductionContext } from '../../store/FilmProductionContext';

const FundamentalFilmProduction = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { filmproductionScreenDetails, loading, error } = useContext(FilmProductionContext);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data: {error.message}</p>;

    const { courseData, lessonData } = filmproductionScreenDetails || {};
    const mainCourse = courseData ? courseData[0] : null;
    const summaryData = courseData ? courseData[1] : null;
    const learningObjectives = courseData ? courseData[2] : null;

    // Dynamic title for "What you will learn" section, falling back to a default if not available
    const learningTitle = learningObjectives?.title || "What you will learn";

    return (
        <> 
            <div className={styles.coursedetailsheader}>
                <div className={styles.videoTheory}> 
                    <div className={styles.headerText}>
                        <h6>{mainCourse?.title || 'Fundamentals of Film Production'}</h6>
                        <p>{mainCourse?.description || 'Course description not available.'}</p>
                        <div className={styles.lessonsprice}>
                            <div className={styles.riyals}>{mainCourse?.price || '750 SAR'} <CiClock2 className={styles.icon} /></div>
                            <div className={styles.lessons}>{mainCourse?.lessons || '54'} lessons <CiClock2 className={styles.icon} /></div>
                            <div className={styles.time}>{mainCourse?.hours || '+6 hours'} <CiClock2 className={styles.icon} /></div>
                        </div>
                        <div className={styles.maincontainer}>
                            <div className={styles.collapsible}>
                                <div className={styles.header}>
                                    <div onClick={toggleContent} className={styles.toggleButton} style={{ cursor: 'pointer', color: '#39FFFb' }}>
                                        {isOpen ? '-' : '+'}
                                    </div>
                                    {/* Dynamic title from API */}
                                    <h5 className={styles.toggle}>{learningTitle}</h5>
                                    <hr className={styles.line} />
                                </div>
                                {isOpen && (
                                    <div>
                                        {learningObjectives?.courseObjective?.map((item, index) => (
                                            <p key={index} className={styles.answer} style={{ margin: '0', padding: '0', lineHeight: '145%', fontSize: '20px' }}>
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.courseVideo}> 
                        <img src={mainCourse?.photo || ''} alt="Video" />
                        <div className={styles.videocontent}>
                            <p>{summaryData?.summary || 'No summary available.'}</p>
                            <button className={styles.subcribebtn}><FaShoppingCart /> &nbsp;&nbsp;{summaryData?.buttonText || 'Subscribe'}</button>
                            <button className={styles.addtowishlist}><FaHeart />&nbsp;&nbsp;{summaryData?.wishlist || 'Add to wishlist'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FundamentalFilmProduction;
