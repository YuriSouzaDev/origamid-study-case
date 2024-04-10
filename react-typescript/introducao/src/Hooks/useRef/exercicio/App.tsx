import React from 'react';
import videoSrc from '../aula/video.mp4';

function App() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [paused, isPaused] = React.useState(true);
  const [muted, isMuted] = React.useState(false);

  React.useEffect(() => {
    videoRef.current?.playbackRate;
  }, []);

  const handlePlay: React.MouseEventHandler<HTMLButtonElement> = () => {
    isPaused(false);
    videoRef.current?.play();
  };

  const handlePause: React.MouseEventHandler<HTMLButtonElement> = () => {
    isPaused(true);
    videoRef.current?.pause();
  };

  const handleMute: React.MouseEventHandler<HTMLButtonElement> = () => {
    isMuted(true);
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

  const handleUnmute: React.MouseEventHandler<HTMLButtonElement> = () => {
    isMuted(false);
    if (videoRef.current) {
      videoRef.current.muted = false;
    }
  };

  const handleAdvance: React.MouseEventHandler<HTMLButtonElement> = ({
    currentTarget,
  }) => {
    if (videoRef.current) {
      videoRef.current.currentTime += parseFloat(currentTarget.value);
    }
  };

  //   Meu modo
  const handlePlayBackRate: React.MouseEventHandler<HTMLButtonElement> = ({
    currentTarget,
  }) => {
    const speed = parseFloat(currentTarget.value || '1');
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  //   Resolução do curso

  const changePlayBackRate = (speed: number) => {
    if (!videoRef.current) return;
    videoRef.current.playbackRate = speed;
  };
  9;

  const mute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
  };

  async function pictureInPicture() {
    if (!videoRef.current) return;
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await videoRef.current.requestPictureInPicture();
    }
  }

  return (
    <div>
      <div className="flex">
        {paused ? (
          <button onClick={handlePlay}>Play</button>
        ) : (
          <button onClick={handlePause}>Pause</button>
        )}
        <button onClick={handleAdvance} value={2}>
          +2s
        </button>
        <button onClick={handlePlayBackRate} value={1}>
          1x
        </button>
        <button onClick={() => changePlayBackRate(1.5)} value={2}>
          1.5x
        </button>
        <button onClick={handlePlayBackRate} value={2}>
          2x
        </button>
        <button onAbort={pictureInPicture}>PiP</button>
        {muted ? (
          <button onClick={handleUnmute}>Unmute</button>
        ) : (
          <button onClick={handleMute}>Mute</button>
        )}
        <button onClick={mute}>M</button>
      </div>
      <video
        onPlay={() => isPaused(false)}
        onPause={() => isPaused(true)}
        controls
        ref={videoRef}
        src={videoSrc}
      ></video>
    </div>
  );
}

export default App;
