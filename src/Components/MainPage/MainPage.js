import React from "react";
import classes from "./MainPage.module.css";
import Card from "../Card/Card";
const MainPage = () => {
  return (
    <div className={classes.mainContainer}>
      <h1 className={classes.title}>Welcome to my little world</h1>
      <div className={classes.intro}>
        I am is Loris Tarazi, and I'm all about so many things! <br />
        In this side of my world; I'm an aspiring web-developer. My first step
        was in the Front-End development, I've been walking this path for almost
        two years now!, little younger than covid-19. I have learned & grown in
        it immensely, and I'm constantly on the hunt for more things to learn.
        <br /> This gallery is about showing my journey and how I have evolved
        and still am; starting from the first project, still there are some that
        are under construction! <br /> These are small projects I did for fun..
        I hope you enjoy them the same way I did while creating them!
      </div>
      <Card />
    </div>
  );
};
export default MainPage;
