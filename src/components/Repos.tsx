import useRepos from "../hooks/useRepos";
const Repos = () => {
    const githubRepos = useRepos('safouanem','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')
    console.log(githubRepos)

    return (
        <div>
            <h2>My Github Repositories</h2>
            {githubRepos.map((repo) => (
                <div key={repo.name}>
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                    <a href={repo.html_url}>View on Github</a>
                </div>

            ))}
        </div>
    );
};

export default Repos;