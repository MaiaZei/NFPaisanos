import Image from 'next/image';
import styled from 'styled-components';

export const TopDiv = styled.div`
  font-size: 64px;
  line-height: 64px;
  letter-spacing: -0.02em;
  color: #fcfcfd;
`;

export const PopularContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  @media (max-width: 640px) {
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }
`;

export const PopularInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const Creator = styled.div`
  display: flex;
  margin: 16px 0;
`;

export const CreatorLabel = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #777e91;
`;

export const CreatorAvatar = styled.img``;

export const CreatorNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 16px;
  width: 100%;
  justify-content: space-between;
`;

export const CreatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const CreatorName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #fcfcfd;
`;

export const BidContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #23262f;
  box-shadow: 0px 64px 64px -48px rgba(31, 47, 70, 0.12);
  border-radius: 24px;
  width: 100%;
  height: auto;
  padding: 32px;
  margin-top: 40px;
`;

export const PlaceBidButton = styled.button`
  padding: 16px 24px;
  gap: 12px;

  width: 100%;
  height: 48px;

  background: #3772ff;
  border-radius: 90px;
  border: none;
  margin-top: 16px;
  cursor: pointer;
  margin-top: 40px;
`;

export const ViewItemButton = styled.button`
  padding: 16px 24px;
  gap: 12px;
  margin-top: 16px;
  width: 100%;
  height: 48px;
  background: none;
  color: white;
  border: 2px solid #23262f;
  border-radius: 90px;
  cursor: pointer;
`;

export const NextButton = styled.button`
  border-radius: 50%;
  background: none;
  border: 2px solid #23262f;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const PreviousButton = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  width: 40px;
  height: 40px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const CurrentBidLabel = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  text-align: center;

  color: #fcfcfd;
`;

export const PopularImage = styled(Image)`
  width: 50%;
  height: auto;
  border-radius: 20px;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const CurrentBidNumber = styled.div`
  font-size: 48px;
  line-height: 56px;
  color: #fcfcfd;
  text-align: center;
`;

export const CurrentBidUsd = styled.div`
  font-size: 24px;
  line-height: 32px;

  text-align: center;

  color: #777e91;
  margin-bottom: 16px;
`;

export const AuctionEnding = styled.div`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #fcfcfd;
  margin-bottom: 16px;
`;

export const CreatorNameWrapper = styled.div`
  display: flex;
`;

export const EndedLabel = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #777e91;
`;
