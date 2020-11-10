import React, { useEffect } from 'react';
import { useState } from 'react';
import './ClientFeedBack.css'
const ClientFeedBack = () => {
    const [feedbackData, setFeedbackData] = useState([])
    useEffect(() => {
        fetch('https://frozen-retreat-55750.herokuapp.com/getReviewOrder')
            .then(res => res.json())
            .then(data => setFeedbackData(data))
    }, [])
    return (
        <section className="container" style={{ marginTop: '80px' }}>
            <h1 className="text-center feedback-header" style={{ color: '#171B4E' }}>Clients <mark style={{ color: '#7AB259', background: 'none' }}>Feedback</mark></h1>
            <div className="row feedback-content">
                {
                    feedbackData.map(fbData => {
                        return (
                            <div className="card col-12 col-sm-6 col-md-6 col-lg-4 border-0 mt-4" key={fbData._id}>
                                <div className="card-body border">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-m-4">
                                            <img style={{ width: '90px',borderRadius: '50px' }} src={fbData.photo} alt="" />
                                        </div>
                                        <div className="col-m-8 p-4">
                                            <h5 className="card-title mb-0">{fbData.name}</h5>
                                            <small className="font-weight-bold">CEO.Manpol</small>
                                        </div>
                                    </div>

                                    <p className="card-text">{fbData.textArea}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default ClientFeedBack;