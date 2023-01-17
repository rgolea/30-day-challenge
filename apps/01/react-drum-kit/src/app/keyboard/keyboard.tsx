import { useEffect, useState } from 'react';

const Keyboard = (key: number, letter: string, sound: string) => {
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setPlaying(true);
    new Audio(sound).play();
  };

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key.toUpperCase() === letter.toUpperCase()) {
        play();
      }
    });
  }, []);

  return (
    <div className={`keys ${playing ? 'playing' : ''}`}>
      <div className="key">{letter}</div>
    </div>
  );
};

export default Keyboard;
