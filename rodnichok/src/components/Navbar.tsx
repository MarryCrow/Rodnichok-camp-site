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
import {SecretModule} from "@/components/SecretModule.tsx";

function Navbar() {

    const getNavClassWide = ({ isActive } : NavLinkRenderProps) =>
        `font__nav__link--wide inline-flex px-5 py-5 ${isActive ? 'font__nav__link--selected' : ''}`;

    const getNavClassSlim = ({ isActive } : NavLinkRenderProps) =>
        `font__nav__link--slim inline-flex pr-10 py-1.5 ${isActive ? 'font__nav__link--selected' : ''}`;

    const location = useLocation();
    const isMobile = useMediaQuery("(max-width: 768px)");

    const [isOpen, setIsOpen] = useState(false);
    const [isMobileNavHidden, setIsMobileNavHidden] = useState(false);
    const [isSecretModuleOpen, setIsSecretModuleOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false)
    }, [location.pathname])

    useEffect(() => {
        if (!isMobile) {
            setIsOpen(false);
        }
    }, [isMobile]);

    useEffect(() => {
        if (!isMobile) {
            setIsMobileNavHidden(false);
            return;
        }

        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Если меню открыто — navbar не прячем
            if (isOpen) {
                setIsMobileNavHidden(false);
                lastScrollY = currentScrollY;
                return;
            }

            // Если почти в самом верху страницы — navbar всегда показываем
            if (currentScrollY < 50) {
                setIsMobileNavHidden(false);
                lastScrollY = currentScrollY;
                return;
            }

            // Скроллим вниз — прячем
            if (currentScrollY > lastScrollY) {
                setIsMobileNavHidden(true);
            }

            // Скроллим вверх — показываем
            if (currentScrollY < lastScrollY) {
                setIsMobileNavHidden(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMobile, isOpen]);

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
                    <button
                        type="button"
                        onClick={() => setIsSecretModuleOpen(true)}
                        className="nav__item transition"
                    >
                        <img
                            src={navConfig.leftLogo.src}
                            className={'nav__logo'}
                            alt={navConfig.leftLogo.alt}
                        />
                    </button>

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

            <nav
                className={[
                    "nav flex md:hidden h-[80px] px-4",
                    "transition-transform duration-350 ease-out",
                    isMobileNavHidden ? "-translate-y-[110%]" : "translate-y-0",
                ].join(" ")}
            >
                <button
                    type="button"
                    onClick={() => setIsSecretModuleOpen(true)}
                    className="nav__item transition"
                >
                    <img
                        src={navConfig.leftLogo.src}
                        className={'nav__logo'}
                        alt={navConfig.leftLogo.alt}
                    />
                </button>

                <img
                    src={navConfig.rightLogo.src}
                    className={'nav__logo mt-1'}
                    alt={navConfig.rightLogo.alt}
                />

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

            <SecretModule
                isOpen={isSecretModuleOpen}
                onClose={() => setIsSecretModuleOpen(false)}
            />
        </>
    )
}

export default Navbar