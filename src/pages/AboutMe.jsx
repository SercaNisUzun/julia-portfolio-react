import React from 'react'
import aboutme from '../assets/aboutme1.jpg'
import wp from '../assets/Whatsapp.svg'
import tg from '../assets/Telegram.svg'
import mail from '../assets/Gmail.svg'
import linked from '../assets/Linkedin.svg'
import { useNavigate } from 'react-router-dom'
import PhotoSliderInfinite from '../components/PhotoSliderInfinite'


function AboutMe() {

    return (
        <div className='aboutMePage'>

            <div className='imgConteiner'>
                <img src={aboutme} alt="" />
            </div>

            <div className='aboutMeInfo'>
                <div className='aboutMe'>
                    <p>
                        Я —Джулия из солнечной Анталии, Product/UX/UI дизайнер с глубоким пониманием визуальной эстетики и функциональности продуктов.
                    </p>

                    <p>
                        Дизайн для меня это не только про визуальные решения, но и про способ решать проблемы, улучшать взаимодействие юзеров с технологиями и создавать смыслы. Моя цель — создавать не только красивые, но и удобные интерфейсы, которые решают реальные проблемы юзеров.
                    </p>

                    <hr />

                </div>


                <div className='aboutMe2'>
                    <h2>Мой подход в дизайне</h2>

                    <p>
                        Я создаю дизайнерские решения, опираясь на цели бизнеса и потребности аудитории. Мой рабочий процесс включает в себя исследование, прототипирование и тестирование, чтобы разрабатывать интерфейсы, которые улучшают пользовательский опыт, повышают конверсию и приносят измеримые результаты.
                    </p>

                </div>

                <hr />

                <div className='cvArea'>

                    <h2>Проекты и достижения</h2>

                    <div className='projects'>

                        <div className='company'>
                            <h3>MAREE</h3>
                            <h4>Product/UI/UX Designer</h4>
                            <p>(апрель 2024 - настоящее время)</p>
                        </div>
                        <div className='content'>
                            <strong>Достижения:</strong>
                            <ul>
                                <li>- Повысила ROAS покупок с 0.80 до 2.80.</li>
                                <li>- Внедрила систему подписок на продуктовых страницах, что увеличило LTV клиентов на 15%.</li>
                                <li>- Увеличила AOV с $24 до $70-90.</li>
                                <li>- Средний CTR лендингов, созданных мной, составил от 15% до 35%.</li>
                            </ul>
                        </div>

                        <div className='company'>
                            <h3>Astuvet</h3>
                            <h4>UI/UX Designer</h4>
                            <p>(2022-2024)</p>
                        </div>
                        <div className='content'>
                            <strong>Достижения:</strong>
                            <ul>
                                <li>- <strong>Успешная разработка MVP приложения для презентации на конференции в США:</strong> Работала над UI/UX дизайном первого MVP приложения MyVetCoach для демонстрации ключевых функций продукта инвесторам.</li>
                                <li>- <strong>Повышение конверсии:</strong> Успешно увеличила конверсию на 20% за счет оптимизации пользовательского пути и проведения A/B тестирований.</li>
                                <li>- <strong>Монетизация проекта:</strong> Разработала и внедрила стратегию монетизации приложения, что позволило заработать $10,000 в первый месяц после запуска.</li>
                            </ul>
                        </div>

                        <div className='company'>
                            <h3>Neattech</h3>
                            <h4>UI/UX Designer</h4>
                            <p>(2021-2022)</p>
                        </div>
                        <div className='content'>
                            <p className='contentFix'>Приложение МИИН “НутриКампус”</p>
                            <ul>
                                <li>- Увеличила конверсию приложения на 25% благодаря редизайну интерфейса.</li>
                                <li>- Привлекла более 50 000 новых пользователей с помощью улучшения UX.</li>
                                <li>- Внедрила успешную монетизацию через продажу вебинаров и курсов в приложении.</li>
                            </ul>
                            <p className='contentFix'>Проект “Твой Наставник”</p>
                            <ul>
                                <li>- Работала над успешным релизом MVP приложения для менторской программы, в результате получив первые положительные отзывы от пользователей и менторов.</li>
                            </ul>
                        </div>

                        <div className='company'>
                            <h3>Taxi+ App</h3>
                            <h4>UI Designer</h4>
                            <p>(2020-2021)</p>
                        </div>
                        <div className='content'>
                            <ul>
                                <li>- <strong>Создание и поддержка полного цикла дизайна:</strong> От концепции до реализации, включая разработку дизайн-систем и пользовательских интерфейсов.</li>
                                <li>- <strong>Анализ бизнеса и прототипирование:</strong> Создание прототипов, сочетающих бизнес-цели, потребности пользователей и технические требования.</li>
                                <li>- <strong>Глубокие исследования и тестирование:</strong> Проведение конкурентного анализа, A/B тестов, интервью и юзабилити-тестов для улучшения UX.</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <hr />

                <div className='MeSlider'>

                    <div className='sliderText'>

                        <h2>Где я беру вдохновение</h2>

                        <p>Прекрасное я нахожу в простом: прогулки у моря, тишина гор и красота природы Анталии. Эти вещи наполняют меня вдохновением и идеями. Ниже вы найдете карусель снимков, которые передают мою любовь к архитектуре, природе и её гармонии.</p>

                    </div>


                    <PhotoSliderInfinite group="aboutMeSlider" />

                </div>

            </div>

            <div className='greenBox'>

                <div className='boxCutter'>

                    <div className='greenConteiner'>
                        <div className='boxBorder'><p>Разработка и поддержка библиотеки проекта</p></div>
                        <div className='adaptiveBorder'><p>Конкурентный анализ</p></div>
                    </div>

                    <hr />

                    <div className='greenConteiner'>
                        <div className='boxBorder'><p>Юзабилити тестирование</p></div>
                        <div className='adaptiveBorder'><p>Составление user-персон</p></div>
                    </div>

                    <hr />

                    <div className='greenConteiner'>
                        <div className='boxBorder'><p>Работа с метриками</p></div>
                        <div className='adaptiveBorder'><p>Работа с кросс-функциональными командами</p></div>
                    </div>

                    <hr className='onlyMobile' />

                </div>


                <div className='boxCutter'>

                    <div className='greenConteiner'>
                        <div className='boxBorder'><p>Приоритизация задач и составление Roadmap’ов</p></div>
                        <div><p>Анализ фич и паттернов</p></div>
                    </div>

                    <hr />

                    <div className='greenConteiner'>
                        <div className='boxBorder'><p>A/B тестирование</p></div>
                        <div><p>User stories</p></div>
                    </div>

                    <hr />

                    <div className='greenConteiner'>
                        <div className='boxBorder'><p>UX/CX исследования</p></div>
                        <div><p>iOS и Android Guidelines</p></div>
                    </div>

                </div>

            </div>


            <div className='contact'>
                <p>Я всегда открыта новым проектам и интересным идеям.</p>
                <strong>Если вам откликается мой подход, давайте создадим что-то классное вместе. </strong>

                <div className='footerButtons hoverButton'>
                    <button style={{ gridArea: 'm' }}><img src={mail} alt="Gmail" />E-mail</button>
                    <button style={{ gridArea: 'wp' }}><img src={wp} alt="Whatsapp" />WhatsApp</button>
                    <button style={{ gridArea: 't' }}><img src={tg} alt="Telegram" />Telegram</button>
                    <button style={{ gridArea: 'li' }}><img src={linked} alt="Linkedin" />Linkedin</button>
                </div>

            </div>

        </div>
    )
}

export default AboutMe
