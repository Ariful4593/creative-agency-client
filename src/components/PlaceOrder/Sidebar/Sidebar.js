import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faThList, faComment, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { UserContext } from '../../../App'
import { useEffect } from 'react';

const Sidebar = ({ handleSidebar, currentCategory }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://frozen-retreat-55750.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [loggedInUser.email])

    return (
        <ul className="list-group">
            {
                !isAdmin && <div>
                    <li className={`list-group-item ${currentCategory === 'order' ? 'text-danger' : ''}`} onClick={() => handleSidebar('order')} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faShoppingCart} /> Order</li>

                    <li className={`list-group-item ${currentCategory === 'service' ? 'text-danger' : ''}`} onClick={() => handleSidebar('service')} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faThList} /> Service list</li>

                    <li className={`list-group-item ${currentCategory === 'review' ? 'text-danger' : ''}`} onClick={() => handleSidebar('review')} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faComment} /> Reveiw</li>
                </div>
            }


            {
                isAdmin && <div>
                    <li className={`list-group-item ${currentCategory === 'service' ? 'text-danger' : ''}`} onClick={() => handleSidebar('service')} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faThList} /> Service list</li>

                    <li className={`list-group-item ${currentCategory === 'addService' ? 'text-danger' : ''}`} onClick={() => handleSidebar('addService')} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faPlus} /> add Service</li>

                    <li className={`list-group-item ${currentCategory === 'makeAdmin' ? 'text-danger' : ''}`} onClick={() => handleSidebar('makeAdmin')} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faUserPlus} /> Make Admin</li>
                </div>
            }
        </ul>
    );
};

export default Sidebar;