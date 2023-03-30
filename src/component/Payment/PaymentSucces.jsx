import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Link,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link as ReactRouterLink } from 'react-router-dom';

const PaymentSucces = () => {
  return (
    <Container h={'90vh'} p={'16'}>
      <Heading
        my={'8'}
        fontSize={'xl'}
        textAlign={'center'}
        textTransform={'uppercase'}
        children={'You have pro pack'}
      />

      <VStack
        boxShadow={'lg'}
        pb="16"
        alignItems={'center'}
        borderRadius={'lg'}
      >
        <Box
          w={'full'}
          bg={'yellow.400'}
          p="4"
          css={{ borderRadius: '8px 8px 0 0 ' }}
        >
          <Text children="Payment success" />
        </Box>
        <Box p={'4'}>
          <VStack alignItems={'center'} px="8" mt={'4'} spacing={'8'}>
            <Text fontSize={'xl'}>
              Congratulation you're a pro member. You have access to premium
              content
            </Text>
            <Heading size={'4xl'}>
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>
        <Link as={ReactRouterLink} to="/profile">
          <Button variant={'ghost'}>Go to Your Profile</Button>
        </Link>

        <Heading children="Reference : shvsuhdkswks, shdjd" size={'xs'} />
      </VStack>
    </Container>
  );
};

export default PaymentSucces;
