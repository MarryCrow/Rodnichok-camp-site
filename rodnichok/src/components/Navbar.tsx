import {useEffect, useState} from "react";
import { NavLink, useLocation } from "react-router-dom";
import type {NavLinkRenderProps} from "react-router-dom"

import {useMediaQuery} from "@/hooks/useMediaQuery.tsx";

import logo_Rodnichok from '@/assets/img/Navbar/Logo-Rodnichok.png'
import logo_Rzd from '@/assets/img/Navbar/Partners_RZD.png'
import logo_Rodnichok_silhouette from '@/assets/img/Navbar/Logo-Rodnichok-silhouette.png'
import logo_Rzd_silhouette from '@/assets/img/Navbar/Partners_RZD-silhouette.png'
import menu_closed from '@/assets/img/Navbar/menu_icon-closed.png'
import menu_opened from '@/assets/img/Navbar/menu_icon-opened.png'

function Navbar() {

    const getNavClassWide = ({ isActive } : NavLinkRenderProps) =>
        `font__nav__link--wide inline-flex px-5 py-5 ${isActive ? 'font__nav__link--selected' : ''}`;

    const getNavClassSlim = ({ isActive } : NavLinkRenderProps) =>
        `font__nav__link--slim inline-flex pr-10 py-1.5 ${isActive ? 'font__nav__link--selected' : ''}`;

    const location = useLocation();
    const isMobile = useMediaQuery("(max-width: 768px)");

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false)
    }, [location.pathname])

    useEffect(() => {
        if (!isMobile) {
            setIsOpen(false);
        }
    }, [isMobile]);

    const closeMenu = () => setIsOpen(false);

    const navConfig = {
        leftLogo: {src: isOpen ? logo_Rodnichok_silhouette : logo_Rodnichok, alt: 'Logo Rodnichok'},
        rightLogo: {src: isOpen ? logo_Rzd_silhouette : logo_Rzd, alt: 'Logo Rzd'},
        links: [
            { path: '/', label: 'Главная' },
            { path: '/About-camp', label: 'О лагере' },
            { path: '/Life-of-camp', label: 'Жизнь «Родничка»' },
            { path: '/Gallery', label: 'Галерея' },
            { path: '/Teaching-stuff', label: 'Педсостав' },
        ]
    }

    return(
        <>
            <nav className="nav hidden md:block md:h-[8vw] lg:h-[6vw] ">
                <ul className="nav__list">
                        <li className="nav__item">
                        <img
                            src={navConfig.leftLogo.src}
                            className={'nav__logo'}
                            alt={navConfig.leftLogo.alt}
                        />
                    </li>

                    {navConfig.links.map(({path, label}) => (
                        <li key={path} className='nav__item'>
                            <NavLink
                                to={path}
                                className={getNavClassWide}
                            >
                                <span className="scale--hovered">
                                    <span className="nav-link__stroke">{label}</span>
                                    <span className="nav-link__fill">{label}</span>
                                </span>
                            </NavLink>
                        </li>
                    ))}

                    <li className="nav__item">
                        <img
                            src={navConfig.rightLogo.src}
                            className={'nav__logo mb-2'}
                            alt={navConfig.rightLogo.alt}
                        />
                    </li>
                </ul>
            </nav>

            <nav className="nav flex md:hidden h-[80px] px-4">
                <img
                    src={navConfig.leftLogo.src}
                    className={'nav__logo mt-1 pt-1'}
                    alt={navConfig.leftLogo.alt}
                />

                <img
                    src={navConfig.rightLogo.src}
                    className={'nav__logo mt-1'}
                    alt={navConfig.rightLogo.alt}
                />

                {/*<button*/}
                {/*    onClick={() => setIsOpen(prev => !prev)}*/}
                {/*    className="ml-auto mr-3 mb-1 nav_button"*/}
                {/*>*/}
                {/*    <span className="scale--active">*/}
                {/*        {isOpen ? <img src={menu_opened} alt="menu opened" className="h-10 right-0"/> : <img src={menu_closed} alt="menu closed" className="h-10"/>}*/}
                {/*    </span>*/}
                {/*</button>*/}

                <button
                    onClick={() => setIsOpen(prev => !prev)}
                    className="ml-auto mr-3 mt-4.5 relative w-10 h-10"
                >
                    <span className="block w-full h-full">

                        <img
                            src={menu_closed}
                            alt="menu closed"
                            className={`
                            absolute inset-0 w-full h-full
                            transition-all duration-300
                            ${isOpen ? "opacity-0 scale-60" : "opacity-100 scale-100"}
                          `}
                        />

                        <img
                            src={menu_opened}
                            alt="menu opened"
                            className={`
                            absolute inset-0 w-full h-full
                            transition-all duration-300
                            ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-60"}
                          `}
                        />

                    </span>
                </button>
            </nav>
            <div
                className={`
                        fixed inset-0 z-[49] overflow-hidden overscroll-none touch-none
                        ${isOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"}
                    `}
            >
                <div
                    className={`
                            absolute inset-0 side-out__menu bg-white
                            transition-all duration-300 will-change-transform
                            ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
                        `}
                    onClick={closeMenu}
                >
                    <ul className="pt-[100px] flex flex-col items-start p-4 gap-2">
                        {navConfig.links.map(({path, label}) => (
                            <li key={path} className='nav__item mt-1 ml-3'>
                                <NavLink
                                    to={path}
                                    className={getNavClassSlim}
                                >
                                    <span className="scale--hovered">
                                        <span className="nav-link__stroke">{label}</span>
                                        <span className="nav-link__fill">{label}</span>
                                    </span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar