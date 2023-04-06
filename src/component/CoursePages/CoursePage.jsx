import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import introvideo from '../../assets/videos/intro.mp4';

const CoursePage = () => {
  const lectureNumber = 0;

  const lectures = [
    {
      _id: 'sasdsdd',
      title: 'sample',
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
    </Grid>
  );
};

export default CoursePage;
