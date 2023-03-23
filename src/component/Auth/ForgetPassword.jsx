import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <Container p={'16'} h="95vh">
      <form style={{ width: '100%' }}>
        <Heading
          fontFamily={'body'}
          my="16"
          textTransform={'uppercase'}
          children="Forget Password"
          textAlign={['column', 'left']}
        />
        <VStack spacing={'8'} w={'100%'}>
          <Input
            required
            id="email"
            type={'email'}
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="abc@gmail.com"
            focusBorderColor="yellow.500"
          />

          <Button type="submit" w={'full'} colorScheme="yellow">
            send Reset link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
