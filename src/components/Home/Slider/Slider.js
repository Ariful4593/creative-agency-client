import React from 'react';
import Carousel from "react-elastic-carousel";
import Item from './Item';
import nitAdminPanel from '../../../images/nit-admin-panel.PNG';
import bootShoes from '../../../images/boot-shoes.PNG';
import redonion from '../../../images/redonion.PNG';
import travelguru from '../../../images/travelguru.PNG';
import volunteer from '../../../images/volunteer.PNG';
import proariful from '../../../images/proariful.PNG';
import buddy from '../../../images/Social Buddy.PNG';
import doctorportal from '../../../images/doctor.PNG';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];
const itemData = [
    { id: 1, img: nitAdminPanel, webLink: 'https://nit-adminpanel.firebaseapp.com/', },
    { id: 2, img: bootShoes, webLink: 'https://boot-shoes.firebaseapp.com/', },
    { id: 3, img: redonion, webLink: 'http://red-onion-foodss.firebaseapp.com/', },
    { id: 4, img: doctorportal, webLink: 'https://doctor-portalss.firebaseapp.com/', },
    { id: 5, img: travelguru, webLink: 'https://travel-guru-web.firebaseapp.com/', },
    { id: 6, img: volunteer, webLink: 'https://volunteer-networkss.firebaseapp.com/', },
    { id: 7, img: proariful, webLink: 'https://pro-ariful.firebaseapp.com/', },
    { id: 8, img: buddy, webLink: 'https://social-buddy-app-react.netlify.app/', },
]
const Slider = () => {
    return (
        <div>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    {
                        itemData.map(item => <Item key={item.id}>
                            <a href={item.webLink} rel="noreferrer">
                                <img className="w-100" src={item.img} alt="" />
                            </a>

                        </Item>)
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;