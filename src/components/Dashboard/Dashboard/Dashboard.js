import React, { useEffect, useState } from 'react';
import Navbar from '../../Header/Navbar/Navbar';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));
const Dashboard = () => {
    const googleUser = JSON.parse(sessionStorage.getItem('googleUser'));
    const manualUser = JSON.parse(localStorage.getItem('createNewUser'));
    const [orderData, setOrderdata] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        fetch('https://frozen-retreat-55750.herokuapp.com/getOrderViaEmail', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: googleUser ? googleUser.email : manualUser[0].email })
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem('OrderData', JSON.stringify(data))
            })
    }, [googleUser, manualUser, manualUser.email])
    useEffect(() => {
        setOrderdata(JSON.parse(sessionStorage.getItem('OrderData')))
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="row w-100">
                    {
                        orderData === null ?
                            <div className={classes.root}>
                                <LinearProgress color="secondary" />
                                <h1>Please Wait...</h1>
                            </div>
                            : <div className="col-md-8">
                                <LeftSide></LeftSide>
                            </div>
                    }
                    <div className="col-md-4">
                        <RightSide></RightSide>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;