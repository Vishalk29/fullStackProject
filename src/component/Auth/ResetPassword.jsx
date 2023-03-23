import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');

  const param = useParams();
  return (
    <Container p={'16'} h="95vh">
      <form style={{ width: '100%' }}>
        <Heading
          fontFamily={'body'}
          my="16"
          textTransform={'uppercase'}
          children="Reset password"
          textAlign={['column', 'left']}
        />
        <VStack spacing={'8'} w={'100%'}>
          <Input
            required
            type={'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="New password"
            focusBorderColor="yellow.500"
          />

          <Button type="submit" w={'full'} colorScheme="yellow">
            change the password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
