import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface IUseReadmeProps {
    username: string;
    repository: string;
}

const useReadme = ({ username, repository }: IUseReadmeProps) => {
    const [readme, setReadme] = useState('');

    useEffect(() => {
        const fetchReadme = async () => {
            const url = `https://raw.githubusercontent.com/${username}/${repository}/master/README.md`;
            const response = await fetch(url);
            const text = await response.text();
            setReadme(text);
        };

        fetchReadme();
    }, [username, repository]);

    return <ReactMarkdown>{readme}</ReactMarkdown>;

};

export default useReadme;
