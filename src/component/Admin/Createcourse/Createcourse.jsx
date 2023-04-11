import {
  Box,
  Container,
  Grid,
  Heading,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
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

  const categories = [
    'web-Development',
    'Artifical intelligence',
    'App development',
    'Game Dvelopment',
    'Automation Testing',
  ];
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

          <VStack m={'auto'} spacing={'8'}>
            <Input
              type={'text'}
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              focusBorderColor="purple.300"
            />
            <Input
              type={'text'}
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description"
              focusBorderColor="purple.300"
            />
            <Input
              type={'text'}
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
              placeholder="Creator Name"
              focusBorderColor="purple.300"
            />
            <Select
              focusBorderColor="purple.300"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">Category</option>
              {categories.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default Createcourse;
