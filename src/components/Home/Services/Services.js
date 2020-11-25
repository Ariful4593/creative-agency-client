import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import './Services.css';
import Fade from 'react-reveal/Fade';

const supporter = [
    { id: 1, img: slack, },
    { id: 2, img: google, },
    { id: 3, img: uber, },
    { id: 4, img: netflix, },
    { id: 5, img: airbnb, },
]
const Services = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect(() => {
        fetch('https://frozen-retreat-55750.herokuapp.com/getServiceData')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, []);
    return (
        <section className="container ">
            <div className="row d-flex justify-content-center ">
                <Fade bottom>
                    {
                        supporter.map(items => {
                            return (
                                <div className=" col-md-2 col-12 d-flex justify-content-center" key={items.id}><img style={{ width: '100px' }} src={items.img} alt="" /></div>
                            )
                        })
                    }
                </Fade>

            </div>
            <Fade left>
                <h1 className="text-center mb-4 mt-5 service">Provide awesome <mark style={{ color: '#7AB259', background: 'none' }}>services</mark></h1>
            </Fade>

            <div className=" row service-data">
                {
                    serviceData.map(service => {
                        return (
                            <div className="card card-content border-0 col-12 col-sm-6 col-md-4 col-xl-4 " key={service._id}>
                                <Fade bottom>
                                    <div className="card-body text-center">
                                        <Link to={`orderArea/${service._id}`}>
                                            <img className="card-img-top" style={{ width: '100px' }} src={`data:image/png;base64,${service.image.img}`} alt="Card cap" />
                                            <h5 className="card-title font-weight-bold mt-4 text-secondary">{service.title}</h5>
                                            <p className="card-text text-secondary">{service.description}</p>
                                        </Link>
                                    </div>
                                </Fade>

                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Services;