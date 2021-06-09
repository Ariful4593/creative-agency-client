import React from 'react';

const AccountSettings = ({ currentBar, currentCategory }) => {
    return (
        <>

            {
                currentCategory === 'account' &&
                currentBar.map(item => {
                    return (
                        <div className="container" key={item.id}>
                            <div className="row w-100" >
                                <div className="col-md-5">
                                    <h4>{item.profile}</h4>
                                    <p>{item.emailDescription}</p>
                                </div>
                                <div className="col-md-5">
                                    <h4>{item.emailAdress}</h4>
                                    <input type="text" className="form-control" placeholder="Email address" aria-label="Username" aria-describedby="basic-addon1" />
                                    <h4>Name: (Optional)</h4>
                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />

                                </div>
                                <hr />
                                <div className="col-md-5">
                                    <h4>Password</h4>
                                    <p>{item.passDescription}</p>
                                </div>
                                <div className="col-md-5">
                                    <h4>{item.password}</h4>
                                    <input type="text" className="form-control" placeholder="Current Password" aria-label="Username" aria-describedby="basic-addon1" />
                                    <br />
                                    <h4>New Password</h4>
                                    <input type="text" className="form-control" placeholder="Enter new password" aria-label="Username" aria-describedby="basic-addon1" />
                                    <br />
                                    <button type="submit" className="btn btn-danger">Update Password</button>
                                </div>

                            </div>
                        </div>


                    )
                })
            }
            {
                currentCategory === 'billing' && currentBar.map(item => {
                    return (
                        <div className="container" key={item.id}>
                            <div className="row w-100" >
                                <div className="col-md-4">
                                    <h4>{item.profile}</h4>
                                </div>
                                <div className="col-md-8">
                                    <div className="row border p-2">
                                        <div className="col-md-8 p-2">
                                            <p className="m-0">{item.description}</p>
                                        </div>
                                        <div className="col-md-4 text-right">
                                            <button type="submit" className="btn btn-danger">Add credit card</button>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h6>Current Usage</h6>
                                        </div>
                                        <div className="col-md-6">
                                            <h6>Not Available	</h6>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h6>Platforms Credit</h6>
                                        </div>
                                        <div className="col-md-6">
                                            <h6>$0.00</h6>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                <hr />
                            </div>
                        </div>
                    )
                })
            }
            <hr />
        </>
    );
};

export default AccountSettings;