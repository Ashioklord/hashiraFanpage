import React, { useRef, useState } from "react";
import classes from "./Navigation.module.css";

function VideoDiv(props) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current.play().catch((error) => {
      // Autoplay failed, handle the error here
      console.log("Autoplay failed:", error);
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  const videoClassName = isHovered ? classes.videoEnlarged : classes.video;

  return (
    <div className={classes.box}>
      <div className={classes.label}>{props.videoLabel}</div>
      <video
        ref={videoRef}
        className={videoClassName}
        loop
        muted
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <source src={props.videoLoc} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoDiv;
