import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import poster from '../assets/img/videoposter.png';
import pleyicon from '../assets/img/pleyicon.png';

export default function Banner() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="banner">
      <div className="video-container" onClick={handlePlay}>
        {!isPlaying && <div className="play-icon"><img src={pleyicon} alt="" /></div>}
        <ReactPlayer
          url="https://youtu.be/KLuTLF3x9sA?si=cOApWYlggVBLL9ed"
          playing={isPlaying}
          light={poster}
        />
      </div>
    </div>
  );
}
