import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <h1>{props.title}</h1>
        </div>
        <div className={styles.flipCardBack}>
          <div className={styles.cardContent}>
            <p>{props.description}</p>

            {props.isLink && (
              <a className={styles.checkmebtn} href={props.link}>
                Check Me
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
