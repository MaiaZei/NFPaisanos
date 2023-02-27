import styled from 'styled-components';

export const PopularContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const PopularInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`;

export const Creator = styled.div`
  display: flex;
`;

export const CreatorAvatar = styled.img``;

export const CreatorName = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BidContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #23262f;
  box-shadow: 0px 64px 64px -48px rgba(31, 47, 70, 0.12);
  border-radius: 24px;
  width: 352px;
  height: 296px;
`;

export const PlaceBidButton = styled.button`
  padding: 16px 24px;
  gap: 12px;

  width: 352px;
  height: 48px;

  background: #3772ff;
  border-radius: 90px;
  border: none;
  margin-top: 16px;
  cursor: pointer;
`;

export const ViewItemButton = styled.button`
  padding: 16px 24px;
  gap: 12px;
  margin-top: 16px;
  width: 352px;
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
  margin-top: 16px;
`;

export const CurrentBidLabel = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  text-align: center;

  color: #fcfcfd;
`;
