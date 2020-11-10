import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AdminServiceDetails from './AdminServiceDetails';
import './AdminServiceList.css';
const AdminServiceList = () => {
    const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
        fetch('https://frozen-retreat-55750.herokuapp.com/getOrder')
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, []);

    return (
        <div className="container">
            <div className="row service-header">
                <div className="col-md-2">Name</div>
                <div className="col-md-3">Email ID</div>
                <div className="col-md-2">Service</div>
                <div className="col-md-3">Project Details</div>
                <div className="col-md-2">Status</div>
            </div>

            {
                userInfo.map(service => {
                    return (
                        <AdminServiceDetails key={service._id} service={service}></AdminServiceDetails>
                    )
                })
            }
        </div>
    );
};

export default AdminServiceList;