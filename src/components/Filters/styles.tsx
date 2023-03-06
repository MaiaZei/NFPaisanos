import Image from 'next/image';
import styled from 'styled-components';

export const OptionsContainer = styled.div`
  position: relative;
  z-index: 10;
  background-color: #353945;
  width: 256px;
  border: 1px solid #353945;
  border-radius: 5px;
  flex-direction: column;
  z-index: 10;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  padding: 11px 0;

  @media (max-width: 640px) {
    margin: auto;
  }
`;

export const Option = styled.p`
  color: #fcfcfd;
  font-size: 14px;
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

  @media (max-width: 640px) {
    align-items: center;
    margin: auto;
  }
`;

export const DropdownArrow = styled(Image)`
  width: 10px;
  height: 10px;
  transform: ${(props) => props.rotate};
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

export const FilterButton = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.selected ? '#23262F;' : '#777e91')};
  padding: 6px 12px;
  gap: 10px;

  height: 28px;

  background: ${(props) => (props.selected ? '#E6E8EC' : 'none')};
  border: none;
  border-radius: 100px;
  cursor: pointer;
`;

export const FilterButtonsContainer = styled.div`
  display: flex;
  justify-content: right;
  padding: 10px;

  @media (max-width: 640px) {
    justify-content: center;
    margin: auto;
  }
`;

export const CircleColor = styled.div`
  background-color: ${(props) => props.color};
  width: 20px;
  height: 20px;
  border-radius: 100px;
  margin-right: 10px;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.selected ? '#141416' : 'none'};
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 256px;
  margin: 0 auto;
`;

export const TopFiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const BottomFiltersContainer = styled.div`
  display: flex;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
