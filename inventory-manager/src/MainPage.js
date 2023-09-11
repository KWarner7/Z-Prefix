import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, Typography, Container, Grid, Box, CardMedia, Button, Paper, } from '@mui/material';

function MainPage() {
  return (
    <Container style={{ marginTop: '40px' }}>

      {/* Welcome Message */}
      <Box mb={5} textAlign="center">
        <Typography variant="h2">Welcome to Inventory Manager</Typography>
      </Box>

      {/* Workout History */}
      <Grid item xs={12} md={6} lg={4}>
        <Link to="/LoginPage" style={{ textDecoration: 'none' }}>
          <Card elevation={10}>
            <CardMedia
              component="img"
              alt="Inventory Manager Image"
              height="700"
              style={{ objectFit: 'cover' }}
              image="https://cdn.pixabay.com/photo/2018/05/19/14/59/stock-markets-3413657_1280.jpg"
              title="Login"
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Login
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    </Container>
  );
}

export default MainPage;