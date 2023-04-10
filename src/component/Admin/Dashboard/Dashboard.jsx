import { Box, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
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
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
