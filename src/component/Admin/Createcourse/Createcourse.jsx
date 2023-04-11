import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
  color,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { fileUplodeCss } from '../../Auth/Register';

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

  // This logic for selecting file and pasting to avatar
  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
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
            <Input
              accept="/image/*"
              required
              type={'file'}
              focusBorderColor="purple.300"
              css={{
                ...fileUplodeCss,
                '&::file-selector-button': {
                  color: 'purple',
                },
              }}
              onChange={changeImageHandler}
            />

            {imagePrev && (
              <Image src={imagePrev} objectFit={'contain'} boxSize={'64'} />
            )}
            <Button type="submit" w={'full'} colorScheme="purple">
              Submit
            </Button>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default Createcourse;
