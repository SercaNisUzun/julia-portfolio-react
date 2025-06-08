import React from 'react'
import wp from '../assets/Whatsapp.svg'
import tg from '../assets/Telegram.svg'
import mail from '../assets/Gmail.svg'
import linked from '../assets/Linkedin.svg'
import { useNavigate } from 'react-router-dom'

function Footer() {

    const navigate = useNavigate();

    const handleUrl = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div className='footer'>

            <div className='adaptiveFooter'>

                <div className='footerAlt'>

                    <h2 className='logo'>JULIA L-U</h2>

                    <ul>
                        <li onClick={() => navigate("/")}>Главная</li>
                        <li>Портфолио</li>
                        <a className='footerLink' href="/JuliaLeonkovaCVru.pdf" target="_blank" rel="noopener noreferrer"><li>Скачать CV</li></a>
                        <li onClick={() => navigate("aboutme")}>Обо мне</li>
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

            <p id='copyRight'>Copyright 2025</p>



        </div>
    )
}

export default Footer
