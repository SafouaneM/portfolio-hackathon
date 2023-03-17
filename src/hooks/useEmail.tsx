import { useState } from 'react';

function useEmail() {
    const [myEmail, setMyEmail] = useState('');
    const [myUsername, setMyUsername] = useState('');
    const [textquery, setTextquery] = useState('');

    const sendEmail = async (email: string, username: string, query: string) => {
        const formData = new FormData();
        formData.append('myUsername', username);
        formData.append('myEmail', email);
        formData.append('textquery', query);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/send/email', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                console.log('Email sent successfully');
            } else {
                console.error('Email sending failed');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return { myEmail, setMyEmail, myUsername, setMyUsername, textquery, setTextquery, sendEmail };
}

export default useEmail;
