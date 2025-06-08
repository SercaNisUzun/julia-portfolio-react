import React from 'react'
import Slider from './Slider'
import PhotoSlider from './photoSlider'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import SinglePhotoSlider from './SinglePhotoSlider';
import vivienBanner from '../assets/webVivienBanner.svg'
import mareeBanner from '../assets/webMareeBanner.svg'
import astoBanner from '../assets/webAstoBanner.svg'


const sliderData1 = [
    "Web Design", "Portfolio Site", "UX Flows", "UI Kit",
    "Category", "Filters", "SEO", "Dev Handoff", "Figma", "Mobile First"
];

const sliderData2 = [
    "Platform Design", "VetTech", "Dashboard", "Handout Library",
    "One-Click Share", "Design System", "Clinic Onboarding", "Freemium Monetization"
];

const sliderData3 = [
    "Product Design", "Shopify", "Bundles & Upsell", "Design System", "PDP Optimization",
    "Mobile UX", "Performance"
];


function OtherBrands() {
    return (
        <div className='otherWeb'>

            <div className='aboutText'>
                <h2>Vivien Decor — сайт студии праздничного декора в Сочи</h2>
            </div>

            <Slider items={sliderData1} />

            <div className='othersContent'>

                <div>

                    <strong>Что сделала</strong>
                    <ul>
                        <li>Выстроила информационную архитектуру — отразила путь «Главная → Коллекции → Курс → FAQ → Контакты».</li>
                        <li>Спроектировала UX-флоу портфолио — карточки + фильтры по четырём направлениям, которые позволяют пользователю мгновенно найти релевантный кейс.</li>
                        <li>Создала UI-кит — фирменная палитра, модульная сетка, компоненты для галерей и CTA-блоков; mobile first.</li>
                        <li>Подготовила dev-handoff-документацию — таблица SEO-ключей, готовые метатеги (title, description, OG) и гайд по экспорту/сжатию изображений, чтобы разработка внедрила всё без потерь.</li>
                    </ul>

                </div>

                <div className='singlePhotoSlider'>
                    <img src={vivienBanner} alt="" />
                    <SinglePhotoSlider group='otherWebSlider1' />
                </div>


                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>В результате</strong>  сайт-портфолио стал важным источником лидов: в первом квартале веб-сайт принес 25 % всех заказов.</p>
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>AstuVet — веб-платформа для ветеринарных клиник</h2>
            </div>

            <Slider items={sliderData2} />

            <div className='othersContent'>

                <div>

                    <strong>Что сделала</strong>

                    <ul>
                        <li>Собрала модульную IA — дашборд, библиотека AstuEdu (3 500 + handout-карточек), дозовые калькуляторы, 3D-модели патологий, чат и обучающие курсы в единой навигации.</li>
                        <li>Добавила функцию шеринга карточек в соцсети и клиник-чаты: публикация материалов из панели превратилась в канал freemium-монетизации — базовый лимит раздаётся бесплатно, расширенные пакеты и детальная аналитика продаются по подписке.</li>
                        <li>Создала дизайн-систему AstuCore — 70 + адаптивных компонентов, таблицы и интерактивные 3D-иллюстрации; единые токены цвета и типографики упрощают масштабирование.</li>
                        <li>Упростила онбординг клиники — регистрация, бренд-настройки и импорт базы пациентов занимают ≤ 5 минут.</li>
                    </ul>

                </div>

                <div className='singlePhotoSlider'>
                    <img src={astoBanner} alt="" />
                    <SinglePhotoSlider group='otherWebSlider2' />
                </div>

                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>В результате</strong>  за 6 месяцев с релиза платформой пользовались сотни клиник; handout-карточки отправлены владельцам питомцев 25 000 + раз, а новый «share-to-social» конвертирует 15 % клиник в платную подписку; а так же проект AstuVet привлёк €450 k инвестиций на масштабирование.</p>
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>MAREE — e-commerce проект на платформе Shopify</h2>
            </div>

            <Slider items={sliderData3} />

            <div className='othersContent'>

                <div>

                    <ul>
                        <li>Разработала новую корзину с сильным UX — sticky-итог, прогресс-бар с геймификацией и возможность из корзины переключиться на подписку с регулярной доставкой продукта улучшили показатели LTV и снизили долю брошенных заказов.</li>
                        <li>Собрала PDP для бандлов — медиабайеры вели трафик именно на эти страницы и получали высокий ROAS.</li>
                        <li>Усилила информативность продуктовых страниц — раскрывающие тексты, блок «Before / After», подробные описания для ингредиентов; доверие выросло, вопросов в чат стало меньше.</li>
                        <li>Сконструировала продающие пре-лендинги для Facebook-рекламы, чтобы «подогреть» аудиторию перед переходом на основной сайт.</li>
                        <li>Проводила исследования и A/B-тесты, чтобы найти точки роста с целью повысить конверсию и средний чек бренда.</li>
                    </ul>

                </div>

                <div className='singlePhotoSlider'>
                    <img src={mareeBanner} alt="" />
                    <SinglePhotoSlider group='otherWebSlider3' />
                </div>

                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>В результате</strong>  после обновления бандлы дают 28 % всех заказов, а средний чек вырос на +18 %; мобильная конверсия поднялась с 1,9 % до 5,5 %.</p>
                </div>

                <hr />

            </div>


        </div>

    )
}

export default OtherBrands
