import React from "react";
import styles from "./StockDetails.module.css";

const StockDetails = ({ details }) => {
   return (
      <div className={styles.stockDetails}>
         <h2>details</h2>
         <div className={styles.details}>
            {details.map((detail) => (
               <div className={styles.detail}>
                  <h2>
                     {" "}
                     {detail.description} : {detail.value}
                  </h2>
               </div>
            ))}
         </div>
         <button className={styles.buttonDelete}>Delete</button>
      </div>
   );
};

export default StockDetails;
