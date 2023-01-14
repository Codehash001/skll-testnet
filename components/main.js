import data from './data.json';
export default function Home(){

    return (
        <div className="mt-[100px]" id='home'>
        <div className="flex md:flex-row flex-col items-center lg:mx-16 md:mx-8 mx-2 justify-between">
            <div className="lg:mx-8 md:mx-4 mx-2 flex flex-col md:items-start items-center">
                <h1 className="text-gray-600 text-2xl md:mb-[-5px]">Welcome To</h1>
                <ul className="font-Archivo flex items-start">
                    <li className="mx-4 text-start flex items-end">
                        <h1 className="md:text-8xl text-5xl uppercase font-bold bg-gradient-to-r from-pink-500 via-red-600 to-red-800 bg-clip-text text-transparent">S</h1>
                        <h1 className="md:text-5xl text-3xl font-medium">kulls</h1>
                    </li>
                    <li className="mx-4 text-start flex items-end">
                        <h1 className="md:text-8xl text-5xl uppercase font-bold bg-gradient-to-r from-pink-500 via-red-600 to-red-800 bg-clip-text text-transparent">K</h1>
                        <h1 className="md:text-5xl text-3xl font-medium">lubs</h1>
                    </li>
                    <li className="mx-4 text-start flex items-end">
                        <h1 className="md:text-8xl text-5xl uppercase font-bold bg-gradient-to-r from-pink-500 via-red-600 to-red-800 bg-clip-text text-transparent">L</h1>
                        <h1 className="md:text-5xl text-3xl font-medium">imit</h1>
                    </li>
                    <li className="mx-4 text-start flex items-end">
                        <h1 className="md:text-8xl text-5xl uppercase font-bold bg-gradient-to-r from-pink-500 via-red-600 to-red-800 bg-clip-text text-transparent">L</h1>
                        <h1 className="md:text-5xl text-3xl font-medium">ess</h1>
                    </li>
                </ul>
                <p className="font-Archivo mt-4 md:text-md text-justify">
                SKLL is uniquely generated characters that are designed to represent the ownership of digital assets on the Ethereum blockchain.
                SKLL tokens provide a secure, transparent, and immutable way to own, trade, and manage digital assets. With its cutting-edge technology, SKLL enables users to store and track their digital assets with greater security and efficiency. SKLL also makes it easier to manage and trade digital assets, giving users more control over their digital property.
                </p>
                <div className="w-full h-auto flex flex-col md:items-start items-center mt-8">
                <button type="button" class="flex text-white dark:text-black bg-gradient-to-r from-pink-500 via-red-600 to-red-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-semibold tracking-widest rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Get your SKLL now
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </button>
                </div>
            </div>
            <div className="lg:mx-8 md:mx-4 mx-2 md:mt-0 mt-2">
                <img src="/bg.gif"
                className='md:w-[700px] md:h-[700px] w-[400px] h-[500px]'/>
            </div>
        </div>
        </div>
    )
}
