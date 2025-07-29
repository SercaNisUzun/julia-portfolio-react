import React from 'react'
import Slider from './Slider'
import PhotoSlider from './photoSlider'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import brandSliderBanner from "../assets/brandSliderBanner.svg"
import SinglePhotoSlider from './SinglePhotoSlider';
import { useTranslation } from 'react-i18next';

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

    const { t } = useTranslation('otherBrand');

    return (
        <div className='otherBrands'>

            <div className='aboutText'>
                <h2>{t('mareeHeader')}</h2>
            </div>

            <Slider items={sliderData1} />

            <div className='othersContent'>

                <div>
                    <p>{t('mareeP')}</p>
                </div>

                <div className='singlePhotoSlider'>
                    <img src={brandSliderBanner} alt="" />
                    <SinglePhotoSlider group="othersBrandSlider1" />
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>{t('maree2Header')}</h2>
            </div>

            <Slider items={sliderData2} />

            <div className='othersContent'>

                <div>
                    <p>{t('maree2P')}</p>
                </div>

                <div className='singlePhotoSlider'>
                    <img src={brandSliderBanner} alt="" />
                    <SinglePhotoSlider group="othersBrandSlider2" />
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>{t('chinaHeader')}</h2>
            </div>

            <Slider items={sliderData3} />

            <div className='othersContent'>

                <div>
                    <p>{t('chinaP')}</p>
                </div>

                <div id='brandRegularSlide'>
                    <PhotoSlider className="sliderMargin" group="othersBrandSlider3" />
                </div>

                <hr />

            </div>

            <div className='aboutText'>
                <h2>{t('profHeader')}</h2>
            </div>

            <Slider items={sliderData4} />

            <div className='othersContent'>

                <div>
                    <p>{t('profP')}</p>
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
