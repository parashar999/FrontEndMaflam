
// import styles from './YouTubeChannel.module.css';
// import { assests, youtubeChannel } from '../../assets/assests';
// import { SocialMediaPageContext } from '../../store/SocilaMediaPageContext';
// import { useContext } from 'react';

// export default function YouTubeChannel() {
//   const { socialMediaPageDetails, loading, error } = useContext(SocialMediaPageContext);

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   // Extract data from the context
//   const title = socialMediaPageDetails?.pageDataTitle4?.title || "";
//   const title1 = socialMediaPageDetails?.pageData4?.title || "";
//   const text = socialMediaPageDetails?.pageData4?.text || "";

//   return (
//     <div className={styles.bgcontainer}>
//       <h1>{title}</h1>


//       {/* Card Section */}
//       <div className={styles.CardContainer}>
//         {youtubeChannel.map((channel, index) => (
//           <div key={index} className={styles.card}>
//             {/* <img src={channel.imageurl} alt="Channel Banner" className={styles.cardImage} /> */}
//             <iframe
//             key={index}
//             className={styles.video}
//             src={`https://www.youtube.com/embed/${channel.videoId}`}
//             title={`YouTube video ${index + 1}`}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           />

//             <div className={styles.imagagelogo}>
//               <div>
//                 <img src={channel.imagelogo} alt="Channel Logo" className={styles.logoImage} />
//               </div>

//               <div>
//                 <h5>{channel.title}</h5>
//                 <div className={styles.titless}>
//                   <p>{channel.episode}</p>
//                   <img src={assests.youtubeicon} alt="Icon" className={styles.iconImage} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import styles from './YouTubeChannel.module.css';
import { assests, youtubeChannel } from '../../assets/assests';
import { SocialMediaPageContext } from '../../store/SocilaMediaPageContext';
import { useContext } from 'react';

export default function YouTubeChannel() {
  const { socialMediaPageDetails, loading, error } = useContext(SocialMediaPageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Extract data from the context
  const title = socialMediaPageDetails?.pageDataTitle4?.title || "";
  const title1 = socialMediaPageDetails?.pageData4?.title || "";
  const text = socialMediaPageDetails?.pageData4?.text || "";

  return (
    <div className={styles.bgcontainer}>
      <h1>{title}</h1>

      {/* Card Section */}
      <div className={styles.CardContainer}>
        {youtubeChannel.map((channel, index) => (
          <div key={index} className={styles.card}>
            {/* YouTube Video */}
            <iframe
              className={styles.video}
              src={`https://www.youtube.com/embed/${channel.videoId}`}
              title={`YouTube video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            {/* Channel Details */}
            <div className={styles.imagagelogo}>
              <div>
                <img src={channel.imagelogo} alt="Channel Logo" className={styles.logoImage} />
              </div>
              <div>
                <h5>{channel.title}</h5>
                <div className={styles.titless}>
                  <p>{channel.episode}</p>
                  <img src={assests.youtubeicon} alt="Icon" className={styles.iconImage} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// import styles from './YouTubeChannel.module.css';
// import { assests, youtubeChannel } from '../../assets/assests';
// import { SocialMediaPageContext } from '../../store/SocilaMediaPageContext';
// import { useContext } from 'react';

// export default function YouTubeChannel() {
  
//   const { socialMediaPageDetails, loading, error } = useContext(SocialMediaPageContext);

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   // Extract data from the context
//   const title = socialMediaPageDetails?.pageDataTitle4?.title || "";
//   const title1 = socialMediaPageDetails?.pageData4?.title || "";
 
//   const text = socialMediaPageDetails?.pageData4?.text || "";
//   return (
//     <div className={styles.bgcontainer}>
//       <h1>{title}</h1>

//       <div className={styles.CardContainer}>
//         {youtubeChannel.map((channel, index) => (
//           <div key={index} className={styles.card}>
//             <img src={channel.imageurl }  alt="Channel Banner" className={styles.cardImage} />
            
//             <div className={styles.imagagelogo}>
//               <div>
//                 <img src={channel.imagelogo} alt="Channel Logo" className={styles.logoImage} />
//               </div>
              
//               <div>
//                 <h5>{channel.title}</h5>
//                 <div className={styles.titless}><p>{channel.episode}</p>
//                 <img src={assests.youtubeicon} alt="Icon" className={styles.iconImage} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import styles from './YouTubeChannel.module.css';
// import { SocialMediaPageContext } from '../../store/SocilaMediaPageContext';
// import { useContext } from 'react';

// export default function YouTubeChannel() {
//   const { socialMediaPageDetails, loading, error } = useContext(SocialMediaPageContext);

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   // Extract data from the context
//   const title = socialMediaPageDetails?.pageDataTitle4?.title || "";
//   const channels = socialMediaPageDetails?.pageData4 || [];

//   return (
//     <div className={styles.bgcontainer}>
//       <h1>{title}</h1>

//       <div className={styles.CardContainer}>
//         {channels.map((channel, index) => (
//           <div key={index} className={styles.card}>
//             <img src={channel.image} alt="Channel Banner" className={styles.cardImage} />
            
//             <div className={styles.imagagelogo}>
//               <div>
//                 {/* <img src={channel.logo} alt="Channel Logo" className={styles.logoImage} /> */}
//               </div>
              
//               <div>
//                 <h5>{channel.title}</h5>
//                 <div className={styles.titless}>
//                   <p>{channel.text}</p>
//                   {/* <img src={channel.logo} alt="Icon" className={styles.iconImage} /> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
