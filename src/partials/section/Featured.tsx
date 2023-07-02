import useRepos from "../../hooks/useRepos";
import ReadMe from "../../components/ReadMe";
import React, {useState} from "react";
import Email from "../../components/Email";
import enTranslations from "../../translations/en.json";
import nlTranslations from "../../translations/nl.json";

const apiKey = process.env.REACT_APP_GHUBTOKEN  ?? 'public_key_that_does_not_exist';


export default function Featured() {
    const githubRepos = useRepos("safouanem", apiKey);
    const featuredProject = githubRepos.find((repo) => repo.name === "Safouane.GG") as {
        name: string,
        description: string
    } || {name: "Featured Repository", description: "Very cool descirption"};

    const [language, setLanguage] = useState("en");
    const translations = language === "en" ? enTranslations : nlTranslations;


    console.log(featuredProject.name)
    const latestRepos = githubRepos.slice(0, 4);
    console.log(githubRepos);





    return (

        <div>
            <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50"></div>


                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
                    <ReadMe username='SafouaneM' repository='SafouaneM'></ReadMe>
                    {/*skill set here*/}
                    <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-8">
                        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-8">
                            <h2 className="text-2xl font-bold mb-4 text-white">{translations["about-h"]}</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-8">
                                {translations["about-description"]}
                            </p>
                            <h2 className="text-2xl font-bold mb-4 text-white">Skill Set</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-8">
                                {translations["skill-description"]}
                            </p>
                            <div className='mb-4'>
                                <h3 className='text-1xl font-bold mb-4 text-white'>{translations["skill-sub"]}</h3>
                                <ul className='text-white'>
                                    <li>{translations["skill-explain-g"]}
                                    </li>
                                    <li>{translations["skill-explain-l"]}
                                    </li>
                                    <li>{translations["skill-explain-n"]}
                                    </li>
                                </ul>
                            </div>
                            <hr/>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-white mt-3">
                                <div className="skill-item">HTML ⭐</div>
                                <div className="skill-item">TailwindCSS ⭐</div>
                                <div className="skill-item">Laravel ⭐</div>
                                <div className="skill-item">JavaScript ⭐</div>
                                <div className="skill-item">CSS 🙂</div>
                                <div className="skill-item">PHP 🙂</div>
                                <div className="skill-item">Adobe XD 🙂</div>
                                <div className="skill-item">Node.js 🙂</div>
                                <div className="skill-item">React 👶</div>
                                <div className="skill-item">Express.js 👶</div>
                                <div className="skill-item">Typescript 👶</div>
                                <div className="skill-item">Gezellig zijn??? ⭐️</div>

                            </div>
                        </div>

                        {/* Image section */}
                        <div className="lg:col-span-1">
                            <div className="relative w-full h-64 lg:h-auto">
                                <img
                                    src="https://media.licdn.com/dms/image/D4E03AQEndnTwVCGuXQ/profile-displayphoto-shrink_200_200/0/1665769408223?e=1688601600&v=beta&t=biDT1jh9s3K9T5l9GQcjH4fLD0DjnTg7_sIsLu9UrdE"
                                    alt="Safouane Messaoudi"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 pb-8" id='project'>
                        <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
                            <div className="relative">
                                <img
                                    src="https://whatifgaming.com/wp-content/uploads/2022/05/Dark-Star-scaled.jpg"
                                    alt="riverr"
                                    className="w-full h-auto object-cover "
                                />
                                <div
                                    className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-4 sm:px-8">
                <span className="text-white font-bold text-xl sm:text-2xl tracking-wider mb-2">
                      FEATURED
                    </span>
                                    <h1 className="text-white text-3xl sm:text-5xl font-bold mb-6">
                                        {featuredProject?.name}
                                    </h1>
                                    <p className="text-white text-base sm:text-xl mb-8">
                                        {featuredProject?.description}
                                    </p>
                                    <a
                                        href="https://github.com/SafouaneM/Safouane.GG" target='_blank'
                                        className="text-white bg-red-600 py-2 sm:py-3 px-4 sm:px-6 rounded-full inline-block font-medium hover:bg-red-700 transition duration-300 ease-in-out"
                                    >
                                        Learn More
                                    </a>

                                </div>

                            </div>

                        </div>
                        <div className="col-span-1 md:col-span-1">
                            <div className="bg-white py-4 px-6 rounded-lg">
                                <h2 className="text-xl font-bold mb-4">Latest Updated Github Projects</h2>
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

                                                    {/*{console.log(typeof repo.updated_at)}*/}
                                                    {repo.pushed_at}
                                                 </span>
                                                <a href={repo.html_url}>View on Github</a>
                                            </>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Email title='skidipa' ></Email>


                </div>

            </div>
        </div>
    );
}
