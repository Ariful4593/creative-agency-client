import React from 'react';
import { Link } from 'react-router-dom';
import './RightSide.css'
const RightSide = () => {
    const loginProfile = JSON.parse(sessionStorage.getItem('googleUser'));
    return (
        <div className="card col-12 border-0">
            <div className="card-body text-center">
                <img style={{ width: '90px', borderRadius: '50px' }} src={loginProfile.photo} alt="" />
                <h3>{loginProfile.name}</h3>
                <p className="card-text" style={{ borderBottom: '1px solid seagreen' }}>{loginProfile.email}</p>
            </div>
            <ul className="list-group">
                <Link className="list-group-item" to="account">Account Settings</Link>
                <Link className="list-group-item" to="dashboard/notifications">Notifications</Link>
                <Link className="list-group-item" to="/">Sign Out</Link>
            </ul>
        </div>
    );
};

export default RightSide;