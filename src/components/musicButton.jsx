import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import BgMusic from "../music/journeys_end.mp3";
import "../css/musicButton.css";

function MusicButton() {
  const routeState = useSelector((state) => state.route.value);
  const [audio] = useState(new Audio(BgMusic));
  const [playing, setPlaying] = useState(routeState);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const togglePlay = () => {
    playing ? setPlaying(false) : setPlaying(true);
  };

  audio.loop = true;

  return (
    <div className="musicBtnContainer">
      <button className="musicPlayButton" onClick={togglePlay}>
        {playing ? (
          <FontAwesomeIcon icon={faVolumeHigh} />
        ) : (
          <FontAwesomeIcon icon={faVolumeXmark} />
        )}
      </button>
    </div>
  );
}

export default MusicButton;
