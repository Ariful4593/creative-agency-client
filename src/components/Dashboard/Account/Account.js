import React from 'react';
import { useState } from 'react';
import Navbar from '../../Header/Navbar/Navbar';
import AccountBar from '../AccountBar/AccountBar';
import AccountData from '../../../AccountData/AccountData';
import { useEffect } from 'react';
import AccountSettings from '../AccountSettings/AccountSettings';
const Account = () => {

    const [currentBar, setCurrentBar] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');
    useEffect(() => {
        setCurrentCategory('account');
    }, []);
    const handleAccountNav = (subBar) => {
        setCurrentCategory(subBar)
    }

    useEffect(() => {
        if (currentCategory !== '') {
            const category = AccountData.filter(data => data.type === currentCategory);
            setCurrentBar(category)
        }
    }, [currentCategory]);
    return (
        <div className="containter">
            <Navbar></Navbar>
            <AccountBar handleAccountNav={handleAccountNav} currentCategory={currentCategory}></AccountBar>
            <AccountSettings currentBar={currentBar} currentCategory={currentCategory}></AccountSettings>
        </div>
    );
};

export default Account;