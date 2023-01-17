import { useCallback, useEffect, useMemo, useState, useRef } from 'react';

type KeyboardProps = {
  letter: string;
  sound: string;
};

const Keyboard = ({ letter, sound }: KeyboardProps) => {
  const [playing, setPlaying] = useState(false);

  const keyElRef = useRef<HTMLDivElement>(null);

  const audio = useMemo(() => {
    return new Audio(sound);
  }, [sound]);

  const play = useCallback(() => {
    audio.currentTime = 0;
    audio.play();
    setPlaying(true);
  }, [audio]);

  useEffect(() => {
    console.log('registering keydown event listener');
    const keydownListener = (e: KeyboardEvent) => {
      if (e.key.toUpperCase() === letter.toUpperCase()) {
        play();
      }
    };

    document.addEventListener('keydown', keydownListener);

    return () => document.removeEventListener('keydown', keydownListener);
  }, [letter, play]);

  useEffect(() => {
    if(!keyElRef.current) return;
    const el = keyElRef.current;
    const transitionListener = (e: TransitionEvent) => {
      if(e.propertyName !== 'transform') return;
      setPlaying(false);
    };

    el.addEventListener('transitionend', transitionListener);

    return () => el.removeEventListener('transitionend', transitionListener);

  }, [keyElRef]);

  return (
    <div ref={keyElRef} className="keys">
      <div className={`key ${playing ? 'playing': ''}`}>{letter}</div>
    </div>
  );
};

export default Keyboard;
