import React from 'react'
import MainPhoto1 from '../assets/MainPhoto1.webp'
import Slider from '../components/Slider'
import maree from '../assets/mainCardMaree.webp'
import miin from '../assets/mainCardMiin.webp'
import others from '../assets/mainCardOthers.webp'
import asto from '../assets/mainCardAsto.webp'
import { RiArrowRightFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function MainPage() {
    const { t } = useTranslation('mainpage');
    const navigate = useNavigate();

    const skills = [
        'UX Research',
        'A/B Testing',
        'UI/UX Design',
        'Usability',
        'Competitive Analysis',
        'eCommerce',
        'EdTech',
        'Design Systems',
        'User Personas',
        'User Stories',
        'Metrics',
        'Roadmaps',
        'Patterns',
        'IOS/Android',
        'Cross-Teams',
        'Interaction Design',
    ];

    return (

        <section id='mainPage'>

            <div className='mainDiv'>
                <div className='mainPhoto'>
                    <img src={MainPhoto1} alt="" />
                </div>


                <div className='greenBg'>
                    <div className='mainText'>
                        <h1>{t('mainHeader')}</h1>
                        <h2>{t('mainText')}</h2>

                        <div className='mainButton hoverButton'>
                            <a href="/JuliaLeonkovaCVru.pdf" target="_blank" rel="noopener noreferrer"><button>{t('cv')}</button></a>
                        </div>

                    </div>

                </div>

            </div>


            <Slider items={skills} />

            <div className='projectLinks'>

                <h2>{t('cardsHeader')}</h2>

                <div className='projectCards'>
                    <div onClick={() => navigate("/maree")} className='projectCard'>
                        <img src={maree} alt="" />

                        <div className='cardTitle'>
                            <h3>Marée</h3>
                            <p>(E-commerce/Shopify/Amazon)</p>
                        </div>

                        <p className='cardInfo'>{t('mareeCardText')}</p>

                        <div className='cardClick'>
                            <p >{t('goButton')} <RiArrowRightFill style={{ verticalAlign: 'middle', fontSize: '22px' }} /></p>
                        </div>


                    </div>

                    <div onClick={() => navigate("/others")} className='projectCard'>
                        <img src={others} alt="" />

                        <div className='cardTitle'>
                            <h3>{t('OthersHeader')}</h3>
                            <p>(Web/App/Brand)</p>
                        </div>

                        <p className='cardInfo'>{t('othersText')}</p>

                        <div className='cardClick'>
                            <p >{t('goButton')} <RiArrowRightFill style={{ verticalAlign: 'middle', fontSize: '22px' }} /></p>
                        </div>

                    </div>

                    <div className='projectCard'>
                        <img src={asto} alt="" />

                        <div className='cardTitle'>
                            <h3>Astuvet</h3>
                            <p>(Web platform/App)</p>
                        </div>

                        <p className='cardInfo'>{t('astoText')}</p>

                        <div className='cardClick'>
                            <p >Coming soon <RiArrowRightFill style={{ verticalAlign: 'middle', fontSize: '22px' }} /></p>
                        </div>

                    </div>

                    <div className='projectCard'>
                        <img src={miin} alt="" />

                        <div className='cardTitle'>
                            <h3>{t('nutriHeader')}</h3>
                            <p>(App)</p>
                        </div>

                        <p className='cardInfo'>{t('nutriText')}</p>

                        <div className='cardClick'>
                            <p >Coming soon <RiArrowRightFill style={{ verticalAlign: 'middle', fontSize: '22px' }} /></p>
                        </div>

                    </div>

                </div>






            </div>

        </section>
    )
}

export default MainPage
