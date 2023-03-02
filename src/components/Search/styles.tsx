import Image from 'next/image';
import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 100%;
  background: black;
  height: fit-content;
  border: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    letter-spacing: -0.01em;
    color: #e6e8ec;
  }
  :-ms-input-placeholder {
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    letter-spacing: -0.01em;
    color: #e6e8ec;
  }
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  color: #e6e8ec;
`;

export const SearchContainer = styled.div`
  border-bottom: 1px solid #353945;
  height: 70px;
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled(Image)`
  cursor: pointer;
`;
