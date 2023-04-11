import { Box, Container, Grid, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
const Createcourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  return (
    <Grid
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
      css={{
        cursor: `url(${cursor}) ,default`,
      }}
    >
      <Container py={'16'}>
        <form>
          <Heading
            textTransform={'uppercase'}
            children="Create Course"
            my={'16'}
            textAlign={['center', 'left']}
          />
          <Input
            type={'text'}
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
            focusBorderColor="purple.300"
          />
          <VStack m={'auto'} spacing={'8'}></VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default Createcourse;
