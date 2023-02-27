import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AunctionProps } from '../types/AunctionTypes';
import {
  BidContainer,
  ButtonsContainer,
  Creator,
  CreatorAvatar,
  CreatorName,
  CurrentBidLabel,
  NextButton,
  PlaceBidButton,
  PopularContainer,
  PopularInformation,
  PreviousButton,
  ViewItemButton,
} from './styles';
import LeftArrow from './assets/leftArrow.svg';
import RightArrow from './assets/rightArrow.svg';
import CountDownTimer from '../CountdownTimer/CountdownTimer';

type AunctionsProps = {
  popular: AunctionProps[];
};

const Popular = (props: AunctionsProps) => {
  const [aunctionShowing, setAunctionShowing] = useState<number>(0);
  const [endingTime, setEndingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    getEndingTime(props.popular[aunctionShowing].endsAt);
  }, [aunctionShowing]);

  const getEndingTime = (date: string) => {
    let diffTime = Math.abs(
      new Date().valueOf() - new Date(date).valueOf()
    );
    let days = diffTime / (24 * 60 * 60 * 1000);
    let hours = (days % 1) * 24;
    let minutes = (hours % 1) * 60;
    let secs = (minutes % 1) * 60;
    [days, hours, minutes, secs] = [
      Math.floor(days),
      Math.floor(hours),
      Math.floor(minutes),
      Math.floor(secs),
    ];

    setEndingTime({ days, hours, minutes, seconds: secs });
  };

  return (
    <PopularContainer>
      <h1>Aunctions</h1>

      <Image
        src={props.popular[aunctionShowing]?.media?.image}
        alt={props.popular[aunctionShowing]?.author}
        width={500}
        height={700}
        style={{ borderRadius: '20px' }}
      />
      <PopularInformation>
        <Creator>
          <Image
            src={props.popular[aunctionShowing]?.authorAvatar}
            alt={props.popular[aunctionShowing]?.author}
            width={50}
            height={50}
          />
          <CreatorName>
            <p>{props.popular[aunctionShowing]?.author}</p>
            <p>{props.popular[aunctionShowing]?.instantPrice}</p>
          </CreatorName>
        </Creator>
        <BidContainer>
          <CurrentBidLabel>
            Current bid {props.popular[aunctionShowing]?.highestBid}
          </CurrentBidLabel>
          <p>Auction ending in </p>
          {endingTime.days === 0 &&
          endingTime.hours === 0 &&
          endingTime.minutes === 0 &&
          endingTime.seconds === 0 ? (
            <p>Ended</p>
          ) : (
            <CountDownTimer
              days={endingTime.days}
              hours={endingTime.hours}
              minutes={endingTime.minutes}
              seconds={endingTime.seconds}
            />
          )}
        </BidContainer>
        <PlaceBidButton>Place a bid</PlaceBidButton>
        <ViewItemButton>View item</ViewItemButton>
        <ButtonsContainer>
          <PreviousButton
            onClick={() =>
              setAunctionShowing(
                aunctionShowing === 0
                  ? props.popular.length - 1
                  : aunctionShowing - 1
              )
            }
          >
            <Image
              src={LeftArrow}
              alt="left arrow"
              width={14}
              height={14}
            />
          </PreviousButton>
          <NextButton
            onClick={() =>
              setAunctionShowing(
                aunctionShowing === props.popular.length - 1
                  ? 0
                  : aunctionShowing + 1
              )
            }
          >
            <Image
              src={RightArrow}
              alt="right arrow"
              width={14}
              height={14}
            />
          </NextButton>
        </ButtonsContainer>
      </PopularInformation>
    </PopularContainer>
  );
};

export default Popular;
