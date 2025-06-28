import React, { useState } from 'react'
import mobileOthersBanner from '../assets/mobileOthersBanner.webp'
import tabletOthersBanner from '../assets/tabletOthersBanner.webp'
import desktopOthersBanner from '../assets/desktopOthersBanner.webp'
import largeOthersBanner from '../assets/largeOthersBanner.webp'
import { IoMdArrowDropleft } from "react-icons/io"
import wp from '../assets/Whatsapp.svg'
import tg from '../assets/Telegram.svg'
import mail from '../assets/Gmail.svg'
import linked from '../assets/Linkedin.svg'
import OtherApps from '../components/otherApps'
import OtherBrands from '../components/OtherBrands'
import OtherWeb from '../components/OtherWeb'
import { useNavigate } from 'react-router-dom'


function Others() {

    const navigate = useNavigate();

    const [tab, changeTab] = useState("tab1");

    const renderTab = () => {
        switch (tab) {
            case 'tab1':
                return <OtherApps />;
            case 'tab2':
                return <OtherWeb />;
            case 'tab3':
                return <OtherBrands />;
            default:
                return <OtherApps />;
        }
    };

    const handleUrl = (url) => {
        window.open(url, '_blank');
    }

    return (
        <section id='otherProjects'>
            <div className='others'>

                <div className='otherBanner'>

                    <div className='bannerImg'>
                        <picture>
                            <source srcSet={mobileOthersBanner} media="(max-width: 767px)" alt="Other projects" />
                            <source srcSet={tabletOthersBanner} media="(max-width: 1023px)" alt="Other projects" />
                            <source srcSet={desktopOthersBanner} media="(max-width: 1439px)" alt="Other projects" />
                            <source srcSet={largeOthersBanner} />
                            <img src={largeOthersBanner} alt="Other projects" />
                        </picture>
                    </div>

                    <div className='aboutText bigScreenWhiteText' id='bigScreenBanner'>
                        <h2>Маленькие проекты, которые прокачали мои навыки </h2>
                        <p>Презентации, брендбуки, приложения, сайты — собрала здесь проекты, в которых решала конкретные задачи через дизайн.</p>
                    </div>

                </div>

                <div className='othersContent'>

                    <div className='hoverButton'>
                        <button onClick={() => navigate("/")} className='greenBack'><IoMdArrowDropleft style={{ fontSize: '50px' }} />Назад
                        </button>
                    </div>

                    <div className="tabs">
                        <button
                            onClick={() => changeTab('tab1')}
                            className={tab === 'tab1' ? 'active' : ''}
                        >
                            Приложения
                        </button>
                        <button
                            onClick={() => changeTab('tab2')}
                            className={tab === 'tab2' ? 'active' : ''}
                        >
                            Вебсайты
                        </button>
                        <button
                            onClick={() => changeTab('tab3')}
                            className={tab === 'tab3' ? 'active' : ''}
                        >
                            Брендинг
                        </button>
                    </div>


                </div>

                <div className="tab-content">
                    {renderTab()}
                </div>


                <div className='contact'>
                    <p>Я всегда открыта новым проектам и интересным идеям.</p>
                    <strong>Если вам откликается мой подход, давайте создадим что-то классное вместе. </strong>

                    <div className='footerButtons hoverButton'>
                        <button onClick={() => handleUrl("mailto:juli.uxui@gmail.com")} style={{ gridArea: 'm' }}><img src={mail} alt="Gmail" />E-mail</button>
                        <button onClick={() => handleUrl("https://wa.me/905518420420")} style={{ gridArea: 'wp' }}><img src={wp} alt="Whatsapp" />WhatsApp</button>
                        <button onClick={() => handleUrl("https://t.me/juli_designovna")} style={{ gridArea: 't' }}><img src={tg} alt="Telegram" />Telegram</button>
                        <button onClick={() => handleUrl("https://www.linkedin.com/in/juli-l/")} style={{ gridArea: 'li' }}><img src={linked} alt="Linkedin" />Linkedin</button>
                    </div>

                </div>


            </div>
        </section>
    )
}

export default Others