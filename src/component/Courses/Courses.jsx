import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  Link,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

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
        <Text
          children={creator}
          fontFamily={'body'}
          textTransform={'uppercase'}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size="xs"
        children={`leactures - ${lectureCount}`}
        textTransform={'uppercase'}
      />
      <Heading
        size="xs"
        children={`Views - ${view}`}
        textTransform={'uppercase'}
      />
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link as={ReactRouterLink} to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now </Button>
        </Link>
        <Button
          onClick={() => addToPlaylistHandler(id)}
          variant={'ghost'}
          colorScheme={'yellow'}
        >
          Add to Playlist{' '}
        </Button>
      </Stack>
    </VStack>
  );
};

export const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const addToPlaylistHandler = () => {
    console.log('Added to playlist');
  };
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
        {categories.map((item, index) => (
          <Button onClick={() => setCategory(item)} minW={'60'}>
            <Text key={index} children={item} />
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
          creator={'sample'}
          description={'sample'}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};
