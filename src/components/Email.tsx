import React, { useState } from 'react';
import useEmail from "../hooks/useEmail";

interface EmailProps {
    title: string;
}

const Email: React.FC<EmailProps> = ({ title }) => {
    const { sendEmail } = useEmail();
    const [myEmail, setMyEmail] = useState('');
    const [myUsername, setMyUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await sendEmail(myEmail, myUsername, message);
        setMyEmail('');
        setMyUsername('');
        setMessage('');
    };

    return (
        <div className="maincontainer" id='contact'>
            <div className="container mb-5 mt-5 text-center text-xl">
                <div className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 border-4 border-green-400 animate-neon">


                <a href='mailto:safouane.m09@gmail.com' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                   Contact me :)
                </a>
                </div>
                {/* TODO This is temporary turned off  for now, as I don't have the time to put up a server for the back end as I'm busy*/}
                {/*<form onSubmit={handleSubmit} className='bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4'>*/}
                {/*    <div className="mb-4">*/}
                {/*        <label className='block  font-bold mb-2 text-blue-400 font-mono' htmlFor="email">*/}
                {/*            Email*/}
                {/*        </label>*/}
                {/*        <input*/}
                {/*            type="email"*/}
                {/*            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"*/}
                {/*            id="email"*/}
                {/*            aria-describedby="emailHelp"*/}
                {/*            placeholder="Enter email"*/}
                {/*            value={myEmail}*/}
                {/*            onChange={(e) => setMyEmail(e.target.value)}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className="mb-4">*/}
                {/*        <label className='block font-bold mb-2 text-blue-400 font-mono' htmlFor="username">*/}
                {/*            Username*/}
                {/*        </label>*/}
                {/*        <input*/}
                {/*            type="text"*/}
                {/*            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"*/}
                {/*            id="username"*/}
                {/*            placeholder="Enter username"*/}
                {/*            value={myUsername}*/}
                {/*            onChange={(e) => setMyUsername(e.target.value)}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className="mb-8">*/}
                {/*        <label className='block text-blue-400 font-mono font-bold mb-2' htmlFor="message">*/}
                {/*            Message*/}
                {/*        </label>*/}
                {/*        <textarea*/}
                {/*            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"*/}
                {/*            id="message"*/}
                {/*            placeholder="Enter message"*/}
                {/*            value={message}*/}
                {/*            onChange={(e) => setMessage(e.target.value)}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className="flex items-center justify-between">*/}
                {/*        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">*/}
                {/*            Send Mail*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</form>*/}

            </div>

        </div>

    );
};

export default Email;
