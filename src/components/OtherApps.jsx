import React from 'react'
import Slider from './Slider'
import PhotoSlider from './photoSlider'
import { MdOutlineArrowRightAlt } from "react-icons/md";

function OtherApps() {

    const sliderData1 = [
        "Product Design", "Human Design", "Dark UI", "Ui Kit",
        "Onboarding", "Paywall A/B", "Bodychart UX", "Multiple Profiles", "Push Retention"
    ];

    const sliderData2 = [
        "Product Design", "Nutrition Tech", "Instant Booking", "Forum UX",
        "Smart Filters", "Design System", "Monetization", "A/B Testing", "User Interviews"
    ];

    const sliderData3 = [
        "UI/UX Design", "CJM", "UX Flows", "Route Tracking", "Instant Booking",
        "Figma Prototype", "Ui Kit", "A/B Testing", "iOS & Android", "B2C"
    ];

    const sliderData4 = [
        "Product Design", "VetTech", "Chat-Bot", "MVP", "Monetization",
        "User Research", "Ui Kit", "A/B Testing", "iOS & Android", "B2C"
    ];

    const sliderData5 = [
        "UI/UX Design", "Mentor Marketplace", "MVP", "Expert Onboarding",
        "Monetization", "UX Flows", "Ui Kit", "User Profiles", "iOS & Android", "B2C"
    ];

    const sliderData6 = [
        "UI/UX Design", "VPN", "MVP", "Server Picker", "Monetization",
        "Dark UI", "Community Launch", "iOS & Android"
    ];

    return (
        <div className="appSliderHeight">

            <div className='aboutText'>
                <h2>Human Design - приложение для ежедневных практик самопознания</h2>
                <p>UX & UI Designer  •  Май — Авг 2020</p>
            </div>



            <Slider items={sliderData1} />

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
                    <PhotoSlider group="othersAppSlider5" />
                </div>

                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>В результате</strong> +18 % к конверсии в триал после внедрения двухэтапного paywall и спец‑оффера, 4 600 установок и 4,6 ★ средний рейтинг в первые 90 дней.</p>
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>НутриКампус (MIIN/ Топ-1 сообщество нутрициологов в СНГ)</h2>
                <p>UX & UI Designer</p>
            </div>



            <Slider items={sliderData2} />

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
                    <PhotoSlider group="othersAppSlider3" />
                </div>

                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>В результате</strong> 10 000 установок и ≈ 1 200 консультаций в первый месяц (рост конверсии к записи +25 %).</p>
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>TAXI+ — мобильное приложение такси</h2>
                <p>UX & UI Designer</p>
            </div>



            <Slider items={sliderData3} />

            <div className='othersContent'>

                <div>

                    <strong>Что сделала</strong>
                    <ul>
                        <li>Собрала требования и CJM — выделила core‑фичи: заказ, расчёт цены, трекинг маршрута, оплата.</li>
                        <li>Спроектировала UX‑флоу — 80+ экранов, 4 основных сценария (поездка «сейчас», предзаказ, добавление нескольких остановок, “SOS”).</li>
                        <li>Собрала интерактивный прототип в Figma — кликабельный, готовый для юзертестов и демонстраций инвесторам.</li>
                        <li>Сопровождала разработку — спецификации, QA‑сессии, итерации по обратной связи.</li>
                    </ul>

                </div>

                <div>
                    <PhotoSlider group="othersAppSlider1" />
                </div>

                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>В результате</strong> получили за первый месяц  10К установок и 120 активных водителей.</p>
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>My Vet Coach (AstuVet)- приложение “цифровой ветеринар”</h2>
                <p>UX & UI Designer</p>
            </div>



            <Slider items={sliderData4} />

            <div className='othersContent'>

                <div>

                    <strong>Что сделала</strong>
                    <ul>
                        <li>Спроектировала ключевые разделы My Vet  Coach, Chat‑bot, Tips, Goods, Pet Profile, Notification center, Payments.</li>
                        <li>MVP созданный за 8 недель для TechPet Conf помог команде презентовать core‑фичи инвесторам.</li>
                        <li>Разработала и внедрила стратегию монетизации приложения, что позволило заработать $10,000 в первый месяц после запуска.</li>
                        <li>2 цикла тестирования — исправили боли онбординга, повысили CR подписок.</li>
                    </ul>

                </div>

                <div>
                    <PhotoSlider group="othersAppSlider2" />
                </div>


                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>В результате</strong> +20 % к конверсии в подписку и $10 k выручки за первый месяц после запуска, а так же успешная презентация проекта на вет конференции в ЛА и инвесторам.</p>
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>Твой наставник - приложение для подбора наставников</h2>
                <p>UX & UI Designer</p>
            </div>



            <Slider items={sliderData5} />

            <div className='othersContent'>

                <div>

                    <strong>Что сделала</strong>
                    <ul>
                        <li>Собрала ядро MVP — спроектировала фундаментальные сценарии: поиск наставника, заполнение профиля‑эксперта, заявка на консультацию.</li>
                        <li>Онбординг для экспертов — опросник с тегами навыков → автоматический рейтинг и выдача в каталоге.</li>
                        <li>Каталог mentors 1‑клика — быстрый фильтр + карточка «о себе / кейсы» = запись за 3 шага.</li>
                        <li>Профиль пользователя — единый экран с био, настройками конфиденциальности и ссылками на соцсети</li>
                        <li>Дизайн‑гид — минималистичная светлая тема + фирменный «mentor‑gold» для CTA, <span style={{ textDecoration: "Line-through" }}>40+ компонентов.</span></li>
                    </ul>

                </div>

                <div>
                    <PhotoSlider group="othersAppSlider6" />
                </div>

                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>В результате</strong> 1000 + установок за первую неделю, 14 сфер наставничества и первые платные сессии уже в первый месяц; рейтинг в App Store держится на 3,7 ★, что подтверждает востребованность MVP.</p>
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>AMORE VPN — личный VPN-сервис блогера @amocucinare</h2>
                <p>UX & UI Designer</p>
            </div>



            <Slider items={sliderData6} />

            <div className='othersContent'>

                <div>

                    <strong>Что сделала</strong>
                    <ul>
                        <li>Собрала ядро MVP: instant-connect, автоподбор «Быстрый сервер», ручной выбор страны, таймер сессии.</li>
                        <li>Продумала монетизацию: лимит «3 устройства на ключ».</li>
                        <li>Собрала кликабельный прототип в Figma и передала разработке для быстрой интеграции.</li>
                        <li>Создала простые анимации для первого экрана и монетки подключения.</li>
                    </ul>

                </div>


                <div>
                    <PhotoSlider group="othersAppSlider7" />
                </div>

                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>В результате</strong> MVP собран за 3 недели, протестирован на 500+ подписчиках: 86 % сразу подключаются к серверу; оунер готовит запуск платных ключей внутри комьюнити.</p>
                </div>

            </div>

        </div>
    )
}

export default OtherApps
