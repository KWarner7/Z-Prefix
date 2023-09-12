import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import AdminPage from './AdminPage';
import VisitorPage from './VisitorPage';
import CreateAccount from './CreateAccount';

function App() {
  return (
      <div>
        <Container>
          <Box mt={4}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/LoginPage" element={<LoginPage />} />
              <Route path="/AdminPage" element={<AdminPage />} />
              <Route path="/VisitorPage" element={<VisitorPage />} />
              <Route path="/CreateAccount" element={<CreateAccount />} />
            </Routes>
          </Box>
        </Container>
      </div>
  );
}

export default App;
