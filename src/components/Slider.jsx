import React from 'react';
import wand from '../assets/MagicWand.svg';

function Slider({ items = [] }) {
    return (
        <div className='slider-wrap'>
            <div className='slider'>
                {items.concat(items).map((item, index) => (
                    <React.Fragment key={index}>
                        <span aria-hidden={index >= items.length}>{item}</span>
                        <img
                            src={wand}
                            alt=""
                            aria-hidden={index >= items.length}
                        />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default Slider;
