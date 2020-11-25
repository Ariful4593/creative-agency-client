import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Navbar from '../../Header/Navbar/Navbar';
import UserForm from '../../Home/UserForm/UserForm';

const Contact = () => {
    const match = useRouteMatch();
    const test = match.path === '/contact';
    return (
        <div>
            <Navbar></Navbar>
            <UserForm test={test}></UserForm>
        </div>
    );
};

export default Contact;