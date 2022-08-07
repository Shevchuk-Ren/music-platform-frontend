
import { Container } from '@mui/material';
import React, { FC } from 'react';
import ResponsiveAppBar from '../components/NavBar';
import { Props } from './types';
import styles from './MainLayout.module.css';

const MainLayout: FC<Props> = ({ children }) => {

  return (
   <>
    <ResponsiveAppBar />
    <Container className={styles.container}>
    {children}
    </Container>
   </>
  );
};
export default MainLayout;