// import './app.css';
// import { INSTRUMENTS } from './instruments';
// import { KeyboardKey, KeyboardKeyRef } from './keyboard-key/keyboard-key.component';
// import { useRef, useEffect } from 'react';

// export function App() {
//   const keyboardKeysRef = useRef<Record<string, KeyboardKeyRef>>({});

//   useEffect(() => {
//     const listener = (e: KeyboardEvent) => {
//       const key = e.key.toUpperCase();
//       const ref = keyboardKeysRef.current[key];
//       if(ref === undefined) return;
//       ref.play();
//     }

//     window.addEventListener('keydown', listener);

//     return () => {
//       window.removeEventListener('keydown', listener);
//     };
//   }, []);

//   return (
//     <div className="keys">
//       {
//         INSTRUMENTS.map((instrument) => <KeyboardKey ref={el => {
//           if(el === null) return;
//           keyboardKeysRef.current[instrument.letter] = el;
//         }} key={instrument.letter} {...instrument} />)
//       }
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import Keyboard from './keyboard/keyboard';

// import 'src/styles.css';
export function App() {
  const [sounds, setSounds] = useState([
    {
      letter: 'A',
      text: 'clap',
      soundSrc: 'sounds/clap.wav',
    },
    {
      letter: 'S',
      text: 'hihat',
      soundSrc: 'sounds/hihat.wav',
    },
    {
      letter: 'D',
      text: 'kick',
      soundSrc: 'sounds/kick.wav',
    },
    {
      letter: 'F',
      text: 'openhat',
      soundSrc: 'sounds/openhat.wav',
    },
    {
      letter: 'G',
      text: 'boom',
      soundSrc: 'sounds/boom.wav',
    },
    {
      letter: 'H',
      text: 'ride',
      soundSrc: 'sounds/ride.wav',
    },
    {
      letter: 'J',
      text: 'snare',
      soundSrc: 'sounds/snare.wav',
    },
    {
      letter: 'K',
      text: 'tom',
      soundSrc: 'sounds/tom.wav',
    },
    {
      letter: 'L',
      text: 'tink',
      soundSrc: 'sounds/tink.wav',
    },
  ]);

  return (
    <div className="keys">
      {sounds.map((sound, i) => (
        <Keyboard key={i} letter={sound.letter} sound={sound.soundSrc} />
      ))}
    </div>
  );
}

export default App;
