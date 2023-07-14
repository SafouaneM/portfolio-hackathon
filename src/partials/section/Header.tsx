import React, { useState } from "react";
import enTranslations from "../../translations/en.json";
import nlTranslations from "../../translations/nl.json";

interface HeaderProps {
    language: "en" | "nl";
    toggleLanguage: () => void;
}

const Header: React.FunctionComponent<HeaderProps> = ({ language, toggleLanguage }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const translations = language === "nl" ? enTranslations : nlTranslations;


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <div>
            <div className="sticky top-0 z-50 flex justify-between items-center bg-black px-5 py-4 text-white">
                <div className="flex justify-start items-center">
                        <p>Safouane Messaoudi</p>
                </div>
                <nav className="hidden md:flex justify-end items-center">
                    <ul className="flex justify-start items-start py-8 px-6 gap-8">
                        <li className="mx-4">
                            <a href="/">Home</a>
                        </li>
                        <li className="mx-4">
                            <a href="#project">Projects</a>
                        </li>
                        <li className="mx-4">
                            <a href="#contact">Contact</a>
                        </li>
                        <button className='language-toggle-button ' onClick={toggleLanguage}>
                            {language === "en" ? "🇬🇧 English" : "🇳🇱 Dutch"}
                        </button>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1GCGV-LowOKZEFH0HUkVbwdsSVO1hh8ZA/view?usp=sharing" target="_blank"
                                className="bg-red-600 text-white py-2 px-6 rounded-full font-medium ml-4 hover:bg-red-700 transition duration-300 ease-in-out"
                            >
                                Resume/CV
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav className="flex justify-end items-center md:hidden">
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 z-10"
                        aria-label="Toggle menu opener"
                    >
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            {menuOpen ? (
                                <path
                                    className="block"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.278 16.864l-1.414 1.414L12 13.414l-4.864 4.864-1.414-1.414L10.586 12 5.722 7.136l1.414-1.414L12 10.586l4.864-4.864 1.414 1.414L13.414 12l4.864 4.864z"
                                />
                            ) : (
                                <path
                                    className="block"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16v2H4V6zm0 7h16v-2H4v2zm0 5h16v-2H4v2z"
                                />
                            )}
                        </svg>
                    </button>
                </nav>
            </div>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out  ${
                    menuOpen ? "opacity-100" : "opacity-0 pointer-events-none  "
                }`}
                onClick={toggleMenu}


            ></div>

            <nav
                className={`fixed right-0 top-0 h-full w-64 bg-white z-20 mt-10 transition-transform duration-300 ease-in-out ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <ul className="flex flex-col justify-start items-start py-8 px-6">
                    <li className="mx-4">
                        <a href="/" onClick={toggleMenu}>
                            Home
                        </a>
                    </li>
                    <li className="mx-4">
                        <a href="#project" onClick={toggleMenu}>
                            Projects
                        </a>
                    </li>
                    <li className="mx-4">
                        <a href="#contact" onClick={toggleMenu}>
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://drive.google.com/file/d/1GCGV-LowOKZEFH0HUkVbwdsSVO1hh8ZA/view?usp=sharing" target="_blank"
                            onClick={toggleMenu}
                            className="bg-red-600 text-white py-2 px-6 rounded-full font-medium ml-4 hover:bg-red-700 transition duration-300 ease-in-out"
                        >
                            Resume/CV
                        </a>
                    </li>
                </ul>
            </nav>



            <div className="relative">
                <div className="absolute h-full w-full top-0 left-0">
                    <img
                        src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8c4f0612bef870f4/63d859f6aaf5cc62cfa65f77/LOL_ASol23_Thumbnail_no_text_v2.jpg"
                        alt="Finality Image"
                        className="w-full h-full object-cover filter blur-2xl"
                        style={{ zIndex: -1 }}
                    />
                    <div
                        className="bg-blue-400 absolute top-0 left-0 w-full h-64 lg:h-full"
                        style={{ zIndex: -2 }}
                    ></div>
                </div>
                <div className="container mx-auto px-4 lg:px-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="col-span-1 lg:col-span-1 px-10 flex flex-col justify-center">
                            <div className="my-auto">
            <span className="text-sm font-bold text-amber-400 italic">
              Junior Back End Developer
            </span>
                                <h1 className="text-4xl font-bold mb-4 mt-8 text-white uppercase italic space-x-1">
                                    Safouane-M09
                                </h1>
                                <p className="mb-8 mt-4 text-white">
                                    {translations["short-description"]}
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1 lg:col-span-2 relative">
                            <img
                                src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8c4f0612bef870f4/63d859f6aaf5cc62cfa65f77/LOL_ASol23_Thumbnail_no_text_v2.jpg"
                                alt="asol"
                                className="w-full lg:w-auto lg:h-full object-cover z-10"
                                style={{ zIndex: 10, marginTop: "2em" }}
                            />
                            <div className="border-4 border-white absolute top-4 left-4 right-4 bottom-4 z-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Header;
