import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, Typography, Container, Grid, Box, CardMedia } from '@mui/material';

function MainPage() {
  return (
    <Container style={{ marginTop: '40px' }}>

      {/* Welcome Message */}
      <Box mb={5} textAlign="center">
        <Typography variant="h2">Welcome to Inventory Manager</Typography>
      </Box>

      {/* Workout History */}
      <Grid item xs={6} md={3} lg={2}>
        <Link to="/LoginPage" style={{ textDecoration: 'none' }}>
          <Card elevation={10}>
            <CardMedia
              component="img"
              alt="Inventory Manager Image"
              height="400"
              style={{ objectFit: 'cover' }}
              image="https://cdn.pixabay.com/photo/2022/02/19/12/05/delivery-7022432_1280.png"
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
      <div></div>
      <Grid item xs={12} md={6} lg={4}>
        <Link to="/CreateAccount" style={{ textDecoration: 'none' }}>
          <Card elevation={10}>
            <CardMedia
              component="img"
              alt="Create Account"
              height="300"
              style={{ objectFit: 'cover' }}
              image="https://cdn.pixabay.com/photo/2016/03/06/17/42/business-idea-1240831_1280.jpg"
              title="Login"
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Create Account
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