import React from 'react';
import DevChallengeLogo from '../imgs/devchallenges.png';

function NavBar(){
    return(
        <section id="navbar" className="flex flex-col gap-6 basis-1/6 hover:basis-1/5 bg-gray-100 py-6 px-10 transition-all hover:transition-all items-center sm:items-start">
            <img className="object-scale-down w-32 h-32" src={DevChallengeLogo} alt="Logo" />
            <a href="#" className="text-gray-500">Colors</a>
            <a href="#" className="text-gray-500">Typography</a>
            <a href="#" className="text-gray-500">Spaces</a>
            <a href="#" className="text-gray-500">Buttons</a>
            <a href="#" className="font-bold">Inputs</a>
            <a href="#" className="text-gray-500">Grid</a>
        </section>
    )
}

export default NavBar;