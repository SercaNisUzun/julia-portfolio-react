import React from 'react'
import wp from '../assets/Whatsapp.svg'
import tg from '../assets/Telegram.svg'
import mail from '../assets/Gmail.svg'
import linked from '../assets/Linkedin.svg'

function Footer() {
    return (
        <div className='footer'>

            <div className='adaptiveFooter'>

                <div className='footerAlt'>

                    <h2 className='logo'>JULIA L-U</h2>

                    <ul>
                        <li>Главная</li>
                        <li>Портфолио</li>
                        <li style={{ textDecoration: 'underline', textUnderlineOffset: '2px' }}>Скачать CV</li>
                        <li>Обо мне</li>
                    </ul>

                </div>

                <div className='footerButtons'>
                    <button style={{ gridArea: 'm' }}><img src={mail} alt="Gmail" />E-Mail</button>
                    <button style={{ gridArea: 'wp' }}><img src={wp} alt="Whatsapp" />WhatsApp</button>
                    <button style={{ gridArea: 't' }}><img src={tg} alt="Telegram" />Telegram</button>
                    <button style={{ gridArea: 'li' }}><img src={linked} alt="Linkedin" />LinkedIn</button>
                </div>

            </div>

            <hr />

            <p id='copyRight'>Copyright 2025</p>



        </div>
    )
}

export default Footer
