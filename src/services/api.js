
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8082/api';

export const createEmployee = (employee) => axios.post(`${API_BASE_URL}/employees`, employee);
export const getEmployees = () => axios.get(`${API_BASE_URL}/employees`);

export const createVendor = (vendor) => axios.post(`${API_BASE_URL}/vendors`, vendor);
export const getVendors = () => axios.get(`${API_BASE_URL}/vendors`);

export const sendEmail = (email) => axios.post(`${API_BASE_URL}/emails/send`, email);
export const getEmails = () => axios.get(`${API_BASE_URL}/emails`);


