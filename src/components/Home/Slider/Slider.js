import React from 'react';
import Carousel from "react-elastic-carousel";
import Item from './Item';
import redonion from '../../../images/redonion.PNG';
import travelguru from '../../../images/travelguru.PNG';
import volunteer from '../../../images/volunteer.PNG';
import proariful from '../../../images/proariful.PNG';
import buddy from '../../../images/Social Buddy.PNG';
import creative from '../../../images/creative.PNG';
import carouselSeven from '../../../images/carousel_7.png';
import carouselEight from '../../../images/carousel_8.png';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];
const Slider = () => {
    return (
        <div>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    <Item>
                        <img className="w-100" src={redonion} alt="" />
                    </Item>
                    <Item>
                        <img className="w-100" src={travelguru} alt="" />
                    </Item>
                    <Item>
                        <img className="w-100" src={volunteer} alt="" />
                    </Item>
                    <Item>
                    <img className="w-100" src={proariful} alt="" />
                    </Item>
                    <Item>
                    <img className="w-100" src={buddy} alt="" />
                    </Item>
                    <Item>
                    <img className="w-100" src={creative} alt="" />
                    </Item>
                    <Item>
                    <img className="w-100" src={carouselSeven} alt="" />
                    </Item>
                    <Item>
                    <img className="w-100" src={carouselEight} alt="" />
                    </Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;