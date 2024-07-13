
import React from 'react';
import { useForm } from 'react-hook-form';
import { createEmployee } from '../services/api';
import { TextField, Button } from '@mui/material';

const EmployeeForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    await createEmployee(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField label="Name" {...register('name')} required fullWidth margin="normal" />
      <TextField label="Designation" {...register('designation')} required fullWidth margin="normal" />
      <TextField label="CTC" type="number" {...register('ctc')} required fullWidth margin="normal" />
      <TextField label="Email" type="email" {...register('email')} required fullWidth margin="normal" />
      <Button type="submit" variant="contained">Create Employee</Button>
    </form>
  );
};

export default EmployeeForm;
