import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header(){
    const [toggle,setToggle]=useState(false);
    return<header className="flex justify-between px-5 bg-violet-700 py-2">
        viswa
        <nav className='hidden md:block'>
        <ul className="flex ">
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        
        </nav>
        {toggle && <nav className='block md:hidden '>
        <ul className="flex flex-col mobile-nav">
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>}
       <button onClick={()=>{setToggle(!toggle)}}className='block md:hidden'> <Bars3Icon className='text-white h-5'/></button>
    </header>
}
// give the the nav and button of menu icons to md: 