import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUplodeCss } from '../Auth/Register';
const Profile = () => {
  const user = {
    name: 'Vishal',
    email: 'kulkarni.vishal002@gmail.com',
    createdAt: String(new Date().toISOString()),
    role: 'user',
    subscription: {
      status: 'active',
    },
    playlist: [
      {
        course: 'sdsdf',
        poster: 'gshsh',
      },
    ],
  };

  const removePlaylistHandler = id => {
    console.log(id);
  };

  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault();
    console.log(image);
  };
  const { isOpen, onClose, onOpen } = useDisclosure();
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
          <Button onClick={onOpen} colorScheme={'yellow'} variant={'ghost'}>
            Change Photo
          </Button>
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children={'Name'} fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children={'Email'} fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children={'createdAt'} fontWeight={'bold'} />
            <Text children={user.createdAt.split('T')[0]} />
          </HStack>

          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription" fontWeight={'bold'} />
              {user.subscription.status === 'active' ? (
                <Button colorScheme="yellow" variant={'ghost'}>
                  Cancel Subscription
                </Button>
              ) : (
                <Link as={ReactRouterLink} to="/subscribe">
                  <Button colorScheme="yellow">Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link as={ReactRouterLink} to="/updateprofile">
              <Button>Update Profile</Button>
            </Link>

            <Link as={ReactRouterLink} to="/changepassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Heading children="Playlist" size={'md'} my={'8'} />

      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          p={'4'}
        >
          {user.playlist.map(element => (
            <VStack w={'48'} m={'3'} key={element.course}>
              <Image
                boxSize={'full'}
                objectFit={'contain'}
                src={element.poster}
              />

              <HStack>
                <Link as={ReactRouterLink} to={`/course/${element.course}`}>
                  <Button colorScheme="yellow" variant={'ghost'}>
                    Watch Now
                  </Button>
                </Link>
                <Button onClick={() => removePlaylistHandler(element.course)}>
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}

      <ChangeImageBox
        changeImageSubmitHandler={changeImageSubmitHandler}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Container>
  );
};

export default Profile;
function ChangeImageBox({ isOpen, onClose, changeImageSubmitHandler }) {
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  // This logic for selecting file and pasting to avatar
  const changeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  const closeHandler = () => {
    onClose();
    setImage('');
    setImagePrev('');
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => changeImageSubmitHandler(e, image)}>
              <VStack spacing={'8'}>
                {imagePrev && <Avatar src={imagePrev} boxSize={'48'} />}
                <Input
                  type={'file'}
                  css={fileUplodeCss}
                  onChange={changeImage}
                />
                <Button colorScheme="yellow" type="submit" w={'full'}>
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button mr={'3'} onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
