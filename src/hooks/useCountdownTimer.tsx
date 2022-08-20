import { useEffect, useState } from 'react';

const countDownDate = new Date(
  process.env.NEXT_PUBLIC_COUNTDOWN_DATE,
).getTime();

const useCountdownTimer = () => {
  const now = new Date().getTime();
  const timeLeft = countDownDate - now;

  // Calculating the days, hours, minutes and seconds left
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const [counter, setCounter] = useState(seconds);

  useEffect(() => {
    if (counter === 0) setCounter(seconds);

    const timer = setInterval(() => setCounter(counter - 1), 60000);
    return () => clearInterval(timer);
  }, [counter]);

  return {
    days,
    hours,
    minutes: minutes + 1,
    seconds: seconds + 1,
  };
};

export default useCountdownTimer;
