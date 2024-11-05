
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
      YouTube 
    </button>
    <button className={styles.btntiktok}> 
      TikTok
    </button>
    <button className={styles.btninsta}> 
       Instagram
    </button>

</div>

    
    </div>
  )
}
