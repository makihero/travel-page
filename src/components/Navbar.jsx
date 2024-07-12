import burguerMenu from '../assets/images/icon-hamburger.svg'
import { useState } from 'react'

export const Navbar = () => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <nav>
            <ul className={`${open ? 'flex' : 'hidden'} bg-white py-[40px] w-[329px] h-[305px] absolute left-0 right-0 top-[106px] mx-auto flex-col items-center place-content-around after:content-[""] after:absolute after:top-[-24px] after:right-0 after:border-[20px] after:border-t-transparent after:border-l-transparent after:border-r-white after:border-b-white text-darkGrayishBlue z-10
            
            sm:flex sm:after:hidden sm:bg-transparent sm:w-[400px] sm:flex-row sm:top-0 sm:h-0 sm:relative sm:text-white
            
            md:w-[500px]`}>    

                <li className='cursor-pointer hover:text-darkDesaturatedCyan'><a href="#about">About</a></li>
                <li className='cursor-pointer hover:text-darkDesaturatedCyan'><a href="#about">Services</a></li>
                <li className='cursor-pointer hover:text-darkDesaturatedCyan'><a href="#testimonial">Testimonials</a></li>
                <li className='cursor-pointer font-fraunces text-veryDarkDesaturatedBlue bg-yellow uppercase px-6 py-4 rounded-full sm:px-4 sm:py-2 sm:bg-white sm:hover:bg-opacity-25 sm:hover:text-white'><a href="#contact">Contact</a></li>
            </ul>
            <div className='cursor-pointer sm:hidden' onClick={handleClick}>
                <img src={burguerMenu} alt="burguer menu" />
            </div>
        </nav>
    )
}