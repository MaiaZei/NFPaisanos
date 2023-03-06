import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AunctionProps } from '../types/AunctionTypes';
import {
  AuctionEnding,
  BidContainer,
  ButtonsContainer,
  Creator,
  CreatorLabel,
  CreatorName,
  CreatorNameContainer,
  CreatorNameWrapper,
  CreatorWrapper,
  CurrentBidLabel,
  CurrentBidNumber,
  CurrentBidUsd,
  EndedLabel,
  NextButton,
  PlaceBidButton,
  PopularContainer,
  PopularImage,
  PopularInformation,
  PreviousButton,
  TopDiv,
  ViewItemButton,
} from './styles';
import LeftArrow from './assets/leftArrow.svg';
import RightArrow from './assets/rightArrow.svg';
import CountDownTimer from '../CountdownTimer/CountdownTimer';
import InstantPriceIcon from './assets/instantPriceIcon.svg';
import JonTyson from './assets/jon-tyson.png';

type AunctionsProps = {
  popular: AunctionProps[];
  ethPrice: string;
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
    const time = getEndingTime(
      props.popular[aunctionShowing]?.endsAt
    );
    setEndingTime({
      days: time.days,
      hours: time.hours,
      minutes: time.minutes,
      seconds: time.seconds,
    });
  }, [aunctionShowing]);

  const getEndingTime = (date: string) => {
    let diffTime = new Date(date).valueOf() - new Date().valueOf();

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

    return { days, hours, minutes, seconds: secs };
  };

  return (
    <PopularContainer key={props.popular[aunctionShowing]?.id}>
      <PopularImage
        src={JonTyson}
        alt="jon tyson"
        width={300}
        height={300}
      />
      <PopularInformation>
        <TopDiv>the creator network</TopDiv>
        <Creator>
          <CreatorNameContainer>
            <CreatorNameWrapper>
              <Image
                src={props.popular[aunctionShowing]?.authorAvatar}
                alt={props.popular[aunctionShowing]?.author}
                width={50}
                height={50}
              />
              <CreatorWrapper>
                <CreatorLabel>Creator</CreatorLabel>
                <CreatorName>
                  {props.popular[aunctionShowing]?.author}
                </CreatorName>
              </CreatorWrapper>
            </CreatorNameWrapper>
            <CreatorNameWrapper>
              <Image
                src={InstantPriceIcon}
                alt="instant price"
                width={50}
                height={50}
              />
              <CreatorWrapper>
                <CreatorLabel>Instant price</CreatorLabel>
                <CreatorName>
                  {props.popular[aunctionShowing]?.instantPrice}
                </CreatorName>
              </CreatorWrapper>
            </CreatorNameWrapper>
          </CreatorNameContainer>
        </Creator>
        <BidContainer>
          <CurrentBidLabel>Current bid</CurrentBidLabel>
          <CurrentBidNumber>
            {props.popular[aunctionShowing]?.highestBid}
          </CurrentBidNumber>
          <CurrentBidUsd>
            $
            {parseFloat(props.ethPrice.replace(',', '')) *
              parseFloat(props.popular[aunctionShowing]?.highestBid)}
          </CurrentBidUsd>
          <AuctionEnding>Auction ending in </AuctionEnding>
          {endingTime.days <= 0 &&
          endingTime.hours <= 0 &&
          endingTime.minutes <= 0 &&
          endingTime.seconds <= 0 ? (
            <EndedLabel>This auction has ended</EndedLabel>
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
            onClick={() => {
              setAunctionShowing(
                aunctionShowing === 0
                  ? props.popular.length - 1
                  : aunctionShowing - 1
              );
            }}
          >
            <Image
              src={LeftArrow}
              alt="left arrow"
              width={14}
              height={14}
            />
          </PreviousButton>
          <NextButton
            onClick={() => {
              setAunctionShowing(
                aunctionShowing === props.popular.length - 1
                  ? 0
                  : aunctionShowing + 1
              );
            }}
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
