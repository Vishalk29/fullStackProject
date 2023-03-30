import {
  Container,
  Heading,
  VStack,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
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
        <Box p={'4'}>
          <VStack textAlign={'center'} px="8" spacing={'8'} mt={'4'}>
            <Text children="Join pro pack get access to all content" />
            <Heading size={'md'} children="₹299.00 only " />
          </VStack>
          <Button my={'8'} w="full" colorScheme={'yellow'}>
            Buy Now
          </Button>
        </Box>
        <Box
          bg={'blackAlpha.600'}
          p={'4'}
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Heading
            color={'white'}
            size="sm"
            textTransform={'uppercase'}
            children={'100% refund at cancellation'}
          />
          <Text
            fontSize={'xs'}
            color={'white'}
            children={' Terms & condtion apply'}
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
