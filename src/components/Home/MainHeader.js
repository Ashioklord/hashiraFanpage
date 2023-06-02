import React from "react";
import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <div className={classes["header-content"]}>
        <h1>{props.headerTitle}</h1>
        <h2>Kimetsu No Yaiba</h2>
      </div>
      <h3>
        <span className={classes["fanpage-left"]}>Hashira fanpage</span>
        <span className={classes["fanpage-right"]}>Hashira fanpage</span>
      </h3>
    </header>
  );
};


export default MainHeader;
