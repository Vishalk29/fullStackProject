import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  HStack,
  Link,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher.js';
import { RiDashboardFill, RiLogoutBoxFill, RiMenu5Fill } from 'react-icons/ri';
import { Link as ReactRouterLink } from 'react-router-dom';

const LinkButton = ({ url = '/', title = 'Home' }) => (
  <Link as={ReactRouterLink} to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = true;
  const user = {
    role: 'admin',
  };
  const logoutHandler = () => {
    console.log('logout');
  };
  return (
    <>
      <ColorModeSwitcher />

      <Button
        onClick={onOpen}
        colorScheme={'yellow'}
        width="12"
        height={'12'}
        rounded="full"
        position={'fixed'}
        top="6"
        left={'6'}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth={'1px'}>COURSE BUNDLER</DrawerHeader>
          <DrawerBody>
            <VStack>
              <LinkButton url="/" title="Home" />
              <LinkButton url="/Courses" title="Browse All Courses " />
              <LinkButton url="/request" title="Request For Course" />
              <LinkButton url="/contact" title="Contact Us" />
              <LinkButton url="/about" title="About Us" />

              <HStack
                justifyContent={'space-evenly'}
                position="absolute"
                bottom={'2rem'}
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link as={ReactRouterLink} to="/profile">
                          <Button variant={'ghost'} colorScheme={'yellow'}>
                            Profile
                          </Button>
                        </Link>
                        <Button variant={'ghost'} onClick={logoutHandler}>
                          <RiLogoutBoxFill />
                          logout
                        </Button>
                      </HStack>
                      {user && user.role === 'admin' ? (
                        <Link as={ReactRouterLink} to="/admin/dashboard">
                          <Button
                            colorScheme={'purple'}
                            variant="ghost"
                            style={{ margin: '4px' }}
                          >
                            <RiDashboardFill />
                            Dashboard
                          </Button>
                        </Link>
                      ) : (
                        <></>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link as={ReactRouterLink} to="/login">
                      <Button colorScheme={'yellow'}>Login</Button>
                    </Link>
                    <p>OR</p>

                    <Link as={ReactRouterLink} to="/register">
                      <Button colorScheme={'yellow'}>Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
