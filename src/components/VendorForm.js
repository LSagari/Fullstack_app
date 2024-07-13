import React from 'react';
import { useForm } from 'react-hook-form';
import { createVendor } from '../services/api';
import { TextField, Button } from '@mui/material';

const VendorForm = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        await createVendor(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField label="Name" {...register('name')} required />
            <TextField label="Email" type="email" {...register('email')} required />
            <TextField label="UPI" {...register('upi')} required />
            <Button type="submit" variant="contained">Create Vendor</Button>
        </form>
    );
};

export default VendorForm;
