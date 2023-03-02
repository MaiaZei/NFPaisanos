import styled from 'styled-components';

export const Box = styled.div`
  padding: 80px 60px;
  background: black;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Logo = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #f4f5f6;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #e6e8ec;
  margin-bottom: 50px;
`;

export const CreatedText = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #777e91;
  display: flex;
`;

export const Line = styled.hr`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  border-color: #353945;
  margin-bottom: 32px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  height: 300px;

  border-top: 1px solid #353945;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Heart = styled.div`
  color: red;
  margin: 0 5px;
`;
