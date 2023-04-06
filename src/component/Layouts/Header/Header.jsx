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

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} as={ReactRouterLink} to={url}>
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
    onClose();
  };
  return (
    <>
      <ColorModeSwitcher />

      <Button
        onClick={onOpen}
        colorScheme={'yellow'}
        zIndex={'overlay'}
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
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton
                onClose={onClose}
                url="/courses"
                title="Browse All Courses "
              />
              <LinkButton
                onClose={onClose}
                url="/request"
                title="Request For Course"
              />
              <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
              <LinkButton onClose={onClose} url="/about" title="About Us" />

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
                        <Link
                          onClick={onClose}
                          as={ReactRouterLink}
                          to="/profile"
                        >
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
                        <Link
                          onClick={onClose}
                          as={ReactRouterLink}
                          to="/admin/dashboard"
                        >
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
                    <Link onClick={onClose} as={ReactRouterLink} to="/login">
                      <Button colorScheme={'yellow'}>Login</Button>
                    </Link>
                    <p>OR</p>

                    <Link onClick={onClose} as={ReactRouterLink} to="/register">
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
