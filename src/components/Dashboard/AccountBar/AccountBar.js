import React from 'react';

const AccountBar = ({currentCategory, handleAccountNav}) => {
    return (
        <div className="nav justify-content-center mt-5 mb-5 border-bottom">
            <h2 onClick={() => handleAccountNav('account')} className={`menu-toggle mr-4 ${currentCategory === 'account' ? 'text-danger' : ''}`} style={{ cursor: 'pointer' }}>Account</h2>

            <h2 onClick={() => handleAccountNav('application')} className={`menu-toggle mr-4 ${currentCategory === 'application' ? 'text-danger' : ''}`} style={{ cursor: 'pointer' }}>Application</h2>

            <h2 onClick={() => handleAccountNav('billing')} className={`menu-toggle mr-4 ${currentCategory === 'billing' ? 'text-danger' : ''}`} style={{ cursor: 'pointer' }}>Billing</h2>
        </div>
    );
};

export default AccountBar;