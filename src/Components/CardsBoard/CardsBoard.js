import React from "react";
import styles from "./CardsBoard.module.css";
import Card from "../Card/Card";

const CardsBoard = () => {
  let cardsList = [
    {
      id: 0,
      title: "Event Planner",
      description:
        "Check all of the events happening around! A full functional javascript task; add/edit/delete events with realtime database! In this project I was more focused on grasping & understanding javaScript concepts",
      link: "https://loris99.github.io/events-around-me/",
    },
    {
      id: 1,
      title: "The Tea Shop",
      description:
        "  I share my love for tea and its varieties through this website; which demonstrates the analysis of a fictional cozy tea shop, in which I learned how to use charts in react! ps: I love coffee too..",
      link: "https://loris99.github.io/tea-shop/",
    },
    {
      id: 2,
      title: "Guess the Secret Code",
      description:
        "  This is an exciting small game. It's a small excercise for the brain, great excersise to practice many React concepts!  Although it might get on your nerves but it's a good distraction for your nephews (it worked form me)",
      link: "https://loris99.github.io/guess-the-sequence-game/",
    },
    {
      id: 3,
      title: "Health Care Search & Reviews",
      description:
        " Search for a specialist by name, speciality or location, all of which are registered in your healthcare from 'al-mashreq', not only that but you can also check their reviews and ratings and leave your own! you need to disable CORS..",
      link: "https://loris99.github.io/health-care-info/",
    },
    {
      id: 4,
      title: "Mystery Project",
      description:
        " This one might be the intersection of the two things I enjoy the most! coming soon...",
      link: "",
    },
  ];
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.twoCardsLine}>
        <Card
          title={cardsList[0].title}
          description={cardsList[0].description}
          link={cardsList[0].link}
          isLink={true}
        />
        <Card
          title={cardsList[1].title}
          description={cardsList[1].description}
          link={cardsList[1].link}
          isLink={true}
        />
      </div>
      <div className={styles.oneCardLine}>
        <Card
          title={cardsList[2].title}
          description={cardsList[2].description}
          link={cardsList[2].link}
          isLink={true}
        />
      </div>
      <div className={styles.twoCardsLine}>
        <Card
          title={cardsList[3].title}
          description={cardsList[3].description}
          link={cardsList[3].link}
          isLink={true}
        />
        <Card
          title={cardsList[4].title}
          description={cardsList[4].description}
          isLink={false}
        />
      </div>
    </div>
  );
};
export default CardsBoard;
