import { NavLink } from "react-router-dom";
import type {NavLinkRenderProps} from "react-router-dom"

import logo_Rodnichok from '@/assets/img/Navbar/Logo-Rodnichok.png'
import logo_Rzd from '@/assets/img/Navbar/Partners_RZD.png'

function Navbar() {

    const getNavClass = ({ isActive } : NavLinkRenderProps) =>
        `font__nav__link ${isActive ? 'font__nav__link--selected' : ''}`;

    const navConfig = {
        leftLogo: {src: logo_Rodnichok, alt: 'Logo Rodnichok'},
        rightLogo: {src: logo_Rzd, alt: 'Logo Rzd'},
        links: [
            { path: '/', label: 'Главная' },
            { path: '/About-camp', label: 'О лагере' },
            { path: '/Life-of-camp', label: 'Жизнь «Родничка»' },
            { path: '/Gallery', label: 'Галерея' },
            { path: '/Teaching-stuff', label: 'Педсостав' },
        ]
    }

    return(
        <nav className="nav">
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
                            className={getNavClass}
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}

                <li className="nav__item">
                    <img
                        src={navConfig.rightLogo.src}
                        className={'nav__logo'}
                        alt={navConfig.rightLogo.alt}
                    />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar