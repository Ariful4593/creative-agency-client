import React, { useEffect } from 'react';
import { useState } from 'react';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';
import logo from '../../../images/logos/logo.png'
import Sidebar from '../Sidebar/Sidebar';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import { Link, useParams } from 'react-router-dom';
import './OrderArea.css'
const OrderArea = () => {
    const loginUser = JSON.parse(sessionStorage.getItem('googleUser'))
    const [currentCategory, setCurrentCategory] = useState('')
    const [currentMenu, setCurrentMenu] = useState([])
    
    const serviceId = new useParams();
    const [orderData, setOrderData] = useState([])
    useEffect(() => {
        fetch('https://frozen-retreat-55750.herokuapp.com/getServiceData')
            .then(res => res.json())
            .then(data => setOrderData(data))
    }, []);
    useEffect(() => {
        setCurrentCategory('service')
    }, [])
    const handleSidebar = (sidebar) => {
        setCurrentCategory(sidebar)
    }
    useEffect(() => {
        if(currentCategory !== ''){
            const current = orderData.filter(order => order._id === serviceId.id);
            setCurrentMenu(current);

        }
    }, [currentCategory])
    return (
        <div className="" style={{ backgroundColor: '#FFFFFF',marginLeft: '20px', marginRight: '20px' }}>
            <div className="row p-2">
                <div className="col-md-2 col-12 text-center">
                    <Link to="/"><img className="w-75" src={logo} alt="" /></Link>
                </div>
                <div className="col-md-4 col-6">
                    {
                        // eslint-disable-next-line no-mixed-operators
                        currentCategory === 'order' && <h3 className="type">Order</h3> || currentCategory === 'service' && <h3 className="type">Service</h3>
                         // eslint-disable-next-line no-mixed-operators
                         ||
                        // eslint-disable-next-line no-mixed-operators
                        currentCategory === 'review' && <h3 className="type">Review</h3>
                         // eslint-disable-next-line no-mixed-operators
                         ||
                        // eslint-disable-next-line no-mixed-operators
                        currentCategory === 'addService' && <h3 className="type">Add Service</h3>
                         // eslint-disable-next-line no-mixed-operators
                         ||
                        // eslint-disable-next-line no-mixed-operators
                        currentCategory === 'makeAdmin' && <h3 className="type">Make Admin</h3>
                    }
                </div>
                <div className="col-md-6 col-6 d-flex justify-content-end ">
                    <h3 className="type">{loginUser.name}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2">
                    <Sidebar handleSidebar={handleSidebar} currentCategory={currentCategory} ></Sidebar>
                </div>
                <div className="col-md-8 col-lg-9  col-xl-10" style={{ backgroundColor: '#F4F7FC' }}>
                    <div className={`${currentCategory === 'order' || currentCategory === 'review' ? 'col-md-12 col-lg-8 align' : 'w-100'} `}>
                        {
                            // eslint-disable-next-line no-mixed-operators
                            currentCategory === 'order' && <PlaceOrder currentMenu={currentMenu}></PlaceOrder> || currentCategory === 'service' && <ServiceList></ServiceList> || currentCategory === 'review' && <Review></Review> || currentCategory === 'addService' && <AddService></AddService> || currentCategory === 'makeAdmin' && <MakeAdmin></MakeAdmin>
                        }
                    </div>
                </div>
            </div>
        </div>


    );
};

export default OrderArea;