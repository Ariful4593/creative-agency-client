import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Navbar from '../../Header/Navbar/Navbar';
import UserForm from '../../Home/UserForm/UserForm';

const Contact = () => {
    const match = useRouteMatch();
    const test = match.path === '/contact';
    const [height, setHeight] = useState(881);
    useEffect(() => {
        setHeight(window.innerHeight);
    }, [])
    
    return (
        <div style={{height: `${height}px`, background: '#FBD062'}}>
            <Navbar></Navbar>
            <UserForm test={test}></UserForm>
        </div>
    );
};

export default Contact;