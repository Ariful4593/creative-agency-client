import React from 'react';

const LeftSide = ({ orderData }) => {
    return (
        <div className="row w-100">
            {
                orderData.map(item => {
                    return (
                        <div className="card col-12 col-sm-6 col-md-6 col-lg-8 col-xl-4 border-0 mt-4" key={item._id}>
                            <div className="card-body border">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img className="card-img-top w-100" src={`data:image/png;base64,${item.image.img}`} alt="Card cap" />
                                    </div>
                                    <div className="col-md-6 text-right button">

                                        <div className="btn btn-danger">
                                            {item.status}
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-title">{item.service}</h5>
                                <p className="card-text text-justify">{item.description}</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default LeftSide;