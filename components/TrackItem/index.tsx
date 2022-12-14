import React, { FC } from 'react';
import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ITrackItemProps } from './types';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import styles from './TrackItem.module.scss';
import { Delete } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { LinkComponent } from '../Link';
import { routes } from '../../shared/constants/router';

const TrackItem: FC<ITrackItemProps> = ({track, isActive}) => {
    const router = useRouter();
    const theme = useTheme();
  return (
<Card className={styles.card}>
<Box sx={{ display: 'flex', flexDirection: 'column' }}>
  <CardContent sx={{ flex: '1 0 auto' }}>
    <Typography sx={[{
      '&:hover': {
        color: 'red',
        textDecoration: 'underline #32557f dashed',
      },
    },
  ]} component="div" variant="h5" onClick={() => router.push(routes.tracks + '/' + track._id)}>
    {track.name}
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" component="div">
      {track.artist}
    </Typography>
  </CardContent>
  <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
    <IconButton aria-label="previous">
      {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
    </IconButton>
    <IconButton aria-label="play/pause">
      {isActive ? <PauseIcon /> :  <PlayArrowIcon sx={{ height: 38, width: 38 }} />}
    </IconButton>
    <IconButton aria-label="next">
      {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
    </IconButton>
    
  </Box>
</Box>
<Box style={{position: 'relative'}}>
<CardMedia
  component="img"
  sx={{ width: 186 }}
  image={track.picture}
  alt="Live from space album cover"
/>
  <IconButton style={{ position: 'absolute', bottom: 10, right: 10, borderRadius: '50%', width:'40px', background: 'white', opacity: '0.7' }} aria-label="delete">
     <Delete color={'error'} />
    </IconButton>
    </Box>
</Card>

  );
};
export default TrackItem;