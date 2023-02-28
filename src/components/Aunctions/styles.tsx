import Image from 'next/image';
import styled from 'styled-components';

export const AunctionsGrid = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 20px;
`;
export const AunctionContainer = styled.div`
  border-radius: 20px;
  background-color: #23262f;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const AunctionImage = styled(Image)`
  border-radius: 20px;
  margin: auto;
  width: 90%;
  height: auto;
  margin-top: 20px;
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
  padding: 5px 10px;
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
  height: 100%;
  padding-bottom: 24%;
  ${AunctionContainer}:hover & {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
