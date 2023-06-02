import React from "react";
import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <div className={classes["header-content"]}>
        <h1>{props.headerTitle}</h1>
        <img src={props.bannerLoc} alt="Banner" className={classes["banner-image"]} />
      </div>
    </header>
  );
};

export default MainHeader;
