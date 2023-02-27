import { useEffect, useState } from 'react';

interface ICountdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountDownTimer = ({
  days,
  hours,
  minutes,
  seconds,
}: ICountdown) => {
  const [time, setTime] = useState<ICountdown>({
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  });
  const tick = () => {
    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0)
      reset();
    else if (time.hours === 0 && time.seconds === 0) {
      setTime({
        days: time.days,
        hours: time.hours - 1,
        minutes: 59,
        seconds: 59,
      });
    } else if (time.seconds === 0) {
      setTime({
        days: time.days,
        hours: time.hours,
        minutes: time.minutes - 1,
        seconds: 59,
      });
    } else {
      setTime({
        days: time.days,
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
    }
  };

  const reset = () =>
    setTime({
      days: time.days,
      hours: time.hours,
      minutes: time.minutes,
      seconds: time.seconds,
    });

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      <div>{`${time.days.toString().padStart(2, '0')}:${time.hours
        .toString()
        .padStart(2, '0')}:${time.minutes
        .toString()
        .padStart(2, '0')}:${time.seconds
        .toString()
        .padStart(2, '0')}`}</div>
    </div>
  );
};

export default CountDownTimer;
