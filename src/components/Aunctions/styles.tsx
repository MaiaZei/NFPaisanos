import Image from 'next/image';
import styled from 'styled-components';

export const AunctionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2% 5%;
  margin-left: 5%;
  padding-bottom: 50px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 100%;
    grid-gap: 0;
    margin-left: 0;
  }
`;
export const AunctionContainer = styled.div`
  border-radius: 20px;
  background-color: #23262f;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;

  @media (max-width: 640px) {
    margin: 16px 0;
  }
`;

export const AunctionImage = styled(Image)`
  border-radius: 20px;
  width: 100%;
  height: auto;
`;

export const WishlistIcon = styled(Image)`
  width: 60px;
  height: 60px;
`;

export const Type = styled.p`
  background-color: ${(props) => props.color};
  color: #fcfcfd;
  width: fit-content;
  height: fit-content;
  padding: 5px 10px;
  border-radius: 10px;
`;

export const PlaceBidButton = styled.button`
  padding: 0 5px;
  color: #fcfcfd;
  justify-content: center;
  align-items: center;
  background: none;
  border-radius: 90px;
  border: none;
  width: 100%;
  cursor: pointer;
`;

export const PlaceBidButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlaceBidButtonText = styled.p`
  margin-right: 10px;
`;

export const HoverThings = styled.div`
  position: absolute;
  width: 80%;
  left: 10%;
  top: 5%;
  display: none;
  height: 65%;
  ${AunctionContainer}:hover & {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const AuctionInstantPrice = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  height: auto;
  text-transform: uppercase;
  color: #45b36b;
  border: 2px solid #45b36b;
  border-radius: 5px;
  padding: 5px;
`;

export const AuctionBottomInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AuctionTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #fcfcfd;
`;

export const StockLabel = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #e6e8ec;
`;

export const BidUsersContainer = styled.div`
  display: flex;
  justify-content: left;
`;

export const BidUserImage = styled(Image)`
  width: 24px;
  height: 24px;
  position: relative;
  left: ${(props) => props.left * -8}px;
`;

export const BidLabel = styled.p`
  font-weight: 400;
  font-size: 11px;
  line-height: 20px;
  color: #777e91;
  margin-right: 5px;
`;

export const BidText = styled.p`
  font-weight: 600;
  font-size: 11px;
  line-height: 20px;
  color: #fcfcfd;
`;
