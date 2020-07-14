import React from "react";
import classes from "./Home.module.css";
import Nav from "../../components/ui/Nav/Nav";
import SearchSection from "../../components/SearchSection/SearchSection";

function Home(props) {
  return (
    <div className={classes.Home}>
      <Nav></Nav>
      <header className={classes.home__header}>
        <div className={classes.home__header_content}>
          <h1>Welcome to Supermart</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </header>
      <SearchSection></SearchSection>
    </div>
  );
}

export default Home;
