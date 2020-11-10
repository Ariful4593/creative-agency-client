import React from 'react';
import Header from '../../Header/Header/Header';
import ClientFeedBack from '../ClientFeedBack/ClientFeedBack';
import RecentWork from '../RecentWork/RecentWork';
import Services from '../Services/Services'
import UserForm from '../UserForm/UserForm';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <RecentWork></RecentWork>
            <ClientFeedBack></ClientFeedBack>
            <UserForm></UserForm>
        </div>
    );
};

export default Home;