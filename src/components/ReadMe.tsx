import React from 'react';
import useReadme from '../hooks/useReadme'

interface IReadmeProps {
    username: string;
    repository: string;
}

const ReadMe: React.FC<IReadmeProps> = ({ username, repository }) => {
    const readme = useReadme({ username, repository });

    return (
        <>

            <div className='bg-gray-800 rounded-lg p-4 px-4 pt-6 mt-4 w-full h-full border-4 border-green-400 animate-neon overflow-x-auto'>
                <code className='text-green-400 font-mono'>README.md</code>
                <pre className='text-blue-400 font-mono whitespace-pre-wrap'>{readme}</pre>
            </div>
        </>
    );
};

export default ReadMe;
