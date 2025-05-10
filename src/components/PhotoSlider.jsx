
import React, { useEffect, useState } from 'react';
import { importAll } from '../utils/importImages';

const PhotoSlider = ({ group }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const loadImages = async () => {
            const imgs = await importAll(group);
            setImages(imgs);
        };
        loadImages();
    }, [group]);

    return (
        <div className='sliderContainer'>
            {images.map((src, index) => (
                <img key={index} src={src} alt={`image-${index}`} className="rounded-xl shadow" />
            ))}
        </div>
    );
};

export default PhotoSlider;