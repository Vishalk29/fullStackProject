import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Link,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent="center" spacing={'16'}>
        <Heading
          fontFamily={'sans-serif'}
          children={' Welcome to CourseBundler '}
        />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children={'Email address'} />
            <Input
              required
              type={'email'}
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="password" children={'Password'} />
            <Input
              required
              type={'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box>
            <Link as={ReactRouterLink} to="/forgotpassword">
              <Button variant={'link'} fontSize={'sm'}>
                forgot password
              </Button>
            </Link>
          </Box>
          <Button my={'4'} fontSize={'sm'} type="submit" colorScheme={'yellow'}>
            Login
          </Button>
          <Box my={'4'}>
            New user?{' '}
            <Link as={ReactRouterLink} to="/register">
              <Button colorScheme={'yellow'} variant="link">
                Sign up
              </Button>{' '}
              Here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
