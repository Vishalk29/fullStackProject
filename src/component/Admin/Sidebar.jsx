import { VStack, Link, Button } from '@chakra-ui/react';
import React from 'react';
import { RiAddCircleFill } from 'react-icons/ri';
import { RiUser2Fill } from 'react-icons/ri';
import { RiEyeFill } from 'react-icons/ri';
import { RiDashboardFill } from 'react-icons/ri';
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  return (
    <VStack
      spacing={'8'}
      padding={'16'}
      boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    >
      <LinkButton
        url={'dashboard'}
        Icon={RiDashboardFill}
        text="Dashboard"
        active={location.pathname === '/admin/dashboard'}
      />
      <LinkButton
        url={'createcourse'}
        Icon={RiAddCircleFill}
        text="Create Courses"
        active={location.pathname === '/admin/createcourse'}
      />
      <LinkButton
        url={'courses'}
        Icon={RiEyeFill}
        text="Courses"
        active={location.pathname === '/admin/courses'}
      />
      <LinkButton
        url={'users'}
        Icon={RiUser2Fill}
        text="Users"
        active={location.pathname === '/admin/users'}
      />
    </VStack>
  );
};

export default Sidebar;

function LinkButton({ url, Icon, text, active }) {
  return (
    <Link as={ReactRouterLink} to={`/admin/${url}`}>
      <Button
        variant={'ghost'}
        fontSize={'larger'}
        colorScheme={active ? 'linkedin' : ''}
      >
        <Icon style={{ margin: '4px' }} />
        {text}
      </Button>
    </Link>
  );
}
