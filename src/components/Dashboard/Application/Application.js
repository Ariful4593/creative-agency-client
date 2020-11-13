import React from 'react';

const Application = () => {
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
        <div className="row">
            {
                orderData.map(userData => {
                    return (
                        <div className="card col-12 col-sm-6 col-md-12 col-lg-6 col-xl-4 border-0 mt-4" key={userData._id}>
                            <div className="card-body border">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img className="card-img-top w-100" src={`data:image/png;base64,${userData.image.img}`} alt="Card cap" />
                                    </div>
                                    <div className="col-md-6 text-right button">

                                        <div className="btn btn-danger">
                                            {userData.status}
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-title">{userData.service}</h5>
                                <p className="card-text text-justify">{userData.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Application;