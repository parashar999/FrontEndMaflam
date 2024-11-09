
import styles from "./SocialMediaHeroPage.module.css"

export default function SocialMediaHeroPage() {
  return (
    <div className={styles.cointainer}> 

<div className={styles.titles}>
<h1> Maflam Shows</h1>
<p> Educate yourself with our collection of free videos.</p>
</div>

<div className={styles.btndiv}> 
    <button className={styles.btnyoutube}> 
   <a href="/https://youtube.com/@maflamcom?si=nEBvwausBsKW8TuF"> YouTube </a>
   {/* <a href="https://www.youtube.com/@maflamcom"> YouTube </a> */}
    </button>
    <button className={styles.btntiktok}> 
   <a href="/https://www.tiktok.com/@maflam.com">TikTok</a>
    </button>
    <button className={styles.btninsta}> 
     <a href="https://www.instagram.com/maflam.com">Instagram</a>
    </button>

</div>

    
    </div>
  )
}
