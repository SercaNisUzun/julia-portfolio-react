import React from 'react'
import Slider from './Slider'
import PhotoSlider from './photoSlider'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import SinglePhotoSlider from './SinglePhotoSlider';
import vivienBanner from '../assets/webVivienBanner.svg'
import mareeBanner from '../assets/webMareeBanner.svg'
import astoBanner from '../assets/webAstoBanner.svg'
import { useTranslation } from 'react-i18next';

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

    const { t } = useTranslation('otherWeb');

    return (
        <div className='otherWeb'>

            <div className='aboutText'>
                <h2>{t('vivienHeader')}</h2>
            </div>

            <Slider items={sliderData1} />

            <div className='othersContent'>

                <div>

                    <strong>{t('liHeader')}</strong>
                    <ul>
                        <li>{t('vivienLi1')}</li>
                        <li>{t('vivienLi2')}</li>
                        <li>{t('vivienLi3')}</li>
                        <li>{t('vivienLi4')}</li>
                    </ul>

                </div>

                <div className='singlePhotoSlider'>
                    <img src={vivienBanner} alt="" />
                    <SinglePhotoSlider group='otherWebSlider1' />
                </div>


                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>{t('purpleHeader')}</strong>{t('purple1p')}</p>
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>{t('astoHeader')}</h2>
            </div>

            <Slider items={sliderData2} />

            <div className='othersContent'>

                <div>

                    <strong>{t('liHeader')}</strong>

                    <ul>
                        <li>{t('astoLi1')}</li>
                        <li>{t('astoLi2')}</li>
                        <li>{t('astoLi3')}</li>
                        <li>{t('astoLi4')}</li>
                    </ul>

                </div>

                <div className='singlePhotoSlider'>
                    <img src={astoBanner} alt="" />
                    <SinglePhotoSlider group='otherWebSlider2' />
                </div>

                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>{t('purpleHeader')}</strong>{t('purple2p')}</p>
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>{t('mareeHeader')}</h2>
            </div>

            <Slider items={sliderData3} />

            <div className='othersContent'>

                <div>

                    <ul>
                        <li>{t('mareeLi1')}</li>
                        <li>{t('mareeLi2')}</li>
                        <li>{t('mareeLi3')}</li>
                        <li>{t('mareeLi4')}</li>
                        <li>{t('mareeLi5')}</li>
                    </ul>

                </div>

                <div className='singlePhotoSlider'>
                    <img src={mareeBanner} alt="" />
                    <SinglePhotoSlider group='otherWebSlider3' />
                </div>

                <div className='purpleBgText'>
                    <p><MdOutlineArrowRightAlt className='liArrow' /> <strong>{t('purpleHeader')}</strong>{t('purple3p')}</p>
                </div>

                <hr />

            </div>


        </div>

    )
}

export default OtherBrands
