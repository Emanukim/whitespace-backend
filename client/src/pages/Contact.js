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



const mdTheme = createTheme();

const Contact = () => {
  return (
    <ThemeProvider theme={mdTheme}>
      <Navbar props="about" />

      <Box sx={{ display: 'flex' }}>
        <Box component="main" sx={{ backgroundColor: (theme) => theme.palette.grey[100], flexGrow: 1, height: '100vh', overflow: 'auto'}}>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>

              Container 1
              <Grid item xs={12} md={8} lg={9}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}></Paper>
              </Grid>

              Container 2
              <Grid item xs={12} md={4} lg={3}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }} ></Paper>
              </Grid>

              Container 3
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}></Paper>
              </Grid>

            </Grid>
          </Container>
        </Box>
      </Box>

    </ThemeProvider>
    
  )
}

export default Contact