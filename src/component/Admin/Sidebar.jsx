import { VStack, Link, Button } from '@chakra-ui/react';
import React from 'react';
import { RiAddCircleFill } from 'react-icons/ri';
import { RiUser2Fill } from 'react-icons/ri';
import { RiEyeFill } from 'react-icons/ri';
import { RiDashboardFill } from 'react-icons/ri';
import { Link as ReactRouterLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <VStack
      spacing={'8'}
      padding={'16'}
      boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    >
      <LinkButton url={'dashboard'} Icon={RiDashboardFill} text="Dashboard" />
      <LinkButton
        url={'createcourse'}
        Icon={RiAddCircleFill}
        text="Create Courses"
      />
      <LinkButton url={'courses'} Icon={RiEyeFill} text="Courses" />
      <LinkButton url={'users'} Icon={RiUser2Fill} text="Users" />
    </VStack>
  );
};

export default Sidebar;

function LinkButton({ url, Icon, text }) {
  return (
    <Link as={ReactRouterLink} to={`/admin/${url}`}>
      <Button variant={'ghost'} fontSize={'larger'}>
        <Icon style={{ margin: '4px' }} />
        {text}
      </Button>
    </Link>
  );
}
