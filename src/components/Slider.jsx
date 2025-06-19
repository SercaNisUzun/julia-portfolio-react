import React, { useEffect, useState } from 'react';
import wand from '../assets/MagicWand.svg';

function Slider({ items = [] }) {
    const [repeatedItems, setRepeatedItems] = useState([]);

    useEffect(() => {
        const screenWidth = window.innerWidth;
        const estimatedItemWidth = 150; // ortalama item genişliği (metin + icon)
        const repeatCount = Math.ceil((screenWidth * 2) / (items.length * estimatedItemWidth));

        const fullList = Array(repeatCount).fill(items).flat();
        setRepeatedItems(fullList);
    }, [items]);

    return (
        <div className='slider-wrap'>
            <div className='slider'>
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