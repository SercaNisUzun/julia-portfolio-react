import React, { useEffect, useState, useRef } from 'react';
import wand from '../assets/MagicWand.svg';

function Slider({ items = [] }) {
    const [repeatedItems, setRepeatedItems] = useState([]);
    const [startAnimation, setStartAnimation] = useState(false);
    const sliderRef = useRef(null);

    useEffect(() => {
        const screenWidth = window.innerWidth;
        const estimatedItemWidth = 150;
        const repeatCount = Math.ceil((screenWidth * 4) / (items.length * estimatedItemWidth));

        const fullList = Array(repeatCount).fill(items).flat();
        setRepeatedItems(fullList);

        const timeout = setTimeout(() => {
            setStartAnimation(true);
        }, 1500); // 1.5 saniye sonra animasyon başlasın

        return () => clearTimeout(timeout);
    }, [items]);

    return (
        <div className='slider-wrap'>
            <div
                className={`slider ${startAnimation ? 'animate' : ''}`}
                ref={sliderRef}
            >
                {repeatedItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <span>{item}</span>
                        <img src={wand} alt="" />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default Slider;
