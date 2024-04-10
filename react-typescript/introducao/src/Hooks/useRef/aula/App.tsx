// UseEffect só pode retornar void, ou seja outra função seja anonima ou uma função externa.

import React from 'react';
import videoSrc from './video.mp4';

const App = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  return (
    <div>
      <div className="flex">
        <button
          onClick={() => {
            videoRef.current?.play();
          }}
        >
          Play
        </button>
        <button
          onClick={() => {
            videoRef.current?.pause();
          }}
        >
          Pause
        </button>
      </div>
      <video ref={videoRef} src={videoSrc}></video>;
    </div>
  );
};

export default App;
