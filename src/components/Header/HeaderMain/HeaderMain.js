import React from 'react';
import headerImg from '../../../images/logos/Frame.png';
import './HeaderMain.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <section className="hire-us">

            <Navbar></Navbar>
            <div className="row w-100">
                <div className="p-4 pl-sm-5 pl-md-5 col-12 col-sm-6 col-md-5 pt-lg-5 header-content" style={{ padding: '50px' }}>
                    <div className="">
                        <h1 className="main-header">Let's Grow Your <br /> Brand To The <br /> Next Level</h1>
                        <p style={{ fontWeight: 600 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod sint, quas iure eos voluptatibus neque!</p>
                        <Link to="orderArea">
                            <button className="btn text-white" style={{ backgroundColor: '#111430' }}>
                                Hire us
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="col-sm-6 col-md-7">
                    <img style={{ width: '100%', marginBottom: '100px' }} src={headerImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;