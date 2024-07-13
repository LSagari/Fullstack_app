
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/indee';
import Employees from './pages/employees';
import Vendors from './pages/vendors';
import Emails from './pages/emails';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Admin Dashboard
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/employees">Employees</Button>
            <Button color="inherit" component={Link} to="/vendors">Vendors</Button>
            <Button color="inherit" component={Link} to="/emails">Emails</Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/emails" element={<Emails />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
