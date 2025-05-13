import React, { useEffect, useRef, useState } from 'react';
import { importAll } from '../utils/importImages';

const PhotoSlider = ({ group }) => {
    const [images, setImages] = useState([]);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const loadImages = async () => {
            const imgs = await importAll(group);
            setImages(imgs);
        };
        loadImages();
    }, [group]);

    const scrollGallery = (direction) => {
        const container = containerRef.current;
        const scrollAmount = 300;

        if (!container) return;

        if (direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        const container = containerRef.current;
        if (!container) return;

        const scrollLeft = container.scrollLeft;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        setAtStart(scrollLeft <= 10);
        setAtEnd(scrollLeft >= maxScrollLeft - 10);
    };

    return (
        <div className="photo-slider">
            <button
                onClick={() => scrollGallery('left')}
                disabled={atStart}
                className={`scroll-btn left ${atStart ? 'disabled' : ''}`}
            >
                ←
            </button>

            <div
                className="sliderContainer"
                ref={containerRef}
                onScroll={handleScroll}
            >
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`image-${index}`}
                        className="image-item"
                    />
                ))}
            </div>

            <button
                onClick={() => scrollGallery('right')}
                disabled={atEnd}
                className={`scroll-btn right ${atEnd ? 'disabled' : ''}`}
            >
                →
            </button>
        </div>
    );
};

export default PhotoSlider;
