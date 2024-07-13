import React, { useEffect, useState } from 'react';
import { getEmails } from '../services/api';

const EmailList = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getEmails();
            setEmails(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Emails</h2>
            <ul>
                {emails.map((email, index) => (
                    <li key={index}>
                        To: {email.to}, Subject: {email.subject}, Body: {email.body}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmailList;
