import React from 'react'
import mobileBanner from '../assets/mobOthersBanner.webp'
import tabBanner from '../assets/tabOthersBanner.webp'
import bigBanner from '../assets/bigOthersBanner.webp'
import { IoMdArrowDropleft } from "react-icons/io"
import Slider from '../components/Slider'
import PhotoSlider from '../components/photoSlider'



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

            <div>
                <button onClick={() => navigate("/")} className='greenBack'><IoMdArrowDropleft style={{ fontSize: '50px' }} />Назад
                </button>
            </div>

            <div className='tabs'>
                <button>Apps</button>
                <button>Websites</button>
                <button>Брендинг</button>
            </div>

            <div className='aboutText'>
                <h2>TAXI+ — мобильное приложение такси</h2>
                <p>UX & UI Designer  •  Май — Авг 2020</p>
            </div>

            <Slider />

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
                <PhotoSlider group="othersAppSlider1" />
            </div>





        </div>
    )
}

export default Others
