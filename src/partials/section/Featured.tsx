import useRepos from "../../hooks/useRepos";

export default function Featured() {
    const githubRepos = useRepos("safouanem", "");
    const featuredProject = githubRepos.find((repo) => repo.name === "Genshin-Web-App") as { name: string, description: string };;
    console.log(featuredProject)
    const latestRepos = githubRepos.slice(0, 4);
    console.log(githubRepos);
    return (
        <div>
            <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50"></div>

                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
                            <div className="relative">
                                <img
                                    src="https://via.placeholder.com/800x400"
                                    alt="News Item"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8">
                    <span className="text-white font-bold text-2xl tracking-wider mb-2">
                      FEATURED
                    </span>
                                        <h1 className="text-white text-5xl font-bold mb-6">
                                            {featuredProject.name}
                                        </h1>
                                        <p className="text-white text-xl mb-8">
                                            {featuredProject.description}
                                        </p>
                                        <a
                                            href="#"
                                            className="text-white bg-red-600 py-3 px-6 rounded-full inline-block font-medium hover:bg-red-700 transition duration-300 ease-in-out"
                                        >
                                            Learn More
                                        </a>

                                    </div>

                            </div>

                        </div>
                        <div className="col-span-1 md:col-span-1">
                            <div className="bg-white py-4 px-6 rounded-lg">
                                <h2 className="text-xl font-bold mb-4">Latest Projects</h2>
                                <ul>
                                    {latestRepos.map((repo) => (
                                        <li className="mb-4" key={repo.name}>
                                            <>
                                                <a
                                                    href="#"
                                                    className="text-gray-700 hover:text-red-600 transition duration-300 ease-in-out"
                                                >
                                                    {repo.name}
                                                </a>
                                                <span className="text-gray-500 block text-sm">
                          {repo.created_at}
                        </span>
                                                <a href={repo.html_url}>View on Github</a>
                                            </>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
