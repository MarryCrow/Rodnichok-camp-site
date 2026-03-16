import { NavLink } from "react-router-dom";
import type {NavLinkRenderProps} from "react-router-dom"

import logo_Rodnichok from '@/assets/img/Navbar/Logo-Rodnichok.png'
import logo_Rzd from '@/assets/img/Navbar/Partners_RZD.png'

function Navbar() {

    const getNavClass = ({ isActive } : NavLinkRenderProps) =>
        `nav__link ${isActive ? 'nav__link--selected' : ''}`;

    return(
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <img
                        src={logo_Rodnichok}
                        className={'nav__logo'}
                        alt={'Logo'}
                    />
                </li>
                <li className="nav__item">
                    <NavLink
                        to="/"
                        className={getNavClass}
                    >Главная</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="/about-camp"
                        className={getNavClass}
                    >О лагере</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="/life-of-camp"
                        className={getNavClass}
                    >Жизнь «Родничка»</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="/Gallery"
                        className={getNavClass}
                    >Галерея</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="/teaching-stuff"
                        className={getNavClass}
                    >Педсостав</NavLink>
                </li>
                <li className="nav__item">
                    <img
                        src={logo_Rzd}
                        className={'nav__logo'}
                        alt={'Logo'}
                    />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar