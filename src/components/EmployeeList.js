import React, { useEffect, useState } from 'react';
import { getEmployees } from '../services/api';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getEmployees();
            setEmployees(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Employees</h2>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        {employee.name} - {employee.designation} - {employee.ctc} - {employee.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
