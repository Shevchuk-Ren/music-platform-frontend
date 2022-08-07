import { Box, Grid } from '@mui/material';
import React, { FC } from 'react';
import TrackItem from '../TrackItem';

import { ITrackProps } from './types';

const TrackList: FC<ITrackProps> = ({tracks}) => {

  return (
   <>
   <Grid container direction={'column'}>
    <Box>
        {
          tracks.map((track) => 
          <TrackItem key={track._id} track={track} isActive={false}/>
        )}
    </Box>

   </Grid>
    
   </>
  );
};
export default TrackList;