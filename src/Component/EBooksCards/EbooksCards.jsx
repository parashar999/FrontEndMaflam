
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import styles from "./EbooksCards.module.css";
import { EbookPageContext } from "../../store/ebookPageContext";
import auth from "../../Auth/Auth";

const EbooksCards = () => {
  const { ebookPageContextDetails, setEbookPageContextDetails, loading, error } = useContext(EbookPageContext);
  const [displayCount, setDisplayCount] = useState(8); 
  const navigate = useNavigate(); 
  
  // Get user details from the auth object
  const userDetails = auth.getAuthData();
  console.log("User Details: ", userDetails); 

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

  // Function to handle download button click
  const handleDownloadClick = (ebookUrl) => {
    // Check if userDetails has a valid token (indicating the user is logged in)
    if (!userDetails || !userDetails.token) {
      // If not logged in, redirect to the login page
      console.log("User not logged in, redirecting to login...");
      navigate("/login");
    } else {
      // If logged in, proceed with the download
      console.log("User logged in, downloading file...");
      window.location.href = ebookUrl; 
    }
  };

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
                {ebookItem.comingSoon ? (
                  <button className={styles.soonButton1}>Soon</button>
                ) : (
                  <button
                    onClick={() => handleDownloadClick(ebookItem.ebookPdfUrl)} 
                    className={styles.downloadButton}
                  >
                    <span className={styles.downbtnspan}>{ebookItem.buttonText.text}</span>
                    <img 
                      src={ebookItem.buttonText.icon} 
                      alt="Button Icon" 
                      className={styles.downloadIcon} 
                    />
                  </button>
                )}
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
