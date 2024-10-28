// import React from 'react'

// import styles from "./YouTubeChannel.module.css"
// import { youtubeChannel } from '../../assets/assests'



// export default function YouTubeChannel() {


//   return (
//     <div className={styles.bgcontainer}>

//         <h1>Our Youtube Channels</h1>
// <div className={styles.CardContainer}>
//     {youtubeChannel.map((channel, index)=>(
//         <div key={index }  > 
// <img src={channel.imageurl} alt="" />
// <div className={styles.imagagelogo}>
//    <div>  <img src={channel.imagelogo} alt="" /></div>
// <div>
// <h5> { channel.title}</h5>
// <p> {channel.episode}</p>
// <img src={channel.icon}alt="" />
// </div>
// </div>
         

//         </div>
//     ))}

// </div>
//     </div>
//   )
// }

import React from 'react';
import styles from './YouTubeChannel.module.css';
import { assests, youtubeChannel } from '../../assets/assests';

export default function YouTubeChannel() {
  return (
    <div className={styles.bgcontainer}>
      <h1>Our YouTube Channels</h1>

      <div className={styles.CardContainer}>
        {youtubeChannel.map((channel, index) => (
          <div key={index} className={styles.card}>
            <img src={channel.imageurl }  alt="Channel Banner" className={styles.cardImage} />
            
            <div className={styles.imagagelogo}>
              <div>
                <img src={channel.imagelogo} alt="Channel Logo" className={styles.logoImage} />
              </div>
              
              <div>
                <h5>{channel.title}</h5>
                <div className={styles.titless}><p>{channel.episode}</p>
                <img src={assests.youtubeicon} alt="Icon" className={styles.iconImage} /></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
