import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../.../../../../images/logos/logo.png'
import './Navbar.css'
const Navbar = () => {
    const [googleUser, setGoogleUser] = useState(JSON.parse(sessionStorage.getItem('googleUser')));
    const [manualUser, setManualUser] = useState('')

    useEffect(() => {
        setManualUser(JSON.parse(localStorage.getItem('createNewUser')));
    }, [])
    const handleSignOut = () => {
        setGoogleUser(sessionStorage.setItem('googleUser', false));
        setManualUser(localStorage.setItem('createNewUser', false));
    }
    const linkItem = [
        { id: 1, type: '/', title: 'Home' },
        { id: 2, type: 'portfolio', title: 'Our Portfolio' },
        { id: 3, type: 'team', title: 'Our Team' },
        { id: 4, type: 'contact', title: 'Contact Us' },
    ]
    return (

        <nav className="navbar navbar-expand-lg navbar-light myNav sticky" id="navbarSticky" >
            <Link to="/"><img style={{ width: '100px' }} src={logo} alt="" /></Link>
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {
                        linkItem.map(items => {
                            return (
                                <li className="nav-item font-weight-bold" key={items.id} >
                                    <Link to={items.type}>
                                        {items.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                    {
                        googleUser || manualUser ?
                            <div className="p-0 nav-item btn ">
                                <div className="dropdown show">
                                    <a className="dropdown-toggle login-btn" href="https://creative-agencys.firebaseapp.com/" style={{ borderRadius: '7px' }} role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {googleUser ? googleUser.name : (manualUser ? manualUser[0].name : '')}
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <Link className="dropdown-item" to="dashboard">Dashboard</Link>
                                        <Link className="dropdown-item" to="/">Order</Link>
                                        <Link className="dropdown-item" to="contact">Support</Link>
                                        <Link className="dropdown-item" to="/" onClick={handleSignOut}>Sign out</Link>
                                    </div>
                                </div>
                            </div> : <div className="nav-item btn" style={{ backgroundColor: '#111430' }}>
                                <Link to="/login" className="text-white">
                                    Login
                            </Link>
                            </div>
                    }
                </ul>
            </div>
        </nav>

    );
};

export default Navbar;