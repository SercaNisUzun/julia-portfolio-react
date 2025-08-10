import React from 'react'
import wp from '../assets/Whatsapp.svg'
import tg from '../assets/Telegram.svg'
import mail from '../assets/Gmail.svg'
import linked from '../assets/Linkedin.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation('footerNheader');
    const navigate = useNavigate();
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

    const handleUrl = (url) => {
        window.open(url, '_blank');
    }

    return (
        <footer>
            <div className='footer'>

                <div className='adaptiveFooter'>

                    <div className='footerAlt'>

                        <h2 className='logo'>JULIA L-U</h2>


                        <ul>
                            <li onClick={handleHomeClick}>{t('portfolio')}</li>

                            {currentLang === "en" ? (
                                <a className='footerLink' href={`${import.meta.env.BASE_URL}JuliaLeonkova-UzunCV-en.pdf`} target="_blank" rel="noopener noreferrer">
                                    <li id='cv'>{t('cv')}</li>
                                </a>
                            ) : (
                                <a className='footerLink' href={`${import.meta.env.BASE_URL}JuliaLeonkova-UzunCV-ru.pdf`} target="_blank" rel="noopener noreferrer">
                                    <li id='cv'>{t('cv')}</li>
                                </a>
                            )}

                            <li onClick={() => navigate("aboutme")}>{t('aboutme')}</li>
                        </ul>


                    </div>

                    <div className='footerButtons'>
                        <button onClick={() => handleUrl("mailto:juli.uxui@gmail.com")} style={{ gridArea: 'm' }}><img src={mail} alt="Gmail" />E-Mail</button>
                        <button onClick={() => handleUrl("https://wa.me/905518420420")} style={{ gridArea: 'wp' }}><img src={wp} alt="Whatsapp" />WhatsApp</button>
                        <button onClick={() => handleUrl("https://t.me/juli_designovna")} style={{ gridArea: 't' }}><img src={tg} alt="Telegram" />Telegram</button>
                        <button onClick={() => handleUrl("https://www.linkedin.com/in/juli-l/")} style={{ gridArea: 'li' }}><img src={linked} alt="Linkedin" />LinkedIn</button>
                    </div>

                </div>

                <hr />

                <p id='copyRight'>Developed by <a style={{ color: "white", fontSize: "1.1rem" }} href="mailto:sercanuzun0707@gmail.com"><span>Sercan Uzun</span></a></p>



            </div>
        </footer >
    )
}

export default Footer
