import { Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import MainLayout from '../../layouts';


const Tracks = () => {
 const router = useRouter()
  return (
  <MainLayout>
    <Grid >  
     <Card>
      <Grid >
         <h1>Track List</h1>
         <Button onClick={() => router.push('/tracks/create')}>Download</Button>
      </Grid>
    </Card>
    </Grid>
    </MainLayout>
  );
};
export default Tracks;