import React, { useEffect, useState } from 'react';
import { getVendors } from '../services/api';

const VendorList = () => {
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getVendors();
            setVendors(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Vendors</h2>
            <ul>
                {vendors.map((vendor) => (
                    <li key={vendor.id}>
                        {vendor.name} - {vendor.email} - {vendor.upi}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VendorList;
