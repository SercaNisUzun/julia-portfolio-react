import React from 'react'
import mobileMaree from '../assets/mobileMaree.webp'
import mareeTablet from '../assets/mareeTablet.webp'
import mareeDesktop from '../assets/mareeDesktop.webp'
import mareeLarge from '../assets/mareeLarge.webp'
import logoMaree from '../assets/logoMaree.svg'
import logoMaree2 from '../assets/logoMaree2.svg'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import wp from '../assets/Whatsapp.svg'
import tg from '../assets/Telegram.svg'
import mail from '../assets/Gmail.svg'
import linked from '../assets/Linkedin.svg'
import { IoMdArrowDropleft } from "react-icons/io";
import mobileBlock from '../assets/mobileBlock.webp'
import mobileBlock2 from '../assets/mobileBlock2.webp'
import block from '../assets/block.webp'
import block1 from '../assets/block1.webp'
import { useNavigate } from 'react-router-dom';
import basket1 from '../assets/mareeBasket1.webp'
import basket2 from '../assets/mareeBasket2.webp'
import mareeBanner from '../assets/webMareeBanner.svg'
import SinglePhotoSlider from '../components/SinglePhotoSlider';
import video from '../assets/mareeVideo.mp4'
import video2 from '../assets/mareeVideo2.mp4'
import { useTranslation } from 'react-i18next';

function Maree() {

    const { t } = useTranslation('maree');
    const { i18n } = useTranslation();

    const navigate = useNavigate();

    const handleUrl = (url) => {
        window.open(url, '_blank');
    }

    return (
        <section id='mareeProject'>
            <div className='maree'>

                <div className='aboutMaree'>
                    <div className='imgMaree'>
                        <picture>
                            <source srcSet={mobileMaree} media="(max-width: 767px)" alt="Maree project" />
                            <source srcSet={mareeTablet} media="(max-width: 1023px)" alt="Maree project" />
                            <source srcSet={mareeDesktop} media="(max-width: 1439px)" alt="Maree project" />
                            <source srcSet={mareeLarge} />
                            <img src={mareeLarge} alt="Maree project" />
                        </picture>
                    </div>

                    <div className='aboutText bigScreenWhiteText'>

                        <picture>
                            <source srcSet={logoMaree} media="(max-width: 1023px)" alt="Maree Logo" />
                            <source srcSet={logoMaree2} alt="Maree Logo" />
                            <img src={logoMaree2} alt="Maree Logo" />
                        </picture>

                        <h2>{t('banner')}</h2>
                        <p><strong>{t('bannerStrong1')}</strong>{t('bannerStrong1p')}</p>
                        <p><strong>{t('bannerStrong2')}</strong>{t('bannerStrong2p')}</p>
                        <p><strong>{t('bannerStrong3')}</strong>{t('bannerStrong3p')}</p>
                    </div>
                </div>

                <div className='mareeContent'>

                    <div className='hoverButton'>
                        <button onClick={() => navigate("/")} className='greenBack'><IoMdArrowDropleft style={{ fontSize: '50px' }} />{t('back')}
                        </button>
                    </div>

                    <div>
                        <h2>{t('contextHeader')}</h2>
                        <p>{t('contextText')}</p>
                    </div>

                    <hr />

                    <div>
                        <h2>{t('objHeader')}</h2>
                        <ul style={{ listStyle: 'none' }}>
                            <li><MdOutlineArrowRightAlt className='liArrow' />
                                <span>{t('objLi1')}</span></li>
                            <li><MdOutlineArrowRightAlt className='liArrow' />
                                <span>{t('objLi2')}</span></li>
                            <li><MdOutlineArrowRightAlt className='liArrow' />
                                <span>{t('objLi3')}</span></li>
                        </ul>
                    </div>

                    <hr />

                    <div>
                        <h2>{t('part1header')}</h2>
                        <p><strong>{t('part1strong1')}</strong>{t('part1strong1p')}</p>

                        <strong>{t('part1strong2')}</strong>
                        <ul>
                            <li>{t('part1Li1')}</li>
                            <li>{t('part1Li2')}</li>
                            <li>{t('part1Li3')}</li>
                            <li>{t('part1Li4')}</li>
                            <li>{t('part1Li5')}</li>
                        </ul>

                        <div className='otherWeb'>
                            <div id='mareeContainer' className='singlePhotoSlider'>
                                <div className='imgContainer1'>
                                    <img src={mareeBanner} alt="" />
                                </div>

                                <div className='imgContainer2'>
                                    <img id='mareePhoto' src={basket1} alt="" />
                                </div>

                            </div>
                        </div>

                        <div className='otherWeb'>
                            <div id='mareeContainer' className='singlePhotoSlider'>

                                <img src={mareeBanner} alt="" />
                                <img id='mareePhoto' src={basket2} alt="" />

                            </div>
                        </div>

                        <div className='purpleBgText'>
                            <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>{t('purpleStrong')}</strong>{t('purple1strongP')}</p>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <h2>{t('part2header')}</h2>
                        <p><strong>{t('part2strong1')}</strong>{t('part2strong1p')}</p>

                        <strong>{t('part2strong2')}</strong>
                        <ul>
                            <li>{t('part2Li1')}</li>
                            <li>{t('part2Li2')}</li>
                            <li>{t('part2Li3')}</li>
                            <li>{t('part2Li4')}</li>
                            <li>{t('part2Li5')}</li>
                        </ul>

                        <div className='blockPic'>

                            <div className='flexBlock'>

                                <strong>{t('blockPic1')}</strong>

                                <picture>
                                    <source srcSet={mobileBlock} media="(max-width: 767px)" />
                                    <source srcSet={block} />
                                    <img src={block} alt="Maree project" />
                                </picture>

                            </div>

                            <hr />

                            <div className='flexBlock'>

                                <strong>{t('blockPic2')}</strong>

                                <picture>
                                    <source srcSet={mobileBlock2} media="(max-width: 767px)" />
                                    <source srcSet={block1} />
                                    <img src={block1} alt="Maree project" />
                                </picture>

                            </div>


                        </div>

                        <div className='purpleBgText'>
                            <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>{t('purpleStrong')}</strong>{t('purple2strongP')}</p>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <h2>{t('part3header')}</h2>
                        <p><strong>{t('part3strong1')}</strong>{t('part3strong1p')}</p>

                        <strong>{t('part3strong2')}</strong>
                        <ul>
                            <li>{t('part3Li1')}</li>
                            <li>{t('part3Li2')}</li>
                            <li>{t('part3Li3')}</li>
                        </ul>

                        <div className='otherWeb'>
                            <div id='mareeContainer' className='singlePhotoSlider'>

                                <img src={mareeBanner} alt="" />
                                <video id='video'
                                    src={video2}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />

                            </div>

                        </div>

                        <div className='purpleBgText'>
                            <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>{t('purpleStrong')}</strong>{t('purple3strongP')}</p>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <h2>{t('part4header')}</h2>
                        <p><strong>{t('part4strong1')}</strong>{t('part4strong1p')}</p>

                        <p>{t('part4p1')}</p>

                        <strong>{t('part4strong2')}</strong>
                        <ul>
                            <li>{t('part4Li1')}</li>
                            <li>{t('part4Li2')}</li>
                            <li>{t('part4Li3')}</li>
                            <li>{t('part4Li4')}</li>
                        </ul>

                        <div className='otherWeb'>
                            <div id='mareeContainer' className='singlePhotoSlider'>

                                <img src={mareeBanner} alt="" />
                                <video id='video'
                                    src={video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />

                            </div>

                        </div>

                        <div className='purpleBgText'>
                            <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>{t('purpleStrong')}</strong>{t('purple4strongP')}</p>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <h2>{t('part5header')}</h2>
                        <p><strong>{t('part5strong1')}</strong>{t('part5strong1p')}</p>

                        <strong>{t('part5strong2')}</strong>
                        <ul>
                            <li>{t('part5Li1')}</li>
                            <li>{t('part5Li2')}</li>
                            <li>{t('part5Li3')}</li>
                        </ul>

                        <div className='otherWeb'>
                            <div id='mareePadFix' className='singlePhotoSlider'>

                                <img src={mareeBanner} alt="" />
                                <SinglePhotoSlider group='mareePreLands' />

                            </div>

                        </div>


                        <div className='purpleBgText'>
                            <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>{t('purpleStrong')}</strong>{t('purple5strongP')}</p>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <h2>{t('resultHeader')}</h2>
                        <p>{t('resultP')}</p>

                        <ul>
                            <li>{t('resultLi1')}</li>
                            <li>{t('resultLi2')}</li>
                            <li>{t('resultLi3')}</li>
                        </ul>

                        <div className='purpleBgText'>

                            <h2>{t('purple5Header')}</h2>
                            <ul>
                                <li><strong>{t('purple5strong1')}</strong>{t('purple5strong1Li')}</li>
                                <li><strong>{t('purple5strong2')}</strong>{t('purple5strong2Li')}</li>
                                <li><strong>{t('purple5strong3')}</strong>{t('purple5strong3Li')}</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div>

                </div >

                <div className='contact'>

                    <p>{t('contactP')}</p>
                    <strong>{t('contactStrong')}</strong>

                    <hr />

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

export default Maree
