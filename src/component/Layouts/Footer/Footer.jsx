import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH="10vh">
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All rights reserved" color={'white'} />
          <Heading
            children="VKK Technology"
            color={'yellow.400'}
            size="sm"
            fontFamily={'body'}
          />
        </VStack>
        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          fontSize={'50'}
          color={'white'}
        >
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://www.instagran.com/" target="_blank" rel="noreferrer">
            <TiSocialInstagramCircular />
          </a>{' '}
          <a href="https://www.github.com/" target="_blank" rel="noreferrer">
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
