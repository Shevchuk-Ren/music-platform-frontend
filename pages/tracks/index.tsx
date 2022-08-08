import { Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import MainLayout from '../../layouts';
import { ITrack } from './types';
import styles from './Tracks.module.scss';
import data from './tracks-mock.json'
import TrackList from '../../components/TrackList';
import { routes } from '../../shared/constants/router';


const Tracks = () => {
 const router = useRouter();
 const tracks: ITrack[] = data;
  return (
  <MainLayout>
    <Grid>  
     <Card className={styles.card}>
      <Grid container justifyContent='space-between'>
         <h1>Track List</h1>
         <Button className={styles.button} onClick={() => router.push(routes.createTrack)}>Download</Button>
      </Grid>
    </Card>
    <TrackList tracks={tracks} />
    </Grid>
    </MainLayout>
  );
};
export default Tracks;