import { Container, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

export const Courses = () => {
  const [keyword, setKeyword] = useState('');
  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All COURSES" margin={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        type="text"
        placeholder={'Search the Course...'}
        focusBorderColor="yellow.500"
      />
    </Container>
  );
};
