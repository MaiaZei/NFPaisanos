import React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  Logo,
  Text,
  CreatedText,
  Line,
  Heart,
} from './styles';

import Image from 'next/image';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <Box>
      <Container>
        <Column>
          <Row>
            <Image src={logo} height={22} alt="logo paisanos" />
            <Logo>NFPaisanos</Logo>
          </Row>
          <Column>
            <Text>The New Creative Economy.</Text>
            <Line />
          </Column>
          <Row>
            <CreatedText>
              Created with <Heart>❤</Heart> by Maia
            </CreatedText>
          </Row>
        </Column>
      </Container>
    </Box>
  );
};
export default Footer;
