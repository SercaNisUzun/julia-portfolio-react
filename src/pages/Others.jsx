import React from 'react'
import mobileBanner from '../assets/mobOthersBanner.webp'
import tabBanner from '../assets/tabOthersBanner.webp'
import bigBanner from '../assets/bigOthersBanner.webp'
import { IoMdArrowDropleft } from "react-icons/io"
import Slider from '../components/Slider'
import PhotoSlider from '../components/photoSlider'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import wp from '../assets/Whatsapp.svg'
import tg from '../assets/Telegram.svg'
import mail from '../assets/Gmail.svg'
import linked from '../assets/Linkedin.svg'


function Others() {
    return (
        <div className='others'>

            <div className='otherBanner'>

                <div className='bannerImg'>
                    <picture>
                        <source srcSet={mobileBanner} media="(max-width: 767px)" />
                        <source srcSet={tabBanner} media="(max-width: 1023px)" />
                        <source srcSet={bigBanner} />
                        <img src={bigBanner} alt="Other projects" />
                    </picture>
                </div>

                <div className='aboutText'>
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
                    <button>Apps</button>
                    <button>Websites</button>
                    <button>Брендинг</button>
                </div>

            </div>

            <div className='aboutText'>
                <h2>Твой наставник - приложение для подбора наставников</h2>
                <p>UX & UI Designer  •  Май — Авг 2020</p>
            </div>



            <Slider />

            <div className='othersContent'>

                <div>

                    <strong>Что сделала</strong>
                    <ul>
                        <li>Сконструировала пользовательский путь: welcome‑экран → геймифицированный онбординг → дашборд с аффирмацией, бодичартом и Daily Advice.</li>
                        <li>Упаковала сложную теорию в интерактив: кликабельные центры, планеты и типы + карточки для мгновенной расшифровки.</li>
                        <li>Встроила монетизацию: двухшаговый paywall (спец‑оффер 90 % → подписка).</li>
                        <li>Задала value‑loop: мульти‑профиль для друзей/клиентов, journey‑пуши и social‑toggle — удерживаем интерес и стимулируем шаринг.</li>
                    </ul>
                </div>

                <div>
                    <PhotoSlider className="sliderMargin" group="othersAppSlider5" />
                </div>

                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>В результате</strong>+18 % к конверсии в триал после внедрения двухэтапного paywall и спец‑оффера, 4 600 установок и 4,6 ★ средний рейтинг в первые 90 дней.</p>
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>НутриКампус (MIIN/ Топ-1 сообщество нутрициологов в СНГ)</h2>
                <p>UX & UI Designer  •  Май — Авг 2020</p>
            </div>



            <Slider />

            <div className='othersContent'>

                <div>

                    <strong>Что сделала</strong>
                    <ul>
                        <li>Собрала ценностное ядро: объединила каталог сертифицированных нутриологов, форум поддержки и базу статей → первая запись на консультацию за 4 тапа.</li>
                        <li>Переработала IA и UX‑флоу: внедрила карточки нутриологов с бейджами квалификации, instant‑booking и рейтингами.</li>
                        <li>Запустила комьюнити‑форум: правила и модерация через модалки, быстрые ответы экспертов внутри тредов.</li>
                        <li>Оптимизировала путь к записи: умные фильтры по симптомам → +25 % конверсии в консультацию.</li>
                        <li>Контент‑лента статей: выделенные call‑to‑action «Записаться» внутри материалов повышают вовлечённость.</li>
                        <li>Монетизация: комиссия за запись к нутриологу + подписка на премиум‑контент (paywall A/B‑тест).</li>
                    </ul>

                </div>

                <div>
                    <PhotoSlider className="sliderMargin" group="othersAppSlider3" />
                </div>

                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>В результате</strong>получили за первый месяц  10К установок и 120 активных водителей.</p>
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>TAXI+ — мобильное приложение такси</h2>
                <p>UX & UI Designer  •  Май — Авг 2020</p>
            </div>



            <Slider />

            <div className='othersContent'>

                <div>

                    <strong>Что сделала</strong>
                    <ul>
                        <li>Собрала требования и CJM — выделила core‑фичи: заказ, расчёт цены, трекинг маршрута, оплата.</li>
                        <li>Спроектировала UX‑флоу — 80+ экранов, 4 основных сценария '(поездка «сейчас», предзаказ, несколько остановок, “SOS”).</li>
                        <li>Собрала интерактивный прототип в Figma — кликабельный, готовый для юзертестов и демонстраций инвесторам.</li>
                        <li>Сопровождала разработку — спецификации, QA‑сессии, итерации по обратной связи.</li>
                    </ul>

                </div>

                <div>
                    <PhotoSlider className="sliderMargin" group="othersAppSlider1" />
                </div>

                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>В результате</strong>получили за первый месяц  10К установок и 120 активных водителей.</p>
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>My Vet Coach (AstuVet)- приложение “цифровой ветеринар”</h2>
                <p>UX & UI Designer  •  Май — Авг 2020</p>
            </div>



            <Slider />

            <div className='othersContent'>

                <div>

                    <strong>Что сделала</strong>
                    <ul>
                        <li>Спроектировала ключевые разделы My Vet  Coach, Chat‑bot, Tips, Goods, Pet Profile, Notification center, Payments.</li>
                        <li>MVP созданный за 8 недель для TechPet Conf помог команде убедительно показать core‑фичи инвесторам.</li>
                        <li>Разработала и внедрила стратегию монетизации приложения, что позволило заработать $10,000 в первый месяц после запуска.</li>
                        <li>2 цикла тестирования — исправили боли онбординга, повысили CR подписок.</li>
                    </ul>

                </div>

                <div>
                    <PhotoSlider className="sliderMargin" group="othersAppSlider2" />
                </div>

                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>В результате</strong>получили за первый месяц  10К установок и 120 активных водителей.</p>
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>Твой наставник - приложение для подбора наставников</h2>
                <p>UX & UI Designer  •  Май — Авг 2020</p>
            </div>



            <Slider />

            <div className='othersContent'>

                <div>

                    <strong>Что сделала</strong>
                    <ul>
                        <li>Собрала ядро MVP — спроектировала фундаментальные сценарии: поиск наставника, заполнение профиля‑эксперта, заявка на консультацию.</li>
                        <li>Онбординг для экспертов — опросник с тегами навыков → автоматический рейтинг и выдача в каталоге.</li>
                        <li>Каталог mentors 1‑клика — быстрый фильтр + карточка «о себе / кейсы» = запись за 3 шага.</li>
                        <li>Профиль пользователя — единый экран с био, настройками конфиденциальности и ссылками на соцсети</li>
                        <li>Дизайн‑гид — минималистичная светлая тема + фирменный «mentor‑gold» для CTA, 40+ компонентов.</li>
                    </ul>

                </div>

                <div>
                    <PhotoSlider className="sliderMargin" group="othersAppSlider6" />
                </div>

                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>В результате</strong>1000 + установок за первую неделю, 14 сфер наставничества и первые платные сессии уже в первый месяц; рейтинг в App Store держится на 3,7 ★, что подтверждает востребованность MVP.</p>
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>Твой наставник - приложение для подбора наставников</h2>
                <p>UX & UI Designer  •  Май — Авг 2020</p>
            </div>



            <Slider />

            <div className='othersContent'>

                <div>

                    <strong>Что сделала</strong>
                    <ul>
                        <li>Собрала ядро MVP — спроектировала фундаментальные сценарии: поиск наставника, заполнение профиля‑эксперта, заявка на консультацию.</li>
                        <li>Онбординг для экспертов — опросник с тегами навыков → автоматический рейтинг и выдача в каталоге.</li>
                        <li>Каталог mentors 1‑клика — быстрый фильтр + карточка «о себе / кейсы» = запись за 3 шага.</li>
                        <li>Профиль пользователя — единый экран с био, настройками конфиденциальности и ссылками на соцсети</li>
                        <li>Дизайн‑гид — минималистичная светлая тема + фирменный «mentor‑gold» для CTA, 40+ компонентов.</li>
                    </ul>

                </div>

                <div>
                    <PhotoSlider className="sliderMargin" group="othersAppSlider7" />
                </div>

                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>В результате</strong>1000 + установок за первую неделю, 14 сфер наставничества и первые платные сессии уже в первый месяц; рейтинг в App Store держится на 3,7 ★, что подтверждает востребованность MVP.</p>
                </div>

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
