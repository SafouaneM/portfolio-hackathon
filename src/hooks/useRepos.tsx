import { useState, useEffect } from 'react';

type Repo = {
    name: string;
    description: string;
    html_url: string;
    updated_at: string;
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
            //~ Start Ik ben niet hier zelf op gekomen
            const sortedRepos = data.sort((a: { updated_at: string | number | Date; }, b: { updated_at: string | number | Date; }) => {
                const dateA = new Date(a.updated_at);
                const dateB = new Date(b.updated_at);
                return dateB.getTime() - dateA.getTime();
            }).map((repo: { updated_at: string; } & Record<string, any>) => {
                const date = new Date(repo.updated_at);
                const formattedDate = date.toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                });
                //~ End Ik ben niet hier zelf op gekomen
                return {
                    ...repo,
                    updated_at: formattedDate,
                };
            });

            setRepos(sortedRepos);
        };

        fetchRepos();
    }, [username, token]);

    return repos;
};

export default useRepos;
