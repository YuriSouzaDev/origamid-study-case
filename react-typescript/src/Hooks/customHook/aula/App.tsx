import React from 'react';
import videoSrc from '../useRef/aula/video.mp4';
import useLocalStorage from './useLocalStorage';

function App() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [volume, setVolume] = useLocalStorage('volume', '0');

  React.useEffect(() => {
    if (!videoRef.current) return;
    const n = Number(volume);
    if (n >= 0 && n <= 1) videoRef.current.volume = n;
  }, [volume]);

  return (
    <div>
      {volume}
      <div className="flex">
        <button onClick={() => setVolume('0')}>0</button>
        <button onClick={() => setVolume('0.5')}>50</button>
        <button onClick={() => setVolume('1')}>100</button>
      </div>
      <video controls ref={videoRef} src={videoSrc}></video>
    </div>
  );
}

export default App;
