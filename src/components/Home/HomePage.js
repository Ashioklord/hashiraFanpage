import React, { useEffect, useRef, useState } from "react";
import MainHeader from "./MainHeader";
import Navigation from "./Navigation";
import hashiraTheme from "./hashiraTheme.mp3";
import classes from "./HomePage.module.css";

function HomePage() {
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;

    const playAudio = () => {
      if (audio && isAudioPlaying) {
        audio.volume = 0.25; // Set the volume to 50%
        audio.play().catch((error) => {
          // Autoplay failed, handle the error here
          console.log("Autoplay failed:", error);
        });
      }
    };

    playAudio(); // Call the function immediately

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsAudioPlaying(false);
    setIsVideoMuted(false);
    if (videoRef.current) {
      videoRef.current.volume = 1; // Set the volume to 100%
      videoRef.current.play().catch((error) => {
        // Play failed, handle the error here
        console.log("Play failed:", error);
      });
      if (audioRef.current) {
        audioRef.current.volume = 0; // Set the volume to 0%
      }
    }
  };

  const handleMouseLeave = () => {
    setIsAudioPlaying(true);
    setIsVideoMuted(true);
    if (videoRef.current) {
      videoRef.current.volume = 0; // Set the volume to 0%
    }
    if (audioRef.current) {
      audioRef.current.volume = 0.25; // Set the volume to 50%
    }
  };

  return (
    <React.Fragment>
      <MainHeader
        headerTitle="鬼滅の刃"
        bannerLoc="/images/kimetsu-no-yaiba-logo.png"
      />
      <video
        ref={videoRef}
        className={classes.mainVideo}
        src="videos/TheHashiras.mp4"
        autoPlay
        loop
        muted={isVideoMuted}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></video>
      
      <Navigation />
      <audio ref={audioRef} src={hashiraTheme} loop />
    </React.Fragment>
  );
}

export default HomePage;
