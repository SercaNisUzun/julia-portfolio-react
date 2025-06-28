import React from 'react'
import MainPhoto1 from '../assets/MainPhoto1.webp'
import Slider from '../components/Slider'
import maree from '../assets/mainCardMaree.webp'
import miin from '../assets/mainCardMiin.webp'
import others from '../assets/mainCardOthers.webp'
import asto from '../assets/mainCardAsto.webp'
import { RiArrowRightFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


function MainPage() {

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
                        <h1>Привет, я Юлия — продуктовый дизайнер</h1>
                        <h2>Более 5 лет коммерческого опыта в eCommerce-проектах, мобильных приложениях, веб-платформах и EdTech. Создаю решения, которые повышают конверсию  и увеличивают продажи.</h2>

                        <div className='mainButton hoverButton'>
                            <a href="/JuliaLeonkovaCVru.pdf" target="_blank" rel="noopener noreferrer"><button>Скачать CV</button></a>
                        </div>

                    </div>

                </div>

            </div>


            <Slider items={skills} />

            <div className='projectLinks'>

                <h2>Создаю проекты,которые нравятся людям</h2>

                <div className='projectCards'>
                    <div onClick={() => navigate("/maree")} className='projectCard'>
                        <img src={maree} alt="" />

                        <div className='cardTitle'>
                            <h3>Marée</h3>
                            <p>(E-commerce/Shopify/Amazon)</p>
                        </div>

                        <p className='cardInfo'>В проекте MAREE я улучшала UX/UI веб-сайта, делая взаимодействие с брендом более удобным и эффективным, а так же разрабатывала пре-лендинги с высокой конверсией и профитом.</p>

                        <div className='cardClick'>
                            <p >Изучить кейс <RiArrowRightFill style={{ verticalAlign: 'middle', fontSize: '22px' }} /></p>
                        </div>


                    </div>

                    <div onClick={() => navigate("/others")} className='projectCard'>
                        <img src={others} alt="" />

                        <div className='cardTitle'>
                            <h3>Другие проекты</h3>
                            <p>(Web/App/Brand)</p>
                        </div>

                        <p className='cardInfo'>Менее масштабные, но не менее важные этапы моего пути — это возможность показать вам больше о моих навыках и стиле работы. Вы сможете лучше понять, насколько совпадают наши вайбы, видение прекрасного и подходы к решению пользовательских задач.</p>

                        <div className='cardClick'>
                            <p >Изучить кейс <RiArrowRightFill style={{ verticalAlign: 'middle', fontSize: '22px' }} /></p>
                        </div>

                    </div>

                    <div className='projectCard'>
                        <img src={asto} alt="" />

                        <div className='cardTitle'>
                            <h3>Astuvet</h3>
                            <p>(Web platform/App)</p>
                        </div>

                        <p className='cardInfo'>В компании Astuvet я создала MVP приложения MyVetCoach, успешно презентованного инвесторам на коференции в США, а так же разработала стратегию монетизации для платформы.</p>

                        <div className='cardClick'>
                            <p >Coming soon <RiArrowRightFill style={{ verticalAlign: 'middle', fontSize: '22px' }} /></p>
                        </div>

                    </div>

                    <div className='projectCard'>
                        <img src={miin} alt="" />

                        <div className='cardTitle'>
                            <h3>НутриКампус (MIIN)</h3>
                            <p>(App)</p>
                        </div>

                        <p className='cardInfo'>В проекте НутриКампус я занималась редизайном интерфейса, что позволило увеличить конверсию на 25%. Также внедрила фичи для монетизации через продажу вебинаров и курсов.</p>

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
