import { Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import MainLayout from '../../layouts';
import { ITrack } from './types';
import styles from './Tracks.module.css';
import data from './tracks-mock.json'


const Tracks = () => {
 const router = useRouter();
 const tracks: ITrack[] = data;
  return (
  <MainLayout>
    <Grid>  
     <Card className={styles.card}>
      <Grid container justifyContent='space-between'>
         <h1>Track List</h1>
         <Button onClick={() => router.push('/tracks/create')}>Download</Button>
      </Grid>
    </Card>
    </Grid>
    </MainLayout>
  );
};
export default Tracks;