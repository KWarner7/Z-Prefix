// import React, { useState } from 'react';
// import { Button, Container, TextField, Typography, Paper } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const CreateAccount = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const navigate = useNavigate();

//     const handleCreation = (e) => {
//         e.preventDefault();
//         if (username === 'username' && password === 'password') {
//             setIsLoggedIn(true);
//             navigate("/");
//         } else {
//             alert('Invalid username or password');
//         }
//     };

//     return (
//         <Container component="main" maxWidth="xs">
//             <Paper elevation={3} style={{ padding: '20px', marginTop: '20vh' }}>
//                 {isLoggedIn ? (
//                     <Typography variant="h5" align="center">
//                         Welcome, {username}!
//                     </Typography>
//                 ) : (
//                     <>
//                         <Typography variant="h5" align="center" gutterBottom>
//                             Login
//                         </Typography>
//                         <form onSubmit={handleCreation}>
//                             <TextField
//                                 variant="outlined"
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 label="Username"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 autoFocus
//                             />
//                             <TextField
//                                 variant="outlined"
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 label="Password"
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                             <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 color="primary"
//                                 style={{ marginTop: '10px' }}
//                             >
//                                 Login
//                             </Button>
//                         </form>
//                     </>
//                 )}
//             </Paper>
//         </Container>
//     );
// };

// export default CreateAccount;