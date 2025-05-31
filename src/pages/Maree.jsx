import React from 'react'
import mobileMaree from '../assets/mobileMaree.webp'
import maree from '../assets/Maree.webp'
import logoMaree from '../assets/logoMaree.webp'
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
import mareeBanner from '../assets/webMareeBanner.webp'
import SinglePhotoSlider from '../components/SinglePhotoSlider';
import video from '../assets/mareeVideo.mp4'


function Maree() {

    const navigate = useNavigate();

    return (
        <div className='maree'>

            <div className='aboutMaree'>
                <div className='imgMaree'>
                    <picture>
                        <source srcSet={mobileMaree} media="(max-width: 767px)" />
                        <source srcSet={maree} />
                        <img src={maree} alt="Maree project" />
                    </picture>
                </div>

                <div className='aboutText'>
                    <img src={logoMaree} alt="" />
                    <h2>DTC-бренд из США, создающий уход за кожей и волосами на основе натуральных и трендовых ингредиентов.</h2>
                    <p><strong>Роль:</strong>Product designer</p>
                    <p><strong>Фокус:</strong>Корзина, байблок, продуктовая страница, прелендинги</p>
                    <p><strong>Цель:</strong>Повысить конверсию и улучшить пользовательский опыт</p>
                    <button>Подробнее о проекте</button>
                </div>
            </div>

            <div className='mareeContent'>

                <div>
                    <button onClick={() => navigate("/")} className='greenBack'><IoMdArrowDropleft style={{ fontSize: '50px' }} />Назад
                    </button>
                </div>

                <div>
                    <h2>Контекст</h2>
                    <p>Когда я присоединилась к проекту, MAREE уже был узнаваемым брендом в США с сильным продуктом, но цифровой опыт был фрагментирован: ключевые точки принятия решения (корзина, байблок, PDP, рекламные прелендинги) не работали как единое целое.</p>
                </div>

                <hr />

                <div>
                    <h2>Задачи</h2>
                    <ul style={{ listStyle: 'none' }}>
                        <li><MdOutlineArrowRightAlt className='liArrow' />
                            <span>Связать пользовательский путь от рекламы до покупки.</span></li>
                        <li><MdOutlineArrowRightAlt className='liArrow' />
                            <span>Снизить количество брошенных корзин и увеличить средний чек.</span></li>
                        <li><MdOutlineArrowRightAlt className='liArrow' />
                            <span>Показать ценность продукта через визуал, UGC и чёткую выгоду.</span></li>
                    </ul>
                </div>

                <hr />

                <div>
                    <h2>Решение 1: Корзина</h2>
                    <p><strong>Проблема</strong>- пользователь доходит до корзины и не завершает покупку.</p>

                    <strong>Что сделала</strong>
                    <ul>
                        <li>Проанализировала &gt; 100 сессий, выделила основное барьерное мышление: «а точно ли это мне нужно?»</li>
                        <li>Добавила триггеры доверия (эмоциональное подтверждение «вы сделали правильный выбор»).</li>
                        <li>Добавила клеймы о выгодных предложения при покупке нескольких айтемов</li>
                        <li>Внедрила прогресс‑бар и безопасный UX удаления товара.</li>
                        <li>Протестировала выгодные предложения при покупке нескольких позиций.</li>
                    </ul>

                    <div className='otherWeb'>
                        <div id='mareeContainer' className='singlePhotoSlider'>

                            <img src={mareeBanner} alt="" />
                            <img id='mareePhoto' src={basket1} alt="" />

                        </div>
                    </div>

                    <div className='otherWeb'>
                        <div id='mareeContainer' className='singlePhotoSlider'>

                            <img src={mareeBanner} alt="" />
                            <img id='mareePhoto' src={basket2} alt="" />

                        </div>
                    </div>

                    <div className='purpleBgText'>
                        <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>В результате</strong>количество брошенных корзин снизилось на 17% в первые 2 недели после внедрения.</p>
                    </div>
                </div>

                <hr />

                <div>
                    <h2>Решение 2: Байблок</h2>
                    <p><strong>Проблема</strong>- Изначально байблок давил на пользователя и лишал его выбора, тк по умолчанию была выбрана подписка, что приносило большое количество чарджбеков ежемесячно.</p>

                    <strong>Что сделала</strong>
                    <ul>
                        <li>Сделала пошаговый выбор: сначала количество айтемов, потом способ покупки (Subscription или One- time)</li>
                        <li>Визуально выделила оптимальный вариант (2 товара, +бесплатная доставка)</li>
                        <li>По умолчанию сделали выбранной разовую покупку: теперь пользователь сам выбирает, но сразу видит, что теряет, если не подписывается</li>
                        <li>Добавила пояснения прямо в блок: что входит в цену, что он экономит, что получает подписавшись на регулярную доставку продукта</li>
                        <li>Убрала лишний текст и маркетинговый «шум»</li>
                    </ul>

                    <div className='blockPic'>

                        <div className='flexBlock'>

                            <strong>Старая версия: Интерфейс перегружен</strong>

                            <picture>
                                <source srcSet={mobileBlock} media="(max-width: 767px)" />
                                <source srcSet={block} />
                                <img src={block} alt="Maree project" />
                            </picture>

                        </div>

                        <hr />

                        <div className='flexBlock'>

                            <strong>Обновленная версия, позволившая повысить средний чек</strong>

                            <picture>
                                <source srcSet={mobileBlock2} media="(max-width: 767px)" />
                                <source srcSet={block1} />
                                <img src={block1} alt="Maree project" />
                            </picture>

                        </div>


                    </div>

                    <div className='purpleBgText'>
                        <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>В результате</strong>пользователи стали чаще покупать 2-3 товара, за счет очевидной выгоды — а мы увеличили средний чек и уменьшили кол-во чарджбеков.</p>
                    </div>
                </div>

                <hr />

                <div>
                    <h2>Решение 3: Продуктовая страница</h2>
                    <p><strong>Проблема</strong>- старая PDP не раскрывала ценность продукта. Пользователь попадал туда и видел стандартное: немного текста, “красивый”, но не закрывающий вопросы и не доносящий ценность листинг. </p>

                    <p>Старая продуктовая страница не раскрывала ценность продукта. Пользователь попадал туда и видел стандартное: немного текста, “красивый”, но не закрывающий вопросы и не доносящий ценность листинг, кнопка “добавить в корзину”.</p>

                    <p>Я продумала <strong>сильный продающий листинг</strong> , в котором каждое фото показывало ценность продукта: эффект, ощущения, результат, формат применения, чистые эко-френдли составы.</p>

                    <p>Так же добавила <strong>блок с видео-отзывами</strong>  (UGC контент) — он отлично сработал как сошиал прув, усиливая доверие и подтверждая эффект продукта в реальном использовании.</p>

                    <strong>Что сделала</strong>
                    <ul>
                        <li>Продумала сильный продающий листинг, в котором каждое фото показывало ценность продукта: эффект, ощущения, результат, формат применения, чистые эко-френдли составы</li>
                        <li>Добавила видео‑отзывы UGC — он отлично сработал как social prove, усиливая доверие и подтверждая эффект продукта в реальном использовании</li>
                        <li>Добавила новый байблок, о котором говорила выше</li>
                    </ul>

                    <div className='purpleBgText'>
                        <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>В результате</strong>+12 % конверсия PDP, больше времени на странице, чаще кликают «Добавить в корзину».</p>
                    </div>
                </div>

                <hr />

                <div>
                    <h2>Решение 4: Страница “Build your bundle”</h2>
                    <p><strong>Проблема</strong>- пользователи редко добавляли несколько продуктов, тк не было качественного аппсейла. Не хватало удобного способа показать, как продукты можно сочетать между собой для комплексного решения задач. Это ограничивало рост среднего чека. </p>

                    <p>Мы разработали и внедрили функцию Build Your Bundle — конструктор, где покупатель может легко подобрать продукты под свои потребности, а за сбор бандла получает выгодную скидку.</p>

                    <strong>Что сделала</strong>
                    <ul>
                        <li>Разработала структуру страницы и логику добавления продуктов в бандл</li>
                        <li>Сделала визуальное оформление и проработала UX для удобного выбора товаров</li>
                        <li>Разработала блок с визуальным интерактивным конструктором: добавление товаров и отображение скидки в реальном времени</li>
                        <li>Продумала UX/UI: простая и понятная механика добавление товаров в бандл через привычный каталог</li>
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
                        <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>В результате</strong> за первый месяц среднее количество товаров (3-5 айтемов) в заказе выросло на 25%.</p>
                    </div>
                </div>

                <hr />

                <div>
                    <h2>Решение 5: Прелендинги</h2>
                    <p><strong>Проблема</strong>- рекламный трафик сливался; прелендинги не усиливали сообщение и не помогали принять решение о покупке.</p>

                    <strong>Что сделала</strong>
                    <ul>
                        <li>Подошла к прелендингам как к самостоятельному UX-продукту: каждый прелендинг — это мини-воронка, которая прогревает интерес, отвечает на возражения и направляет пользователя к покупке.</li>
                        <li>Провела серию A/B‑тестов: кастомные заходы под оффер, короткие лендинги «5 причин почему тебе нужен этот продукт», паттерны доверия (UGC)</li>
                        <li>Самыми успешными оказались сторителлинговые прелендинги, которые прогревали через боль → решение → эмоцию.</li>
                    </ul>

                    <div className='otherWeb'>
                        <div className='singlePhotoSlider'>

                            <img src={mareeBanner} alt="" />
                            <SinglePhotoSlider group='mareePreLands' />

                        </div>

                    </div>


                    <div className='purpleBgText'>
                        <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>В результате</strong>рост CTR и ROAS, особенно на холодном трафике (NC ROAS).</p>
                    </div>
                </div>

                <hr />

                <div>
                    <h2>Что это дало бренду</h2>
                    <p>Вместо точечных улучшений — мы выстроили сильную, логичную воронку.</p>

                    <ul>
                        <li>Вход с рекламой через понятный прелендинг</li>
                        <li>Убеждение через контент и структуру продуктовой</li>
                        <li>Мотивация к покупке в корзине</li>
                    </ul>

                    <div className='purpleBgText'>

                        <h2>Итог</h2>
                        <ul>
                            <li><strong>Конверсия</strong>Значительное увеличение конверсии на всех этапах воронки.</li>
                            <li><strong>Доверие:</strong> Повышение уровня доверия пользователей к бренду.</li>
                            <li><strong>Повторные покупки:</strong>Увеличение количества повторных покупок, положительных отзывов и среднего чека.</li>
                        </ul>
                    </div>
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

export default Maree
