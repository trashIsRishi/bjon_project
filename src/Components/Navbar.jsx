import React from 'react';
import { useState } from 'react';

export default function Navbar() {
    const [toggleMenu, settoggleMenu] = useState(false)
    const renderNavItem = (text, link) => (
        <div className="navItem flex items-center w-2/3 px-3 py-2 justify-center hover:shadow-md hover:bg-skin-primary200 rounded-lg transition ease-in-out  duration-300 mx-5">
            <a className="navLink  text-base text-center font-bold text-skin-text200 whitespace-nowrap w-full justify-center flex" href={link}>
                {text}
            </a>
        </div>
    );

    return (
        <div className="flex h-12 my-5">
            <div className="header z-10 flex justify-center w-full items-center relative">
                <a className="w-52 absolute" href="/welcome">
                    <img className='hover:cursor-pointer' src="./img/Logo.svg" alt="Logo" />
                </a>
                <div onClick={() => { settoggleMenu(prev => !prev) }} className="toggleMenu p-1 hover:cursor-pointer hover:scale-110 hover:shadow-md rounded-full right-[5%] absolute">
                    {!toggleMenu ? (<>Menu</>) : (<>UnMenu</>)}
                </div>
            </div>
            <div className={`w-full py-24 z-0 h-full absolute bg-white flex flex-col items-center ${toggleMenu?(`left-[0%]`):(`left-[-100%]`)}  duration-200`}>
                {renderNavItem("Products", "/welcome")}
                {renderNavItem("Projects", "/JournalAI")}
                {renderNavItem("Knowledge base", "/resource")}
                {renderNavItem("About", "/about")}
            </div>
        </div>
    );
}
