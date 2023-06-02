import React, { useRef } from "react";
import classes from "./Navigation.module.css";
import VideoDiv from "./VideoDiv";


const Navigation = (props) => {
  

  return (
    <div className={classes.container}>
      <VideoDiv  videoLoc="/videos/rengoku.mp4" videoLabel="Rengoku"/>
      <VideoDiv videoLoc="/videos/tomioka.mp4" videoLabel="Tomioka"/>
      <VideoDiv videoLoc="/videos/tokito.mp4" videoLabel="Tokito" />
      <VideoDiv videoLoc="/videos/shinobu.mp4" videoLabel="Shinobu" />
    </div>
  );
};

export default Navigation;
