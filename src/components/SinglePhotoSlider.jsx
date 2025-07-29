import React, { useEffect, useState } from 'react';
import { importAll } from '../utils/importImages';
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";

const SinglePhotoSlider = ({ group }) => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const imgs = importAll(group);
        setImages(imgs);
    }, [group]);


    const goNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goPrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    if (!images.length) return <p>Loading...</p>;

    return (
        <div className="single-photo-slider">
            <img
                src={images[currentIndex]}
                alt={`image-${currentIndex}`}
                className="main-photo"
            />

            <div className="controls hoverButton">
                <button
                    onClick={goPrev}
                    disabled={currentIndex === 0}
                    className={currentIndex === 0 ? 'disabled' : ''}
                >
                    <RiArrowLeftFill />
                </button>

                <button
                    onClick={goNext}
                    disabled={currentIndex === images.length - 1}
                    className={currentIndex === images.length - 1 ? 'disabled' : ''}
                >
                    <RiArrowRightFill />
                </button>
            </div>
        </div>
    );
};

export default SinglePhotoSlider;
