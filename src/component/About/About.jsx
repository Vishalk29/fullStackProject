import { Container, Heading } from '@chakra-ui/react';
import React from 'react';

const About = () => {
  return (
    <Container maxW={'container.lg'} p={'16'} boxShadow={'lg'}>
      <Heading children="About us" textAlign={['center', 'left']} />
    </Container>
  );
};

export default About;
