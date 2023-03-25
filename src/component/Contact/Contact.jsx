import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Link,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Container h={'92vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children="Contact Us" textTransform={'uppercase'} />

        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children={'Name'} />
            <Input
              required
              id="name"
              type={'text'}
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Abe"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children={'Email address'} />
            <Input
              required
              id="email"
              type={'email'}
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Abc@gmail.com"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="message" children={'Message'} />
            <Textarea
              required
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your message..."
              focusBorderColor="yellow.500"
            />
          </Box>
          <Button my={'4'} fontSize={'sm'} type="submit" colorScheme={'yellow'}>
            Send mail
          </Button>
          <Box my={'4'}>
            Request for course?{' '}
            <Link as={ReactRouterLink} to="/request">
              <Button colorScheme={'yellow'} variant="link">
                Click
              </Button>{' '}
              Here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
