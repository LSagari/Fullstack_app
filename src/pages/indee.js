import React from 'react';
import { Container, Typography } from '@mui/material';
import EmployeeForm from '../components/EmployeeForm';
import VendorForm from '../components/VendorForm';
import EmailForm from '../components/EmailForm';

const Home = () => {
    return (
        <Container>
            <Typography variant="h2">Admin Dashboard</Typography>
            <EmployeeForm />
            <VendorForm />
            <EmailForm />
        </Container>
    );
};

export default Home;
