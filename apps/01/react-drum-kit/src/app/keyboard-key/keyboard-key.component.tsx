import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

export interface KeyboardKeyProps {
  letter: string;
  text: string;
  soundSrc: string;
}

export interface KeyboardKeyRef {
  play: () => void;
}

export const KeyboardKey = forwardRef<KeyboardKeyRef, KeyboardKeyProps>(({ letter, text, soundSrc }: KeyboardKeyProps, ref) => {
  const key = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    play: () => {
      if(key.current === null) return;
      const audio = key.current.querySelector('audio') as HTMLAudioElement;
      audio.currentTime = 0;
      audio.play();
      key.current.classList.add('playing');
    }
  }));

  useEffect(() => {
    if(key.current === null) return;
    const el = key.current;
    const listener = (e: TransitionEvent) => {
      if(e.propertyName !== 'transform') return;
      el.classList.remove('playing');
    }
    el.addEventListener('transitionend', listener);

    return () => {
      el.removeEventListener('transitionend', listener)
    };

  }, [key]);

  return <div ref={key} data-key={letter.toUpperCase().charCodeAt(0)} className="key">
    <kbd>{letter}</kbd>
    <span className="sound">{text}</span>
    <audio data-key="65" src={soundSrc}></audio>
  </div>;
});
