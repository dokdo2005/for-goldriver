import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import BgMusic from "../music/journeys_end.mp3";
import "../css/musicButton.css";

function MusicButton() {
  const [audio] = useState(new Audio(BgMusic));
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

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
