import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import './home.css';
import homImg from '../../assets/images/bg.png';
import introvideo from '../../assets/videos/intro.mp4';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']}>
            <Heading
              children="LEARN FROM THE EXPERTS"
              size={'2xl'}
              //   alignItems="center"
            />
            <Text children="Get the Valuable content here at reasonable price " />
            <Link as={ReactRouterLink} to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                Explore More
              </Button>
            </Link>
          </VStack>
          <Image
            className="homImgGraphics"
            boxSize={'md'}
            src={homImg}
            objectFit="contain"
          />
        </Stack>
      </div>
      <Box bg="blackAlpha.800">
        <Heading
          children="OUR BRAND"
          textAlign={'center'}
          color={'yellow.400'}
          fontFamily="body"
          padding={'auto'}
        />
        <HStack className="banner" justifyContent={'space-evenly'}>
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
      <div className="container2">
        <video
          autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablepictureInPicture
          disableRemotePlayback
          src={introvideo}
        ></video>
      </div>
    </section>
  );
};

export default Home;
