import { Button, Container, Heading, VStack, Link } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link as ReactRouterLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container h={'90vh'}>
      <VStack justifyContent={'center'} h="full" spacing={'8'}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading children="Page not found" />

        <Link as={ReactRouterLink} to="/">
          <Button variant={'ghost'}>Go to Home</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default NotFound;
