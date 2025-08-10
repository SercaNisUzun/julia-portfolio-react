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
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

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

                    </div>

                    <hr />


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
                                <h4>Product/UI/UX Designer (E-commerce/DTC Growth)</h4>
                                <p>{t('mareeDate')}</p>
                            </div>
                            <div className='content'>
                                <strong>{t('liStrong')}</strong>

                                {currentLang === "en" ? (

                                    <ul>
                                        <li>- <strong>Boosted advertising ROI</strong> by designing targeted landing and pre-landing pages for
                                            Facebook and Google Ads, increasing ROAS from <strong>0.80 to 1.80</strong> and achieving CTR rates
                                            of <strong>15–35%</strong> on cold traffic.</li>
                                        <li>- <strong>Increased LTV and improved project unit economics</strong> by implementing a subscription
                                            model on product pages, with upsell and cart blocks tailored for recurring deliveries —
                                            resulting in a <strong>15% LTV growth.</strong></li>
                                        <li>- <strong>Raised AOV from $20 to $32</strong> through an upsell strategy and optimized product page
                                            layouts that encouraged multi-item purchases.</li>
                                        <li>- <strong>Reduced cart abandonment by 11%</strong> via a redesigned cart experience with sticky CTAs,
                                            progress bars, and clear multi-item offer messaging.</li>
                                    </ul>

                                ) : (

                                    <ul>
                                        <li>- <strong>Для повышения эффективности рекламных кампаний</strong> разработала серию
                                            целевых лендингов и пре-лендингов, на которые вёл трафик с Facebook и
                                            Google Ads. Оптимизация структуры и контента позволила повысить ROAS с
                                            0.80 до 1.80 и достичь среднего CTR 15–35% на холодном трафике.</li>
                                        <li>- Чтобы увеличить LTV и вывести экономику проекта в плюс, внедрила
                                            подписочную модель на продуктовых страницах, а также интегрировала
                                            блоки в корзине и апсейл блока под подписки. Это <strong>обеспечило рост LTV на 15%.</strong></li>
                                        <li>- Для роста среднего чека <strong>разработала стратегию апсейла,</strong> в результате чего AOV
                                            вырос с <strong>$20 до $32.</strong></li>
                                        <li>- Для снижения числа не завершенных покупок <strong>разработала новый дизайн
                                            корзины</strong> с улучшенным UX, что повысило конверсию в покупку на <strong>11%.</strong></li>
                                    </ul>

                                )}


                            </div>

                            <div className='company'>
                                <h3>Astuvet</h3>
                                <h4>UI/UX Designer</h4>
                                <p>(2022-2024)</p>
                            </div>
                            <div className='content'>
                                <strong>{t('liStrong')}</strong>

                                {currentLang === "en" ? (

                                    <ul>
                                        <li>- <strong>Accelerated market entry & investor interest</strong> by designing and launching the MVP of
                                            MyVetCoach, presented at a major US conference — securing strong investor
                                            engagement.</li>
                                        <li>- <strong>Increased conversion by 20%</strong> through optimization of the onboarding flow, user journey
                                            improvements, and targeted A/B testing.</li>
                                        <li>- <strong>Generated $10,000 in the first month post-launch</strong> by creating and implementing a
                                            subscription-based monetization model, integrated into upsell and cart flows.</li>
                                    </ul>

                                ) : (

                                    <ul>
                                        <li>- Для успешного выхода на рынок и привлечения инвестиций <strong>разработала MVP
                                            приложения MyVetCoach</strong> для презентации проекта на крупной ветеринарной
                                            конференции в США, что способствовало эффективным переговорам с
                                            инвесторами.</li>
                                        <li>- Для роста вовлеченности и продаж <strong>увеличила конверсию на 20%</strong> за счёт
                                            оптимизации пользовательского пути и проведения A/B-тестов.</li>
                                        <li>- Для монетизации продукта <strong>разработала и внедрила стратегию подписок,</strong> что
                                            принесло <strong>$10 000 в первый месяц</strong> после запуска.</li>
                                    </ul>

                                )}

                            </div>

                            <div className='company'>
                                <h3>Neattech</h3>
                                <h4>UI/UX Designer</h4>
                                <p>(2021-2022)</p>
                            </div>
                            <div className='content'>
                                <p className='contentFix'>{t('nutriHeader1')}</p>

                                {currentLang === "en" ? (

                                    <ul>
                                        <li>- <strong>Boosted consultation booking conversion by 25%</strong> in NutriCampus through a full
                                            interface redesign, improved IA, and streamlined navigation — attracting <strong>50,000+ new
                                                users.</strong></li>
                                        <li>- <strong>Opened a new revenue stream</strong> for NutriCampus by integrating monetization via webinars
                                            and courses.</li>
                                        <li>- <strong>Launched MVP of “Your Mentor” platform</strong> from concept to release, enabling the first
                                            paid sessions and gathering positive user feedback within the first month.</li>
                                    </ul>

                                ) : (

                                    <ul>
                                        <li>- <strong>Проект «НутриКампус»</strong> — для увеличения числа записей на консультации и
                                            удержания пользователей провела редизайн интерфейса, улучшив структуру и
                                            навигацию. В результате конверсия выросла на <strong>25%,</strong> а аудитория увеличилась на
                                            <strong>50 000+ новых пользователей.</strong></li>
                                        <li>- <strong>Монетизация «НутриКампус»</strong> — внедрила модель платного доступа через
                                            вебинары и курсы, что открыло новый источник дохода для платформы.</li>
                                        <li>- <strong>Проект «Твой Наставник»</strong> — руководила разработкой дизайна и релизом MVP
                                            менторской платформы, обеспечив быстрый выход продукта на рынок и
                                            получение первых платных сессий и положительных отзывов от пользователей.</li>
                                    </ul>

                                )}

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

export default AboutMe
