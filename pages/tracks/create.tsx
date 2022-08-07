
import { Card, Container, Grid } from '@mui/material';
import React, { FC } from 'react';
import ResponsiveAppBar from '../../components/NavBar';
import { Props } from '../../layouts/types';
import styles from './MainLayout.module.css';
import MainLayout from '../../layouts';

const Create: FC = () => {

  return (
<>
<MainLayout>
    <h1>Loading track</h1>
</MainLayout>
</>
  );
};
export default Create;