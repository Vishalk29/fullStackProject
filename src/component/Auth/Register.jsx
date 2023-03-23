import {
  Avatar,
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

// file uplod style
export const fileUplodeCss = {
  '&:: file-selector-button': {
    cursor: 'pointer',
    marginleft: '-5%',
    width: '105%',
    border: 'none',
    height: '100%',
    color: '#ECC94B',
    backgroundColor: 'white',
  },
};

const fileUplodStyle = fileUplodeCss;

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');

  // This logic for selecting file and pasting to avatar
  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent="center" spacing={'16'}>
        <Heading
          textTransform={'uppercase'}
          fontFamily={'sans-serif'}
          children={' Registration '}
        />
        <form style={{ width: '100%' }}>
          <Box my={'4'} display={'flex'} justifyContent={'center'}>
            <Avatar src={imagePrev} size={'2xl'} />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children={'Name'} />
            <Input
              required
              type={'text'}
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="abc"
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
              placeholder="abc@gmail.com"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="password" children={'Password'} />
            <Input
              required
              id="password"
              type={'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="chooseAvatar" children={'Choose Avatar'} />
            <Input
              accept="/image/*"
              required
              id="chooseAvatar"
              type={'file'}
              focusBorderColor="yellow.500"
              css={fileUplodStyle}
              onChange={changeImageHandler}
            />
          </Box>

          <Button my={'4'} fontSize={'sm'} type="submit" colorScheme={'yellow'}>
            Sign Up
          </Button>
          <Box my={'4'}>
            Already Signed Up?{' '}
            <Link as={ReactRouterLink} to="/login">
              <Button colorScheme={'yellow'} variant="link">
                Login
              </Button>{' '}
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
