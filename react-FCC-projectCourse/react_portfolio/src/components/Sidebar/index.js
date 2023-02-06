import './index.scss';
import { Link, NavLink } from 'react-router-dom';

import React, { useState } from 'react';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUser,faEnvelope, faSuitcase, faBars, faClose} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin,faGithub,faYoutube,faSkype,} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt="portfolio logo" />
                <img src={LogoSubtitle} alt="slobodan" className='sub-logo' />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" activeclassname="active" to="/" onClick={()=>setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={()=>setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" onClick={()=>setShowNav(false)}>
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={()=>setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon icon={faClose} color="#ffd700" size="3x" className='close-icon' onClick={()=>setShowNav(false)} />
            </nav>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/adeline-lucas-web-dev/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/adeline-lucas-web-dev/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/adeline-lucas-web-dev/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/adeline-lucas-web-dev/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faSkype} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>

            {/* // hambuger menu */}
            <FontAwesomeIcon icon={faBars}  color="#ffd700" size="3x" className='hambuger-icon' onClick={()=>setShowNav(true)}/>
        </div>
    );
};

export default Sidebar;