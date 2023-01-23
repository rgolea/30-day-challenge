import { useEffect, useState } from 'react';
import { ClockContainer } from './clock/clock-container';
import { ClockDigital } from './clock/clock-digital';
import { ClockHand } from './clock/clock-hand';

export function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const i = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <ClockContainer>
      <ClockDigital date={date} />
      <ClockHand type="HOUR" time={date.getHours()} />
      <ClockHand type="MINUTES" time={date.getMinutes()} />
      <ClockHand type="SECONDS" time={date.getSeconds()} />
    </ClockContainer>
  );
}

export default App;
