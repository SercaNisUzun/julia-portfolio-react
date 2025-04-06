import React from 'react'
import aboutme from '../assets/aboutme1.jpg'
import wp from '../assets/Whatsapp.svg'
import tg from '../assets/Telegram.svg'
import mail from '../assets/Gmail.svg'
import linked from '../assets/Linkedin.svg'

function AboutMe() {
    return (
        <div>
            <div className='imgConteiner'>
                <img src={aboutme} alt="" />
            </div>

            <div className='aboutMeInfo'>
                <p>
                    Я —Джулия из солнечной Анталии, Product/UX/UI дизайнер с глубоким пониманием визуальной эстетики и функциональности продуктов.
                </p>

                <p>
                    Дизайн для меня это не только про визуальные решения, но и про способ решать проблемы, улучшать взаимодействие людей с технологиями и создавать смыслы. Моя цель — создавать не только красивые, но и удобные интерфейсы, которые решают реальные проблемы пользователей.
                </p>

                <hr />

                <div>
                    <h2>Мой подход в дизайне</h2>

                    <p>
                        Я создаю дизайнерские решения, опираясь на цели бизнеса и потребности аудитории. Мой процесс включает в себя исследование, прототипирование и тестирование, чтобы разрабатывать интерфейсы, которые улучшают пользовательский опыт, повышают конверсию и приносят измеримые результаты.
                    </p>

                    <hr />

                </div>

                <h2>Проекты и достижения</h2>

                <div className='projects'>

                    <div>
                        <h3>MAREE</h3>
                        <h4>Product/UI/UX Designer</h4>
                        <p>(апрель 2024 - настоящее время)</p>
                        <strong>Достижения:</strong>
                        <ul>
                            <li>- Повысила ROAS покупок с 0.80 до 2.80.</li>
                            <li>- Внедрила систему подписок на продуктовых страницах, что увеличило LTV клиентов на 15%.</li>
                            <li>- Увеличила AOV с $24 до $70-90.</li>
                            <li>- Средний CTR лендингов, созданных мной, составил от 15% до 35%.</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Astuvet</h3>
                        <h4>UI/UX Designer</h4>
                        <p>(2022-2024)</p>
                        <strong>Достижения:</strong>
                        <ul>
                            <li>- <strong>Успешная разработка MVP приложения для презентации на конференции в США:</strong> Работала над ui/ux дизайном первого MVP приложения MyVetCoach для демонстрации ключевых функций продукта инвесторам.</li>
                            <li>- <strong>Повышение конверсии:</strong> Успешно увеличила конверсию на 20% за счет оптимизации пользовательского пути и проведения A/B тестирований.</li>
                            <li>- <strong>Монетизация проекта:</strong> Разработала и внедрила стратегию монетизации приложения, что позволило заработать $10,000 в первый месяц после запуска.</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Neattech</h3>
                        <h4>UI/UX Designer</h4>
                        <p>(2022)</p>

                        <p>Приложение МИИН “НутриКампус”</p>
                        <ul>
                            <li>- Увеличила конверсию приложения на 25% благодаря редизайну интерфейса.</li>
                            <li>- Привлекла более 50 000 новых пользователей.</li>
                            <li>- Внедрила успешную монетизацию через продажу вебинаров и курсов в приложении.</li>
                        </ul>

                        <p>Проект “Твой Наставник”</p>
                        <ul>
                            <li>- Работала над успешным релизом MVP приложения для менторской программы,  в результате получив первые положительные отзывы от пользователей и менторов.</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Taxi+ App</h3>
                        <h4>UI Designer</h4>
                        <p>(2020-2021)</p>

                        <ul>
                            <li>- <strong>Создание и поддержка полного цикла дизайна:</strong> От концепции до реализации, включая разработку дизайн-систем и пользовательских интерфейсов.</li>
                            <li>- <strong>Анализ бизнеса и прототипирование:</strong> создание Прототипов, сочетающих бизнес-цели, потребности пользователей и технические требования.</li>
                            <li>- <strong>Глубокие исследования и тестирование:</strong> Проведение конкурентного анализа, A/B тестов, интервью и юзабилити-тестов для улучшения UX.</li>
                        </ul>
                    </div>

                    <hr />

                </div>

                <div className='MeSlider'>
                    <h2>Где я беру вдохновение</h2>

                    <p>Прекрасное я нахожу в простом: прогулки у моря, тишина гор и красота природы Анталии. Эти вещи наполняют меня вдохновением и идеями. Внизу — карусель снимков, которые передают мою любовь к природе</p>

                    <p>и её гармонии.</p>


                    <div className='imgConteiner'>
                        <img src={aboutme} alt="" />
                    </div>

                </div>

            </div>

            <div className='greenBox'>

                <div className='greenConteiner'>
                    <div className='boxBorder'><p>Разработка и поддержка библиотеки проекта</p></div>
                    <div><p>Конкурентный анализ</p></div>
                </div>

                <hr />

                <div className='greenConteiner'>
                    <div className='boxBorder'><p>Юзабилити тестирование</p></div>
                    <div><p>Составление user-персон</p></div>
                </div>

                <hr />

                <div className='greenConteiner'>
                    <div className='boxBorder'><p>Работа с метриками</p></div>
                    <div><p>Работа с кросс-функциональными командами</p></div>
                </div>

                <hr />

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

            <div className='contact'>
                <p>Я всегда открыта новым проектам и интересным идеям.</p>
                <strong>Если вам откликается мой подход, давайте создадим что-то классное вместе. </strong>

                <div className='footerButtons'>
                    <button style={{ gridArea: 'm' }}><img src={mail} alt="Gmail" />E-Mail</button>
                    <button style={{ gridArea: 'wp' }}><img src={wp} alt="Whatsapp" />WhatsApp</button>
                    <button style={{ gridArea: 't' }}><img src={tg} alt="Telegram" />Telegram</button>
                    <button style={{ gridArea: 'li' }}><img src={linked} alt="Linkedin" />LinkedIn</button>
                </div>

            </div>

        </div>
    )  
}

export default AboutMe
