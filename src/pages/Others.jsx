import React, { useState } from 'react'
import mobileBanner from '../assets/mobOthersBanner.webp'
import tabBanner from '../assets/tabOthersBanner.webp'
import bigBanner from '../assets/bigOthersBanner.webp'
import { IoMdArrowDropleft } from "react-icons/io"
import wp from '../assets/Whatsapp.svg'
import tg from '../assets/Telegram.svg'
import mail from '../assets/Gmail.svg'
import linked from '../assets/Linkedin.svg'
import OtherApps from '../components/otherApps'
import OtherBrands from '../components/OtherBrands'


function Others() {

    const [tab, changeTab] = useState("app");

    const renderTab = () => {
        switch (tab) {
            case 'tab1':
                return <OtherApps />;
            case 'tab2':
                return <OtherApps />;
            case 'tab3':
                return <OtherBrands />;
            default:
                return <OtherApps />;
        }
    };



    return (
        <div className='others'>

            <div className='otherBanner'>

                <div className='bannerImg'>
                    <picture>
                        <source srcSet={mobileBanner} media="(max-width: 767px)" />
                        <source srcSet={tabBanner} media="(max-width: 1439px)" />
                        <source srcSet={bigBanner} />
                        <img src={bigBanner} alt="Other projects" />
                    </picture>
                </div>

                <div className='aboutText' id='bigScreenBanner'>
                    <h2>Маленькие проекты, которые прокачали мои навыки </h2>
                    <p>Презентации, брендбуки, приложения, сайты — собрала здесь проекты, в которых решала конкретные задачи через дизайн.</p>
                    <button>Посмотреть проекты</button>
                </div>

            </div>

            <div className='othersContent'>

                <div>
                    <button onClick={() => navigate("/")} className='greenBack'><IoMdArrowDropleft style={{ fontSize: '50px' }} />Назад
                    </button>
                </div>

                <div className='tabs'>
                    <button onClick={() => changeTab('tab1')}>Приложения</button>
                    <button onClick={() => changeTab('tab2')}>Вебсайты</button>
                    <button onClick={() => changeTab('tab3')}>Брендинг</button>
                </div>

            </div>

            <div className="tab-content">
                {renderTab()}
            </div>


            <div className='contact'>
                <p>Я всегда открыта новым проектам и интересным идеям.</p>
                <strong>Если вам откликается мой подход, давайте создадим что-то классное вместе. </strong>

                <div className='footerButtons'>
                    <button style={{ gridArea: 'm' }}><img src={mail} alt="Gmail" />E-mail</button>
                    <button style={{ gridArea: 'wp' }}><img src={wp} alt="Whatsapp" />WhatsApp</button>
                    <button style={{ gridArea: 't' }}><img src={tg} alt="Telegram" />Telegram</button>
                    <button style={{ gridArea: 'li' }}><img src={linked} alt="Linkedin" />Linkedin</button>
                </div>

            </div>


        </div>
    )
}

export default Others
