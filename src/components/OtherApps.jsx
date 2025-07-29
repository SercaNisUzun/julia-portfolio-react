import React from 'react'
import Slider from './Slider'
import PhotoSlider from './photoSlider'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useTranslation } from 'react-i18next';

function OtherApps() {

    const { t } = useTranslation('otherApps');

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
                <h2>{t('humanHeader')}</h2>
                <p>{t('humanDate')}</p>
            </div>

            <Slider items={sliderData1} />

            <div className='othersContent'>

                <div>

                    <strong>{t('liHeader')}</strong>
                    <ul>
                        <li>{t('humanLi1')}</li>
                        <li>{t('humanLi2')}</li>
                        <li>{t('humanLi3')}</li>
                        <li>{t('humanLi4')}</li>
                    </ul>
                </div>

                <div>
                    <PhotoSlider group="othersAppSlider5" />
                </div>

                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>{t('purpleHeader')}</strong> {t('purple1p')}</p>
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>{t('nutriHeader')}</h2>
                <p>UX & UI Designer</p>
            </div>

            <Slider items={sliderData2} />

            <div className='othersContent'>

                <div>

                    <strong>{t('liHeader')}</strong>
                    <ul>
                        <li>{t('nutriLi1')}</li>
                        <li>{t('nutriLi2')}</li>
                        <li>{t('nutriLi3')}</li>
                        <li>{t('nutriLi4')}</li>
                        <li>{t('nutriLi5')}</li>
                        <li>{t('nutriLi6')}</li>
                    </ul>

                </div>

                <div>
                    <PhotoSlider group="othersAppSlider3" />
                </div>

                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>{t('purpleHeader')}</strong> {t('purple2p')}</p>
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>{t('taxiHeader')}</h2>
                <p>UX & UI Designer</p>
            </div>

            <Slider items={sliderData3} />

            <div className='othersContent'>

                <div>

                    <strong>{t('liHeader')}</strong>
                    <ul>
                        <li>{t('taxiLi1')}</li>
                        <li>{t('taxiLi2')}</li>
                        <li>{t('taxiLi3')}</li>
                        <li>{t('taxiLi4')}</li>
                    </ul>

                </div>

                <div>
                    <PhotoSlider group="othersAppSlider1" />
                </div>

                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>{t('purpleHeader')}</strong> {t('purple3p')}</p>
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>{t('vetHeader')}</h2>
                <p>UX & UI Designer</p>
            </div>

            <Slider items={sliderData4} />

            <div className='othersContent'>

                <div>

                    <strong>{t('liHeader')}</strong>
                    <ul>
                        <li>{t('vetLi1')}</li>
                        <li>{t('vetLi2')}</li>
                        <li>{t('vetLi3')}</li>
                        <li>{t('vetLi4')}</li>
                    </ul>

                </div>

                <div>
                    <PhotoSlider group="othersAppSlider2" />
                </div>


                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>{t('purpleHeader')}</strong> {t('purple4p')}</p>
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>{t('mentorHeader')}</h2>
                <p>UX & UI Designer</p>
            </div>

            <Slider items={sliderData5} />

            <div className='othersContent'>

                <div>

                    <strong>{t('liHeader')}</strong>
                    <ul>
                        <li>{t('mentorLi1')}</li>
                        <li>{t('mentorLi2')}</li>
                        <li>{t('mentorLi3')}</li>
                        <li>{t('mentorLi4')}</li>
                        <li>{t('mentorLi5')} <span style={{ textDecoration: "Line-through" }}>{t('mentorLispan')}</span></li>
                    </ul>

                </div>

                <div>
                    <PhotoSlider group="othersAppSlider6" />
                </div>

                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>{t('purpleHeader')}</strong> {t('purple5p')}</p>
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>{t('vpnHeader')}</h2>
                <p>UX & UI Designer</p>
            </div>

            <Slider items={sliderData6} />

            <div className='othersContent'>

                <div>

                    <strong>{t('liHeader')}</strong>
                    <ul>
                        <li>{t('vpnLi1')}</li>
                        <li>{t('vpnLi2')}</li>
                        <li>{t('vpnLi3')}</li>
                        <li>{t('vpnLi4')}</li>
                    </ul>

                </div>


                <div>
                    <PhotoSlider group="othersAppSlider7" />
                </div>

                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>{t('purpleHeader')}</strong> {t('purple6p')}</p>
                </div>

            </div>

        </div>
    )
}

export default OtherApps