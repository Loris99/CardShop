import React from "react";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.twoCardsLine}>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <h1>Event Planner</h1>
            </div>
            <div className={styles.flipCardBack}>
              <div className={styles.cardContent}>
                <p>
                  Check all of the events happening around!
                  <br />A full functional javascript task; add/edit/delete
                  events with realtime database! <br />
                  In this project I was more focused on grasping & understanding
                  javaScript concepts
                </p>
                <a
                  className={styles.checkmebtn}
                  href="https://loris99.github.io/events-around-me/"
                >
                  Check Me
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <h1>The Tea Shop</h1>
            </div>
            <div className={styles.flipCardBack}>
              <div className={styles.cardContent}>
                <p>
                  I share my love for tea and its varieties through this
                  website; which demonstrates the analysis of a fictional cozy
                  tea shop, in which I learned how to use charts in react!
                  <br /> ps: I love coffee too..
                </p>
                <a
                  className={styles.checkmebtn}
                  href="https://loris99.github.io/tea-shop/"
                >
                  Check Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.oneCardLine}>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <h1>Guess the Secret Code</h1>
            </div>
            <div className={styles.flipCardBack}>
              <div className={styles.cardContent}>
                <p>
                  This is an exciting small game. It's a small excercise for the
                  brain, great excersise to practice many React concepts! <br />{" "}
                  Although it might get on your nerves but it's a good
                  distraction for your nephews (it worked form me)
                </p>
                <a
                  className={styles.checkmebtn}
                  href="https://loris99.github.io/guess-the-sequence-game/"
                >
                  Check Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.twoCardsLine}>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <h1>Health Care Search & Reviews</h1>
            </div>
            <div className={styles.flipCardBack}>
              <div className={styles.cardContent}>
                <p>
                  Search for a specialist by name, speciality or location, all
                  of which are registered in your healthcare from 'al-mashreq',
                  not only that but you can also check their reviews and ratings
                  and leave your own! <br /> you need to disable CORS..
                </p>
                <a
                  className={styles.checkmebtn}
                  href="https://loris99.github.io/health-care-info/"
                >
                  Check Me
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <h1>Mystery Project</h1>
            </div>
            <div className={styles.flipCardBack}>
              <div className={styles.cardContent}>
                <p>
                  This one might be the intersection of the two things I enjoy
                  the most!
                  <br />
                  coming soon..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
