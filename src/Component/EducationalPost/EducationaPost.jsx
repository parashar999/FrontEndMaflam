// import React from 'react'

// import styles from "./EducationaPost.module.css"
// import { assests, EducationPost } from '../../assets/assests'

// export default function EducationaPost() {
//   return (
//     <div>
//         <div> 
//             <h1> Content of Our Educational Posts</h1>
            
//         </div>
        
//         <div>
//             { EducationPost.map((index , educationpost)=>(
//                 <div key={index} className={styles.card}>  
//                   <img src={educationpost.imageurl} alt=" not Found" />
//                   <h5> {educationpost.title}</h5>

// <div> 
//     <p>{educationpost.episode}</p>
//     <img src={assests.instagramlogo} alt="" />

// </div>

//                    </div>
//             ))
//             }
            
//         </div>
//          </div>
//   )
// }

import React from 'react';
import styles from './EducationaPost.module.css';
import { assests, EducationPost } from '../../assets/assests';

export default function EducationaPost() {
  return (
    <div className={styles.container}>
      <div> 
        <h1>Content of Our Educational Posts</h1>
      </div>

      <div className={styles.cardsWrapper}>
        {EducationPost.map((educationpost, index) => (
          <div key={index} className={styles.card}>
            <img src={educationpost.imageurl} alt="Not Found" />
            <h5>{educationpost.title}</h5>

            <div className={styles.mores}> 
              <p>{educationpost.episode}</p>
             <div> <img src={assests.instagramlogo} alt="Instagram Logo" /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
