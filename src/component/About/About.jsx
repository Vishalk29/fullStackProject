import {
  Avatar,
  Container,
  Text,
  Link,
  Heading,
  Stack,
  VStack,
  Button,
  HStack,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link as ReactRouterLink } from 'react-router-dom';
import introvideo from '../../assets/videos/intro.mp4';
import termsAndCondition from '../../assets/doc/termsAndCondition';
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
const VideoPlayer = () => (
  <video
    autoPlay
    loop
    muted
    controls
    controlsList="nodownload nofullscreen noremoteplayback"
    disablePictureInPicture
    disableRemotePlayback
    src={introvideo}
  ></video>
);
const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      fontFamily={'mono'}
      size={'md'}
      textAlign={['center', 'left']}
      children={'Terms and condition'}
      my="4"
    />
    <Box h={'sm'} p="4" overflow={'scroll'}>
      <Text
        fontFamily={'heading'}
        letterSpacing={'widest'}
        textAlign={['center', 'left']}
      >
        {termsAndCondition}
      </Text>
      <Heading
        size={'xs'}
        children="Refund only applicable for cancellation within 7 days"
        my={'4'}
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} p={'16'} boxShadow={'lg'}>
      <Heading children="About us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'sans-serif'} m="8" textAlign={['center', 'left']}>
          We are a video streaming platform with some premium course availble
          only for premium users.
        </Text>
        <Link as={ReactRouterLink} to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Plans
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />

      <TandC termsAndCondition={termsAndCondition} />
      <HStack my={'4'} p="4">
        <RiSecurePaymentFill />
        <Heading
          children={'Payment is secured by Razorpay'}
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
        />
      </HStack>
    </Container>
  );
};

export default About;
