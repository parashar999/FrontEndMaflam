import React, { useContext, useEffect, useState } from "react";
import styles from "./EbooksCards.module.css";
import { EbookPageContext } from "../../store/ebookPageContext";

const EbooksCards = () => {
  const { ebookPageContextDetails, setEbookPageContextDetails, loading, error } = useContext(EbookPageContext);
  const [displayCount, setDisplayCount] = useState(8); // Show 8 items initially

  useEffect(() => {
    const fetchEbooks = async () => {
      try {
        const response = await fetch("/api/ebookData"); 
        const data = await response.json();
        setEbookPageContextDetails(data); 
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };
    fetchEbooks();
  }, [setEbookPageContextDetails]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const { EbookDataTitle, ebook } = ebookPageContextDetails || {};
  const { title } = EbookDataTitle || { title: "Default Title" };

  const loadMoreItems = () => {
    setDisplayCount((prevCount) => prevCount + 8);
  };

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.containerHeader}>{title}</h1>    
      </div>   

      <div className={styles.cardsContainer}>
        {ebook?.slice(0, displayCount).map((ebookItem) => (
          <div key={ebookItem.id} className={styles.card}>
            <img src={ebookItem.imgSrc} alt={ebookItem.title} className={styles.image} />
            <div className={styles.content}>
              <p>{ebookItem.text}</p>
              <h3 className={styles.text}>{ebookItem.title}</h3>
              <div className={styles.btn}>
              <button className={ebookItem.comingSoon ? styles.soonButton1 : styles.downloadButton}>
                {ebookItem.comingSoon ? "Soon" : (
                  <>
                    <span className={styles.downbtnspan}>{ebookItem.buttonText.text}</span>
                    <img 
                      src={ebookItem.buttonText.icon} 
                      alt="Button Icon" 
                      className={ebookItem.comingSoon ? styles.soonIcon : styles.downloadIcon} 
                    />
                  </>
                )}
              </button>
              <img 
                src={ebookItem.icon2.icon} 
                alt="Arrow Icon" 
                className={styles.likeicon} 
              />
            </div>

            </div>
          </div>
        ))}
      </div>

      {ebook && displayCount < ebook.length && (
        <button onClick={loadMoreItems} className={styles.loadMoreButton}>
          Load More ({displayCount}/{ebook.length})
        </button>
      )}
    </div>
  );
};

export default EbooksCards;
