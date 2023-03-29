import { Container, Heading, VStack, Box, Text } from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
  return (
    <Container h={'90vh'} p="16">
      <Heading children="Welcome" my={'8'} textAlign="center" />

      <VStack
        boxShadow={'lg'}
        alignItems="stretch"
        spacing={'0'}
        borderRadius={'lg'}
      >
        <Box bg={'yellow.400'} p={'4'} css={{ borderRadius: '8px 8px 0 0  ' }}>
          <Text children={`pro pack - ₹299.00 `} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
