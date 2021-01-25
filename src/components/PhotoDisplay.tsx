import React, { useState } from 'react';
import styles from '../styles/PhotoDisplay.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface Props {
    pictures? : Pictures[],
    imgSize?: number
}

interface Pictures {
    thumbSrc?: { [key: string]: string }
    src?: { [key: string]: string }
}

let screenWidth, slidesToShow = 4;

if (typeof window == 'object') {
    screenWidth = window.innerWidth;
}

screenWidth <= 860 ? slidesToShow = 3 : null;

const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    speed: 500,
    rows: 1
};

export default function PhotoDisplay({ pictures, imgSize }: Props): React.ReactElement {
    const [displayImg, setDisplayImg] = useState(pictures[0]?.src?.[imgSize]); //bigger img to display

    return(
        <div className={ styles.container }>
            <div className={ styles.display }>
                <img src={ displayImg } />
            </div>

            <Slider {...settings}>
                {
                    pictures?.map(picture => 
                        <div className={ styles.imageContainer } onClick={ ()=> setDisplayImg(picture?.src?.[imgSize]) }>
                            <img src={ picture?.thumbSrc?.[imgSize] }/>
                        </div>
                    )
                }
            </Slider>
        </div>
    )
}