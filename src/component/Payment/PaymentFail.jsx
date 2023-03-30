import { Container, Heading, VStack, Link, Button } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link as ReactRouterLink } from 'react-router-dom';

const PaymentFail = () => {
  return (
    <Container h={'90vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'8'}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading children="Payment failed" textTransform={'uppercase'} />
        <Link as={ReactRouterLink} to="/subscribe">
          <Button variant={'ghost'}>Try again</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PaymentFail;
