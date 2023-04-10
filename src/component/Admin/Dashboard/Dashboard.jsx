import { Box, Grid, HStack, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';

const Databox = ({ title, qty, qtyPercentage, profit }) => (
  <Box
    w={['full', '20%']}
    p={'8'}
    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    borderRadius={'lg'}
  >
    <Text children={title} />
    <HStack spacing={'6'}>
      <Text fontSize={'2xl'} fontWeight={'bold'} children={qty} />
      <HStack>
        <Text children={`${qtyPercentage}%`} />
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
    </HStack>
  </Box>
);

const Dashboard = () => {
  return (
    <Grid
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
      css={{
        cursor: `url(${cursor}) ,default`,
      }}
    >
      <Box boxSizing="border-box" py={'16'} px={['4', '0']}>
        <Text
          children={`Last change was on ${String(new Date()).split('G')[0]}`}
          textAlign={'center'}
          opacity={0.5}
        />
        <Heading
          children="Dashboard"
          ml={['0', '16']}
          mb="16"
          textAlign={['center', 'left']}
        />

        <Stack
          direction={['column', 'row']}
          minH={'24'}
          justifyContent={'space-evenly'}
        >
          <Databox title="View" qty={123} qtyPercentage={30} profit={true} />
          <Databox title="Users" qty={23} qtyPercentage={78} profit={true} />
          <Databox
            title="Subscription"
            qty={12}
            qtyPercentage={20}
            profit={false}
          />
        </Stack>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
