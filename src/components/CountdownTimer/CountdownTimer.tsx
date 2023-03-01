import { useEffect, useState } from 'react';
import {
  Number,
  NumberContainer,
  NumberLabel,
  TimeContent,
} from './styles';

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
    <NumberContainer>
      {time.days === 0 ? null : (
        <TimeContent>
          <Number>{time.days.toString().padStart(2, '0')}</Number>
          <NumberLabel>Dias</NumberLabel>
        </TimeContent>
      )}
      <TimeContent>
        <Number>{time.hours.toString().padStart(2, '0')}</Number>
        <NumberLabel>Hrs</NumberLabel>
      </TimeContent>
      <TimeContent>
        <Number>{time.minutes.toString().padStart(2, '0')}</Number>
        <NumberLabel>mins</NumberLabel>
      </TimeContent>
      <TimeContent>
        <Number>{time.seconds.toString().padStart(2, '0')}</Number>
        <NumberLabel>secs</NumberLabel>
      </TimeContent>
    </NumberContainer>
  );
};

export default CountDownTimer;
