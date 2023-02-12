import React from "react";
import classes from "./MainPage.module.css";
import CardsBoard from "../CardsBoard/CardsBoard";
const MainPage = () => {
  return (
    <div className={classes.mainContainer}>
      <h1 className={classes.title}>Welcome to my little world</h1>
      <div className={classes.intro}>
        Hey there! My name is Loris Tarazi, and I'm all about so many things!
        <br />
        In this side of my world; I'm a web-developer. My first step was in the
        Front-End development, and I've been walking this path for almost two
        years now! a little younger than covid-19. <br /> I have learned & grown
        in it immensely, and I'm constantly on the hunt for more things to
        learn.
        <br /> This gallery is about showing my journey and some of the projects
        I did along the way for fun..
        <br /> I hope you enjoy them the same way I did while creating them!
      </div>
      <CardsBoard />
    </div>
  );
};
export default MainPage;
