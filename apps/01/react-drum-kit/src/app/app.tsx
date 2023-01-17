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
    console.log('registering keydown');
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

// Gracias @PierinaGiusiano!: https://github.com/rgolea/30-day-challenge/pull/1
// import Keyboard from './keyboard/keyboard';
// import { INSTRUMENTS } from './instruments';

// // import 'src/styles.css';
// export function App() {
//   return (
//     <div className="keys">
//       {INSTRUMENTS.map((sound, i) => (
//         <Keyboard key={i} letter={sound.letter} sound={sound.soundSrc} />
//       ))}
//     </div>
//   );
// }

export default App;
