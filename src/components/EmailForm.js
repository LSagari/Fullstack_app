import React from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../services/api';
import { TextField, Button } from '@mui/material';

const EmailForm = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        await sendEmail(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField label="To" {...register('to')} required />
            <TextField label="Subject" {...register('subject')} required />
            <TextField label="Body" {...register('body')} required />
            <Button type="submit" variant="contained">Send Email</Button>
        </form>
    );
};

export default EmailForm;
