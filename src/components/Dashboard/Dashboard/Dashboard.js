import React, { useEffect } from 'react';
import Navbar from '../../Header/Navbar/Navbar';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';

const Dashboard = () => {
    const loginUser = JSON.parse(sessionStorage.getItem('loginUser'));
    useEffect(() => {
        fetch('https://frozen-retreat-55750.herokuapp.com/getOrderViaEmail', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loginUser.email })
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem('OrderData', JSON.stringify(data))
            })
    }, [loginUser.email])
    const orderData = JSON.parse(sessionStorage.getItem('OrderData'))
    return (
        <div>
            <Navbar></Navbar>
            <div className="row w-100">
                <div className="col-md-8">
                    <LeftSide orderData={orderData}></LeftSide>
                </div>
                <div className="col-md-4">
                    <RightSide></RightSide>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;