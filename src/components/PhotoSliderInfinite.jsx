import React, { useEffect, useState } from 'react';
import { importAll } from '../utils/importImages';

const PhotoSliderInfinite = ({ group }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const imgs = importAll(group);
        setImages(imgs);
    }, [group]);

    // Görselleri 2 defa tekrar ederek sonsuz kayma efekti
    const doubledImages = [...images, ...images];

    return (
        <div className="infinite-slider-wrapper">
            <div className="infinite-slider-track">
                {doubledImages.map((src, index) => (
                    <img key={index} src={src} alt={`slide-${index}`} />
                ))}
            </div>
        </div>
    );
};

export default PhotoSliderInfinite;
