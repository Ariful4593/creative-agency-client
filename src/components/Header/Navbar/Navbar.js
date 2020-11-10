import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../.../../../../images/logos/logo.png'
import { UserContext } from '../../../App';
import './Navbar.css'
const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (

        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/"><img style={{ width: '100px' }} src={logo} alt="" /></Link>
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item font-weight-bold">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item font-weight-bold">
                        <Link to="portfolio">
                            Our Portfolio
                        </Link>
                    </li>
                    <li className="nav-item font-weight-bold">
                        <Link to="team">
                            Our Team
                        </Link>
                    </li>
                    <li className="nav-item font-weight-bold">
                        <Link to="contact">
                            Contact Us
                        </Link>
                    </li>
                    {
                        loggedInUser.email ? <div className="nav-item btn text-white" style={{ backgroundColor: '#111430' }}>

                            <Link to="/" className="text-white">
                                {loggedInUser.name}
                            </Link>
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