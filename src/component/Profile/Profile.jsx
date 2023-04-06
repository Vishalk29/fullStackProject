import React from 'react';
import {
  Avatar,
  Button,
  Container,
  Heading,
  Stack,
  VStack,
} from '@chakra-ui/react';
const Profile = () => {
  return (
    <Container minH={'95vh'} maxW={'container.lg'} py="8">
      <Heading children="Profile" m={'10'} textTransform={'uppercase'} />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding="8"
      >
        <VStack>
          <Avatar boxSize={'48'} />

          <Button colorScheme={'yellow'} variant={'ghost'}>
            Change Photo
          </Button>
        </VStack>
      </Stack>
    </Container>
  );
};

export default Profile;
