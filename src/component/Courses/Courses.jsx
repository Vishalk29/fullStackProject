import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Course = ({
  view,
  title,
  imgSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imgSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        children={title}
        size={'sm'}
        textAlign={['center', 'flex-start']}
        maxW="200px"
        fontFamily={'sans-serif'}
        noOfLines={3}
      />
      <Text children={description} noOfLines={2} />
      <HStack>
        <Text
          children={'creator'}
          fontWeight={'bold'}
          textTransform={'uppercase'}
        />
        <Text children={creator} fontFamily={'body'} />
      </HStack>
    </VStack>
  );
};

export const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const categories = [
    'web-Development',
    'Artifical intelligence',
    'App development',
    'Game Dvelopment',
    'Automation Testing',
  ];
  return (
    <Container
      minH={'95vh'}
      maxW="container.lg"
      paddingY={'8'}
      //   css={{
      //     '&::-webkit-scrollbar': {
      //       display: 'none',
      //     },
      //   }}
    >
      <Heading children="All COURSES" margin={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        type="text"
        placeholder={'Search the Course...'}
        focusBorderColor="yellow.500"
      />
      <HStack overflowX={'auto'} paddingY="8">
        {categories.map(item => (
          <Button onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
        flexWrap="wrap"
      >
        <Course
          view={23}
          title={'sample'}
          imgSrc={'sample'}
          id={'sample'}
          // addToPlaylistHandler: any;
          creator={'sample'}
          description={'sample'}
          lectureCount={2}
        />
      </Stack>
    </Container>
  );
};
