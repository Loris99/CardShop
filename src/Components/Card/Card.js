import React from "react";
import styles from "./Card.module.css";
// import calendar from "./../../Assets/calendar.png";
// import lock from "./../../Assets/lock.png";
import mystery from "./../../Assets/mystery.png";
import teaCup from "./../../Assets/tea-cup.png";

const Card = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.firstLine}>
        <div className={styles.cardA}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <h1>Event Planner</h1>
                {/* <img src={calendar} alt="calendar icon" /> */}
              </div>
              <div className={styles.flipCardBack}>
                <div className={styles.cardContent}>
                  <p>
                    Check all of the events happening around you!
                    <br />A full functional javascript task; add/edit/delete
                    events connected with realtime database! <br />
                    this project I was more focused on grasping & understanding
                    javaScript concepts
                  </p>
                  <a
                    className={styles.checkmebtn}
                    href="https://loris99.github.io/events-around-me/"
                  >
                    Check Me
                  </a>

                  {/* <button onClick={}>Check me!</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardB}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <h1>The Tea Shop</h1>
                {/* <img
                  style={{
                    width: "calc(20% + 20 * ((100vw — 500px) / (1420)))",
                  }}
                  src={teaCup}
                  alt="tea cup "
                /> */}
              </div>
              <div className={styles.flipCardBack}>
                <div className={styles.cardContent}>
                  <p>
                    I share my love for tea and its varieties through this
                    website; which demonstartes the analysis of a fictional cozy
                    tea shop, in which I learned how to use charts!
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
      </div>
      <div className={styles.cardC}>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <h1>Guess the Secret Code</h1>
            </div>
            <div className={styles.flipCardBack}>
              <div className={styles.cardContent}>
                <p>
                  This is an exciting small game. It's a small excercise for the
                  brain, great excersise to practice React! <br /> Although it
                  might get on your nerves but it's a good distraction for your
                  nephews (it worked form me)
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
      <div className={styles.firstLine}>
        <div className={styles.cardD}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <h1>Health Care Search & Reviews</h1>
              </div>
              <div className={styles.flipCardBack}>
                <div className={styles.cardContent}>
                  <p>
                    Search for a specialist by name, speciality or location, all
                    of which are registered in your healthcare from
                    'al-mashreq', not only that but you can also check their
                    reviews and ratings and leave your own! <br /> you need to
                    disable CORS..
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
        </div>
        <div className={styles.cardE}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <h1>Mystery Project</h1>
                {/* <img
                  style={{
                    width: "calc(20% + 20 * ((100vw — 500px) / (1420)))",
                  }}
                  src={mystery}
                  alt="mystery box"
                /> */}
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
    </div>
  );
};
export default Card;
