import {
  Avatar,
  Container,
  Text,
  Heading,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['6', '16']} padding={'8'}>
    <VStack>
      <Avatar
        boxSize={['40', '48']}
        src="https://avatars.githubusercontent.com/u/88853198?s=400&u=9b3e5a5a80da607f0b4191cd5404e5c97752e543&v=4"
      />
      <Text children="Co-Founder" opacity={'.7'} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Vishal kulkarni" size={['md', 'xl']} />
      <Text
        textAlign={'center'}
        children={`Hi , I am Full stack developer and my mission is learn skill as much i can and teach a people`}
      />
    </VStack>
  </Stack>
);
const About = () => {
  return (
    <Container maxW={'container.lg'} p={'16'} boxShadow={'lg'}>
      <Heading children="About us" textAlign={['center', 'left']} />
      <Founder />
    </Container>
  );
};

export default About;
