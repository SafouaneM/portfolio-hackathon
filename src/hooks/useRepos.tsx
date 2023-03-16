import { useState, useEffect } from 'react';

type Repo = {
    name: string;
    description: string;
    html_url: string;
    created_at: string;
};

const useRepos = (username: string, token: string): Repo[] => {
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        const fetchRepos = async () => {
            const response = await fetch(`https://api.github.com/users/${username}/repos`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            const sortedRepos = data.sort((a: { created_at: string | number | Date; }, b: { created_at: string | number | Date; }) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

            setRepos(sortedRepos);

        };
        fetchRepos();
    }, [username, token]);

    return repos;
};

export default useRepos;
