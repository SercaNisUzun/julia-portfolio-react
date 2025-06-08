import React from 'react'
import Slider from './Slider'
import PhotoSlider from './photoSlider'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import brandSliderBanner from "../assets/brandSliderBanner.svg"
import SinglePhotoSlider from './SinglePhotoSlider';

const sliderData1 = [
    "Welcome Book", "New-Hire Journey", "Onboarding", "Company Culture",
    "Checklist", "Interactive Links", "Brand Palette"
];

const sliderData2 = [
    "Relocation Guide", "Visa Process", "Budget Calculator", "Checklist",
    "Employee Experience", "Brand Design"
];

const sliderData3 = [
    "Relocation Guide", "Relocation Factsheet", "Visa Timeline", "Banking", "Mobile Services",
    "Budget Planner", "HR Support"
];

const sliderData4 = [
    "Brandbook", "Visual Identity", "Color Palette", "Logo Usage", "Typography",
    "Tone of Voice", "Guidelines"
];


function OtherBrands() {
    return (
        <div className='otherBrands'>

            <div className='aboutText'>
                <h2>Maree Welcome Book — онбординг-презентация для новых сотрудников</h2>
            </div>

            <Slider items={sliderData1} />

            <div className='othersContent'>

                <div>
                    <p>
                        Welcome Book Maree знакомит новичка с культурой компании: миссия, ценности, карта команд, ключевые процессы и чек-лист первых шагов сверстаны в фирменной палитре и паттернах бренда. Кликабельные ссылки на Notion, Slack и HR-контакты ведут прямо к нужным ресурсам. Цель — убрать хаос первой недели и создать чувство причастности; после запуска HR фиксируют −30 % времени на онбординг.
                    </p>
                </div>

                <div className='singlePhotoSlider'>
                    <img src={brandSliderBanner} alt="" />
                    <SinglePhotoSlider group="othersBrandSlider1" />
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>«Релокация сотрудников Maree» — интерактивный HR-гайд</h2>
            </div>

            <Slider items={sliderData2} />

            <div className='othersContent'>

                <div>
                    <p>
                        Интерактивный гайд по релокации объединяет всё критичное для переезда: пошаговый тайм-лайн с дэдлайнами, визовые варианты, бюджет-калькулятор, карты районов и подборка проверенных сервисов жилья, чек-листы вещей и документов, а также прямые контакты HR- и юридической команды — всё в фирменной графике Maree. Главная цель — снизить стресс сотрудника, унифицировать процедуру для всех стран и сократить нагрузку на HR, чтобы команда тратила меньше времени на одноразовые вопросы и могла фокусироваться на стратегических задачах.
                    </p>
                </div>

                <div className='singlePhotoSlider'>
                    <img src={brandSliderBanner} alt="" />
                    <SinglePhotoSlider group="othersBrandSlider2" />
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>China Relocation Factsheet — экспресс-гид для Maree</h2>
            </div>

            <Slider items={sliderData3} />

            <div className='othersContent'>

                <div>
                    <p>
                        Factsheet «Переезд в Китай» упаковывает всё ключевое: пошаговый тайм-лайн виз и разрешений, обзор банков и рабочих карт (UnionPay, Alipay & WeChat Pay), выбор мобильных операторов, готовые таблицы расходов и способы оплаты, краткие профили городов с арендами и климатом, бытовые лайф-хаки (VPN, переводчики, экстренные номера) и чек-лист документов на выезд / въезд — всё в фирменной графике Maree. Цель гида закрыть повторяющиеся вопросы, что точно сэкономит время HR и даст сотруднику готовый план действий от сборов чемодана до первой зарплаты в Китае.
                    </p>
                </div>

                <div id='brandRegularSlide'>
                    <PhotoSlider className="sliderMargin" group="othersBrandSlider3" />
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>PROFSER Brand Guidelines — брендбук для аутсорсинговой бухгалтерской фирмы</h2>
            </div>

            <Slider items={sliderData4} />

            <div className='othersContent'>

                <div>
                    <p>
                        Brandbook задаёт единый визуальный язык: миссия и позиционирование, тон общения с клиентами, правила логотипа и его safe-zone, фирменная палитра (чёрный / белый / акцентный красный), типографика Nante Sans + Montserrat с чёткой иерархией. Гайд позволяет маркетингу и подрядчикам выпускать документы и соцмедиа-креативы без расхождений в стиле компании, поддерживая узнаваемость и экспертный образ PROFSER.
                    </p>
                </div>

                <div className='singlePhotoSlider'>
                    <img src={brandSliderBanner} alt="" />
                    <SinglePhotoSlider group="othersBrandSlider4" />
                </div>

            </div>

        </div>

    )
}

export default OtherBrands
