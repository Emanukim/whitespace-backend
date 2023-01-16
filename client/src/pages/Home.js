import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import Navbar from '../components/Navbar';
import Typography from '@mui/material/Typography';
import background from "../background.jpeg"



import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const mdTheme = createTheme();
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Home = () => {
  return (
  
    <ThemeProvider theme={mdTheme}>
      <Navbar props="home" />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>

              Container 1
              <Grid item xs={12} md={8} lg={9}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}></Paper>
              </Grid>

              Container 2
              <Grid item xs={6} md={4} lg={3}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }} ></Paper>
              </Grid>

              Container 3
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}></Paper>
              </Grid>


          <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid>
              
            </Grid>
          </Grid>

      

    </ThemeProvider>
);
}

export default Home


