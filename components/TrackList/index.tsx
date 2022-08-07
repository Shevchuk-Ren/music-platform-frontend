import { Box, Grid } from '@mui/material';
import React, { FC } from 'react';
import { ITrackProps } from './types';

const TrackList: FC<ITrackProps> = ({tracks}) => {

  return (
   <>
   <Grid container direction={'column'}>
    <Box>
        Hi
    </Box>

   </Grid>
    
   </>
  );
};
export default TrackList;