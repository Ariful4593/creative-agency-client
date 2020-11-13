import React from 'react';
import { useState } from 'react';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';
import logo from '../../../images/logos/logo.png'
import Sidebar from '../Sidebar/Sidebar';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import { Link } from 'react-router-dom';
import './OrderArea.css'
const OrderArea = () => {
    const loginUser = JSON.parse(sessionStorage.getItem('loginUser'))
    const [currentCategory, setCurrentCategory] = useState('')
    const handleSidebar = (sidebar) => {
        setCurrentCategory(sidebar)
    }
    return (
        <div className="" style={{ backgroundColor: '#FFFFFF',marginLeft: '20px', marginRight: '20px' }}>
            <div className="row p-2">
                <div className="col-md-2 col-12 text-center">
                    <Link to="/"><img className="w-75" src={logo} alt="" /></Link>
                </div>
                <div className="col-md-4 col-6">
                    {
                        currentCategory === 'order' && <h3 className="type">Order</h3> || currentCategory === 'service' && <h3 className="type">Service</h3>
                         ||
                        currentCategory === 'review' && <h3 className="type">Review</h3>
                         ||
                        currentCategory === 'addService' && <h3 className="type">Add Service</h3>
                         ||
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
                            currentCategory === 'order' && <PlaceOrder></PlaceOrder> || currentCategory === 'service' && <ServiceList></ServiceList> || currentCategory === 'review' && <Review></Review> || currentCategory === 'addService' && <AddService></AddService> || currentCategory === 'makeAdmin' && <MakeAdmin></MakeAdmin>
                        }
                    </div>
                </div>
            </div>
        </div>


    );
};

export default OrderArea;