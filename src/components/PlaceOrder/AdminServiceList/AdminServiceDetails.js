import React, { useState } from 'react';
import './AdminServiceDetails.css'
const AdminServiceDetails = ({ service }) => {
    const [pending, setPending] = useState(service.status.toLowerCase() === 'pending');
    const handleChange = (e) => {
        setPending(!pending)
        fetch('https://frozen-retreat-55750.herokuapp.com/update', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                status: e.target.value,
                id: service._id
            })
        })
            .then(res => res.json())
            .then(result => {
                console.log("Data updated")
            })
    }
    
    return (
        <div className="row service-body" key={service._id}>
            <div className="col-md-2">{service.name}</div>
            <div className="col-md-3">{service.email}</div>
            <div className="col-md-2">{service.service}</div>
            <div className="col-md-3">{service.description}</div>
            <div className="col-md-2"><select id="drop" onChange={handleChange} >
                <option value="Pending">Pending</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Done">Done</option>
                <option value="Cancel">Cancel</option>
            </select></div>
        </div>
    );
};

export default AdminServiceDetails;