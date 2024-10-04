

// import { contentData } from '../../assets/Assests';
// import styles from './OurVisionData.module.css'; 

// const OurVisionData = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.introSection}>
//         <h1>Your first step towards creating your debut film starts now.</h1>
//         <p>
//           Maflem recognizes the immense passion for filmmaking within the Arab community and the scarcity of educational content in Arabic. The platform emerged as an opportunity for aspiring filmmakers, cinema enthusiasts, and imaginative writers to access self-paced learning at any time, tailored to their own schedules.
//         </p>
//       </div>
//       <div className={styles.contentSection}>
//         {contentData.map((item, index) => (
//           <div className={styles.card} key={index}>
//             <h2>{item.title}</h2>
//             <p>{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurVisionData;




import MaflamImageOffer from '../MaflamImageOffer/MaflamImageOffer';
import styles from './OurVisionData.module.css';

const OurVisionData = () => {
    const cards = [
        {
            title: 'Our Vision',
            text: 'Our vision is to become the leading solution that meets the needs of ambitious Arab students striving for excellence in the art of filmmaking.'
        },
        {
            title: 'Our Mission',
            text: 'Our mission is to nurture young talent, foster creativity, and provide filmmakers with the tools and expertise they need to succeed in the world of cinema.'
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.headingSection}>
                <h1>Your first step towards creating your first film</h1>
                <p>
                    Maflem recognizes the immense passion for filmmaking within the <br /> Arab community and the scarcity of educational content in Arabic. <br /> The platform emerged as an opportunity for aspiring filmmakers, <br /> cinema enthusiasts, and imaginative writers to access self-paced <br /> learning at any time, tailored to their own schedules.
                </p>
                <div className={styles.underline}></div>
            </div>

            <div className={styles.cards}>
                {cards.map((card, index) => (
                    <div key={index} className={styles.card}>
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                    </div>
                ))}
            </div>
            <MaflamImageOffer></MaflamImageOffer>
        </div>
    );
};

export default OurVisionData;
