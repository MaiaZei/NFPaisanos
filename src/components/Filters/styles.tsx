import Image from 'next/image';
import styled from 'styled-components';

export const OptionsContainer = styled.div`
  position: absolute;
  z-index: 10;
  background-color: black;
  width: 256px;
  border: 1px solid #353945;
  border-radius: 5px;
  left: 0;

  flex-direction: column;
  z-index: 10;
  display: ${(props) => (props.show ? 'flex' : 'none')};
`;

export const Option = styled.p`
  color: #fcfcfd;
  font-size: 14px;
  padding: 11px 11px;
  line-height: 24px;
  border-bottom: 1px solid #353945;
  cursor: pointer;
  text-align: left;
`;

export const Dropdown = styled.button`
  color: #fcfcfd;

  font-size: 14px;
  text-align: left;
  background-color: black;
  border: none;
`;

export const DropdownDiv = styled.div`
  background-color: black;
  width: 256px;
  border: 1px solid #353945;
  border-radius: 5px;
  padding: 11px 11px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

export const DropdownArrow = styled(Image)`
  width: 10px;
  height: 10px;
  transform: ${(props) =>
    props.rotate ? 'rotate(0deg)' : 'rotate(-90deg)'};
  transition: transform 300ms ease-in-out;
`;

export const ArrowDiv = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid #353945;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
