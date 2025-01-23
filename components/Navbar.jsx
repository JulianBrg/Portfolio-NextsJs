import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        });
    }, []);

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 traslate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt="navbar_bg" className='w-full' />
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px[8%] py-4 flex justify-between items-center z-50 ${isScroll ? "bg-white bg-opacity-10 backdrop-blur-lg shadow-md dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
                <a href="#top">
                    <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="logo" className='w-28 cursor-pointer mr-14' />

                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-md bg-opacity-40 dark:border dark:border-white/50 dark:bg-transparent"} `}>
                    <li><a className='font-Ovo' href="#top">Inicio</a></li>
                    <li><a className='font-Ovo' href="#about">Acerca de mi</a></li>
                    <li><a className='font-Ovo' href="#services">Servicios</a></li>
                    <li><a className='font-Ovo' href="#work">Proyectos</a></li>
                    <li><a className='font-Ovo' href="#contact">Contacto</a></li>
                </ul>
                <div className='flex items-center gap-4'>
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="moon" className='w-6' />
                    </button>

                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
                        Contratame <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='arrow' className='w-3' />
                    </a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="menu" className='w-6' />
                    </button>
                </div>

                {/* ---------------------------- Mobile Menu ---------------------------- */}

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>

                    <div className='absolute top-6 right-6' onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="close" className='w-6 cursor-pointer' />
                    </div>

                    <li><a className='font-Ovo' onClick={closeMenu} href="#top">Inicio</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#about">Acerca de mi</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#services">Servicios</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#work">Proyectos</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contacto</a></li>
                </ul>

            </nav >
        </>
    )
}

export default Navbar;