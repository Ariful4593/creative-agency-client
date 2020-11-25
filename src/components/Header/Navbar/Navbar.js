import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../.../../../../images/logos/logo.png'
import { UserContext } from '../../../App';
import './Navbar.css'
const Navbar = () => {
    const [login, setLogin] = useState(JSON.parse(sessionStorage.getItem('loginUser')));
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {
        setLogin(sessionStorage.setItem('loginUser', false))
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
                        login ?
                            <div className="p-0 nav-item btn ">
                                <div className="dropdown show">
                                    <a className=" btn-success dropdown-toggle" href="#" style={{ borderRadius: '7px' }} role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {loggedInUser.name || login.name}
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