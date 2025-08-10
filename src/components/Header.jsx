import React, { useState, useEffect } from 'react';
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { useLocation, useNavigate } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import { useTranslation } from 'react-i18next';


function Header() {
    const { t } = useTranslation('footerNheader');
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const location = useLocation();
    const handleHomeClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    const navigate = useNavigate();
    const [mobileMenuToggle, setMobileMenuToogle] = useState(true);
    const [display, setDisplay] = useState("none");

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };

    const navigateAndCloseMenu = (path) => {
        navigate(path);
        changeDisplay();
    };

    const changeDisplay = () => {
        if (mobileMenuToggle) {
            setDisplay("block");
        } else {
            setDisplay("none");
        }
        setMobileMenuToogle(!mobileMenuToggle);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1023) {
                setDisplay("block");
                setMobileMenuToogle(true);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header>
            <div className='navbar'>
                <div className='navPosition'>
                    <header>
                        <h2 onClick={() => navigate("/")} className='logo'>JULIA L-U</h2>
                    </header>

                    <div id='menuIcon'>
                        {mobileMenuToggle ? (
                            <LuMenu onClick={changeDisplay} />
                        ) : (
                            <RxCross2 onClick={changeDisplay} />
                        )}
                    </div>
                </div>

                <OutsideClickHandler
                    onOutsideClick={() => {
                        if (!mobileMenuToggle && window.innerWidth < 1024) {
                            changeDisplay();
                        }
                    }}
                >
                    <nav style={window.innerWidth < 1024 ? { display: display } : {}}>
                        <ul className='hoverButton'>
                            <li onClick={() => navigateAndCloseMenu("/")} className='onlyMobile'>{t('mainpage')}</li>
                            <li onClick={handleHomeClick}>{t('portfolio')}</li>

                            {currentLang === "en" ? (
                                <a href={`${import.meta.env.BASE_URL}JuliaLeonkova-UzunCV-en.pdf`} target="_blank" rel="noopener noreferrer">
                                    <li id='cv'>{t('cv')}</li>
                                </a>
                            ) : (
                                <a href={`${import.meta.env.BASE_URL}JuliaLeonkova-UzunCV-ru.pdf`} target="_blank" rel="noopener noreferrer">
                                    <li id='cv'>{t('cv')}</li>
                                </a>
                            )}

                            <li onClick={() => navigateAndCloseMenu("aboutme")}>{t('aboutme')}</li>
                            <div className='lngBut'>
                                <button className={currentLang === 'ru' ? 'active' : ''} onClick={() => i18n.changeLanguage('ru')}>RU</button>
                                <button className={currentLang === 'en' ? 'active' : ''} onClick={() => i18n.changeLanguage('en')}>EN</button>
                            </div>
                            <li onClick={scrollToBottom} className='mobileHidden' style={{ border: "2px solid #00412D" }}>{t('contact')}</li>
                        </ul>
                    </nav>
                </OutsideClickHandler>
            </div>
        </header>
    )
}

export default Header;
