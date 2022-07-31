import React from "react";
import styles from "./AboutUs.module.css";
const AboutUs = () => {
   return (
      <>
         <div className={styles.title}>About Us</div>
         <div className={styles.text}>
            Stockly was born in 2022 as part of the Monday-U Full Stack Academy.
         </div>

         <div className={styles.creatorsTitle}>Stockly creators:</div>
         <a
            href="https://www.linkedin.com/in/harelyfrach"
            target="_blank"
            className={styles.creatorLink}
         >
            Harel Yfrach
         </a>
         <a
            href="https://www.linkedin.com/in/lior-tal-28783224/"
            target="_blank"
            className={styles.creatorLink}
         >
            Lior Tal
         </a>
         <a
            href="https://www.linkedin.com/in/shirlybarazsky/"
            target="_blank"
            className={styles.creatorLink}
         >
            Shirly Barazsky
         </a>
      </>
   );
};

export default AboutUs;
