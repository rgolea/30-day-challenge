import './app.css';
import { INSTRUMENTS } from './instruments';
import { KeyboardKey, KeyboardKeyRef } from './keyboard-key/keyboard-key.component';
import { useRef, useEffect } from 'react';


export function App() {
  const keyboardKeysRef = useRef<Record<string, KeyboardKeyRef>>({});

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      const ref = keyboardKeysRef.current[key];
      if(ref === undefined) return;
      ref.play();
    }

    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <div className="keys">
      {
        INSTRUMENTS.map((instrument) => <KeyboardKey ref={el => {
          if(el === null) return;
          keyboardKeysRef.current[instrument.letter] = el;
        }} key={instrument.letter} {...instrument} />)
      }
    </div>
  );
}

export default App;
