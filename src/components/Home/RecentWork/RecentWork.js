import React from 'react';
import './RecentWork.css';
import Slider from '../Slider/Slider';
import Fade from 'react-reveal/Fade';

const RecentWork = () => {
    return (
        <section className="h-25" style={{ background: '#111430', marginTop: '100px' }}>
            <br></br>
            <Fade left>
                <h1 className="text-center text-white mt-5 recent-header">Here are some of <mark style={{ color: '#7AB259', background: 'none' }}>our works</mark></h1>
            </Fade>
            <Fade bottom>
                <div className="row w-100" style={{ marginTop: '50px' }}>
                    <div className="col mb-4">
                        <Slider></Slider>
                    </div>
                </div>
            </Fade>

        </section>
    );
};

export default RecentWork;