import React, { useState } from 'react';
import { useEffect } from 'react';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import './ServiceList.css';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));
const ServiceList = () => {
    const loginUser = JSON.parse(sessionStorage.getItem('googleUser'))
    const [isAdmin, setIsAdmin] = useState(false);
    const classes = useStyles();
    useEffect(() => {
        fetch('https://frozen-retreat-55750.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loginUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [loginUser.email])
    
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
        <section>
            {
                isAdmin ? <AdminServiceList ></AdminServiceList> :
                    <div className="row">
                        {
                            orderData === null ?
                                <div className={classes.root}>
                                    <LinearProgress color="secondary" />
                                    <h1>Please Wait...</h1>
                                </div> :
                                orderData.map(userData => {
                                    return (
                                        <div className="card col-12 col-sm-6 col-md-12 col-lg-6 col-xl-4 border-0 p-4" key={userData._id}>
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
            }


        </section>
    );
};

export default ServiceList;