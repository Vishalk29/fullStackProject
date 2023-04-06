import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import introvideo from '../../assets/videos/intro.mp4';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: 'sasdsdd',
      title: 'sample',
      description: 'sdsd sdsdfgf sfdsdfff',
      video: {
        url: 'fgvhfbfk',
      },
    },
    {
      _id: 'sasdsdd2',
      title: 'sample2',
      description: 'sdsd sdsdfgf sfdsdfff',
      video: {
        url: 'fgvhfbfk',
      },
    },
    {
      _id: 'sasdsdd3',
      title: 'sample3',
      description: 'sdsd sdsdfgf sfdsdfff',
      video: {
        url: 'fgvhfbfk',
      },
    },
  ];

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          controls
          muted
          controlsList="nodownload  noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introvideo}
        ></video>
        <Heading
          m={'4'}
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading m={'4'} children={'Description'} />
        <Text ml={'5'} children={`${lectures[lectureNumber].description}`} />
      </Box>

      <VStack>
        {lectures.map((element, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: '0',
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
