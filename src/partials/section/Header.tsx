
export default function Header() {
    return(
        <div>
            <div className="flex justify-between items-center bg-black px-5 py-4 text-white">
                <div className="flex justify-start items-center">
                    <img src="path/to/logo.png" alt="Logo" className="w-16 mr-4"/>
                </div>
                <nav className="flex justify-end items-center md:hidden">
                    <button type="button" className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" aria-label="Toggle menu">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path className="hidden" fillRule="evenodd" clipRule="evenodd" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                            <path className="block" fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 7h16v-2H4v2zm0 5h16v-2H4v2z"/>
                        </svg>
                    </button>
                </nav>
                <nav className="hidden md:block">
                    <ul className="flex justify-end items-center">
                        <li className="mx-4"><a href="#">Home</a></li>
                        <li className="mx-4"><a href="#">Projects</a></li>
                        <li className="mx-4"><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
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
                        <div className="col-span-1 lg:col-span-1 px-10 flex flex-col justify-center  ">
                            <div className="my-auto">
                                <span className='text-sm font-bold text-amber-400 italic'>Junior Back End Developer</span>
                                <h1 className="text-4xl font-bold mb-4 mt-8 text-white uppercase italic space-x-1">Safouane-M09</h1>
                                <p className="mb-8 mt-4 text-white">
                                    Hallo, ik ben Safouane, een derdejaars student aan Windesheim Almere met een diploma in AD Software Development
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1 lg:col-span-2 relative">
                            <img
                                src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8c4f0612bef870f4/63d859f6aaf5cc62cfa65f77/LOL_ASol23_Thumbnail_no_text_v2.jpg"
                                alt="Finality Image"
                                className="w-full lg:w-auto lg:h-full object-cover z-10"
                                style={{ zIndex: 10, marginTop: "2em" }}
                            />
                            <div className="border-4 border-white absolute top-4 left-4 right-4 bottom-4 z-0"></div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}