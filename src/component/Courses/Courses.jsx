import {
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

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
    </Container>
  );
};
