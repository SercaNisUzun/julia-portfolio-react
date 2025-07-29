import React from 'react'
import aboutMeMobile from '../assets/AboutMeMobile.webp'
import aboutMeTablet from '../assets/AboutMeTablet.webp'
import aboutMeDesktop from '../assets/AboutMeDesktop.webp'
import wp from '../assets/Whatsapp.svg'
import tg from '../assets/Telegram.svg'
import mail from '../assets/Gmail.svg'
import linked from '../assets/Linkedin.svg'
import { useNavigate } from 'react-router-dom'
import PhotoSliderInfinite from '../components/PhotoSliderInfinite'
import { useTranslation } from 'react-i18next';


function AboutMe() {

    const { t } = useTranslation('aboutme');

    const handleUrl = (url) => {
        window.open(url, '_blank');
    }

    return (
        <section id='aboutMePage'>
            <div className='aboutMePage'>

                <div className='imgConteiner'>
                    <picture>
                        <source srcSet={aboutMeMobile} media="(max-width: 767px)" alt="Me" />
                        <source srcSet={aboutMeTablet} media="(max-width: 1023px)" alt="Me" />
                        <source srcSet={aboutMeDesktop} />
                        <img src={aboutMeDesktop} alt="Me" />
                    </picture>
                </div>

                <div className='aboutMeInfo'>
                    <div className='aboutMe'>
                        <p>{t('mainText1')}</p>

                        <p>{t('mainText2')}</p>

                        <hr />

                    </div>


                    <div className='aboutMe2'>
                        <h2>{t('header1')}</h2>

                        <p>{t('headerText1')}</p>

                    </div>

                    <hr />

                    <div className='cvArea'>

                        <h2>{t('header2')}</h2>

                        <div className='projects'>

                            <div className='company'>
                                <h3>MAREE</h3>
                                <h4>Product/UI/UX Designer</h4>
                                <p>{t('mareeDate')}</p>
                            </div>
                            <div className='content'>
                                <strong>{t('liStrong')}</strong>
                                <ul>
                                    <li>- {t('mareeLi1')} <strong>{t('mareeLi1strong')}</strong></li>
                                    <li>- {t('mareeLi2')} <strong>{t('mareeLi2strong')}</strong> </li>
                                    <li>- {t('mareeLi3')} <strong>{t('mareeLi3strong')}</strong></li>
                                    <li>- <strong>{t('mareeLi4strong')}</strong> {t('mareeLi4Li')}</li>
                                </ul>
                            </div>

                            <div className='company'>
                                <h3>Astuvet</h3>
                                <h4>UI/UX Designer</h4>
                                <p>(2022-2024)</p>
                            </div>
                            <div className='content'>
                                <strong>{t('liStrong')}</strong>
                                <ul>
                                    <li>- <strong>{t('astoStrong1')}</strong> {t('astoStrong1p')}</li>
                                    <li>- <strong>{t('astoStrong2')}</strong> {t('astoStrong2p')}</li>
                                    <li>- <strong>{t('astoStrong3')}</strong> {t('astoStrong3p')}</li>
                                </ul>
                            </div>

                            <div className='company'>
                                <h3>Neattech</h3>
                                <h4>UI/UX Designer</h4>
                                <p>(2021-2022)</p>
                            </div>
                            <div className='content'>
                                <p className='contentFix'>{t('nutriHeader1')}</p>
                                <ul>
                                    <li>{t('nutriLi11')}</li>
                                    <li>{t('nutriLi12')}</li>
                                    <li>{t('nutriLi13')}</li>
                                </ul>
                                <p className='contentFix'>{t('nutriHeader2')}</p>
                                <ul>
                                    <li>{t('nutriLi2')}</li>
                                </ul>
                            </div>

                            <div className='company'>
                                <h3>Taxi+ App</h3>
                                <h4>UI Designer</h4>
                                <p>(2020-2021)</p>
                            </div>
                            <div className='content'>
                                <ul>
                                    <li>- <strong>{t('taxiStrong1')}</strong> {t('taxiStrong1p')}</li>
                                    <li>- <strong>{t('taxiStrong2')}</strong> {t('taxiStrong2p')}</li>
                                    <li>- <strong>{t('taxiStrong3')}</strong> {t('taxiStrong3p')}</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <hr />

                    <div className='MeSlider'>

                        <div className='sliderText'>

                            <h2>{t('sliderHeader')}</h2>

                            <p>{t('sliderText')}</p>

                        </div>


                        <PhotoSliderInfinite group="aboutMeSlider" />

                    </div>

                </div>

                <div className='greenBox'>

                    <div className='boxCutter'>

                        <div className='greenConteiner'>
                            <div className='boxBorder'><p>{t('green1')}</p></div>
                            <div className='adaptiveBorder'><p>{t('green2')}</p></div>
                        </div>

                        <hr />

                        <div className='greenConteiner'>
                            <div className='boxBorder'><p>{t('green3')}</p></div>
                            <div className='adaptiveBorder'><p>{t('green4')}</p></div>
                        </div>

                        <hr />

                        <div className='greenConteiner'>
                            <div className='boxBorder'><p>{t('green5')}</p></div>
                            <div className='adaptiveBorder'><p>{t('green6')}</p></div>
                        </div>

                        <hr className='onlyMobile' />

                    </div>


                    <div className='boxCutter'>

                        <div className='greenConteiner'>
                            <div className='boxBorder'><p>{t('green7')}</p></div>
                            <div><p>{t('green8')}</p></div>
                        </div>

                        <hr />

                        <div className='greenConteiner'>
                            <div className='boxBorder'><p>{t('green9')}</p></div>
                            <div><p>{t('green10')}</p></div>
                        </div>

                        <hr />

                        <div className='greenConteiner'>
                            <div className='boxBorder'><p>{t('green11')}</p></div>
                            <div><p>{t('green12')}</p></div>
                        </div>

                    </div>

                </div>


                <div className='contact'>
                    <p>{t('contactText')}</p>
                    <strong>{t('contactStrong')}</strong>

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

export default AboutMe
