// import React from "react";
// import styles from "./EbooksCards.module.css";
// import { ebooks } from "../../assets/assests";
// import { EbookPageContext } from "../../store/ebookPageContext";

// const EbooksCards = () => {
//   const { ebookPageContextDetails, loading, error } = useContext(EbookPageContext);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading data</p>;

//   const coursesData = homeScreenDetails?.coursesData || [];
//   const viewAllCoursesTitle =
//     homeScreenDetails?.viewAllCourses?.title || "View All Courses";

//   return (
//     <div className={styles.container}>
//      <div>
//      <h1 className={styles.containerHeader}>Dive deep into film industry knowledge and download the guides for free.</h1>    
//     </div>   

//       <div className={styles.cardsContainer}>
//         {ebooks.map((ebook) => (
//           <div key={ebook.id} className={styles.card}>
//             <img src={ebook.imgSrc} alt={ebook.title} className={styles.image} />
//             <div className={styles.content}>
//              <p>E-Booklet</p>
//               <h3>{ebook.title}</h3>
//               <div className={styles.btn}>
//               <button className={ebook.comingSoon ? styles.soonButton1 : styles.downloadButton}>
//                 {ebook.comingSoon ? "Soon" : ebook.buttonText}
//               </button>
//               <svg className={ebook.comingSoon ? styles.soonButton :styles.downloadsvg } width="42" height="42" viewBox="0 0 42 42" fill="none" >
//               <rect width="42" height="42" rx="21" fill="#39FFFB"/>
//               <path d="M29.2514 23.0107C28.8282 23.0107 28.5027 23.3362 28.5027 23.7594V26.754C28.5027 27.1771 28.1772 27.5026 27.7541 27.5026H14.2459C13.8228 27.5026 13.4973 27.1771 13.4973 26.754V23.7594C13.4973 23.3362 13.1718 23.0107 12.7486 23.0107C12.3255 23.0107 12 23.3362 12 23.7594V26.754C12 27.9909 13.009 28.9999 14.2459 28.9999H27.7541C28.991 28.9999 30 27.9909 30 26.754V23.7594C30 23.3688 29.6745 23.0107 29.2514 23.0107Z" fill="#061C2B"/>  
//              <path d="M15.9726 21.1881L19.4229 24.6383C20.3018 25.5172 21.7339 25.5172 22.6128 24.6383L26.0631 21.1881C26.356 20.8951 26.3886 20.4394 26.0956 20.1139C25.8027 19.7884 25.347 19.7884 25.0215 20.0814L24.9889 20.1139L21.7665 23.3363V11.7486C21.7665 11.3255 21.441 11 21.0178 11C20.5947 11 20.2692 11.3255 20.2692 11.7486V23.3363L17.0468 20.1139C16.7538 19.821 16.2981 19.7884 15.9726 20.0814C15.6471 20.3743 15.6471 20.8626 15.9726 21.1881C15.9401 21.1555 15.9401 21.1555 15.9726 21.1881Z" fill="#061C2B"/>
//              </svg>
//              <svg className={ebook.comingSoon ? styles.soonButton :styles.downloadsvg } width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
//              <rect width="42" height="42" rx="21" fill="white" fill-opacity="0.2"/>
//              <path d="M14.1434 31.5697C13.9471 31.5691 13.7543 31.518 13.5835 31.4212C13.407 31.3219 13.26 31.1776 13.1576 31.0029C13.0552 30.8282 13.001 30.6295 13.0007 30.427V13.6626C12.9852 12.9773 13.2404 12.3136 13.711 11.8152C14.1816 11.3168 14.8297 11.0239 15.5147 11H26.4853C27.1703 11.0239 27.8184 11.3168 28.289 11.8152C28.7596 12.3136 29.0148 12.9773 28.9993 13.6626V30.427C28.9981 30.6264 28.9448 30.822 28.8445 30.9944C28.7443 31.1668 28.6007 31.31 28.428 31.4097C28.2542 31.51 28.0572 31.5628 27.8566 31.5628C27.656 31.5628 27.4589 31.51 27.2852 31.4097L20.8057 27.7415L14.7148 31.3983C14.5429 31.505 14.3457 31.5642 14.1434 31.5697Z" fill="#39FFFB"/>
//              </svg>

//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

    
//     </div>
//   );
// };

// export default EbooksCards;



import React, { useContext, useEffect } from "react";
import styles from "./EbooksCards.module.css";
import { EbookPageContext } from "../../store/ebookPageContext";

const EbooksCards = () => {
  const { ebookPageContextDetails, setEbookPageContextDetails, loading, error } = useContext(EbookPageContext);

  useEffect(() => {
    // Simulate fetching data from API
    const fetchEbooks = async () => {
      try {
        const response = await fetch("/api/ebookData"); // replace with actual API endpoint
        const data = await response.json();
        setEbookPageContextDetails(data); // Update the context with the fetched data
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };

    fetchEbooks();
  }, [setEbookPageContextDetails]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  // Destructure data from ebookPageContextDetails
  const { EbookDataTitle, ebook } = ebookPageContextDetails || {};
  const { title } = EbookDataTitle || { title: "Default Title" };

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.containerHeader}>{title}</h1>    
      </div>   

      <div className={styles.cardsContainer}>
        {ebook?.map((ebookItem) => (
          <div key={ebookItem.id} className={styles.card}>
            <img src={ebookItem.imgSrc} alt={ebookItem.title} className={styles.image} />
            <div className={styles.content}>
              <p>E-Booklet</p>
              <h3>{ebookItem.title}</h3>
              <div className={styles.btn}>
                <button className={ebookItem.comingSoon ? styles.soonButton1 : styles.downloadButton}>
                  {ebookItem.comingSoon ? "Soon" : ebookItem.buttonText}
                </button>
                {/* <svg className={ebookItem.comingSoon ? styles.soonButton : styles.downloadsvg} width="120" height="42" viewBox="0 0 42 42" fill="none">
                  <rect width="42" height="42" rx="21" fill="#39FFFB" />
                  <path d="M29.2514 23.0107C28.8282 23.0107 28.5027 23.3362 28.5027 23.7594V26.754C28.5027 27.1771 28.1772 27.5026 27.7541 27.5026H14.2459C13.8228 27.5026 13.4973 27.1771 13.4973 26.754V23.7594C13.4973 23.3362 13.1718 23.0107 12.7486 23.0107C12.3255 23.0107 12 23.3362 12 23.7594V26.754C12 27.9909 13.009 28.9999 14.2459 28.9999H27.7541C28.991 28.9999 30 27.9909 30 26.754V23.7594C30 23.3688 29.6745 23.0107 29.2514 23.0107Z" fill="#061C2B"/>
                  <path d="M15.9726 21.1881L19.4229 24.6383C20.3018 25.5172 21.7339 25.5172 22.6128 24.6383L26.0631 21.1881C26.356 20.8951 26.3886 20.4394 26.0956 20.1139C25.8027 19.7884 25.347 19.7884 25.0215 20.0814L24.9889 20.1139L21.7665 23.3363V11.7486C21.7665 11.3255 21.441 11 21.0178 11C20.5947 11 20.2692 11.3255 20.2692 11.7486V23.3363L17.0468 20.1139C16.7538 19.821 16.2981 19.7884 15.9726 20.0814C15.6471 20.3743 15.6471 20.8626 15.9726 21.1881Z" fill="#061C2B"/>
                </svg> */}
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EbooksCards;


