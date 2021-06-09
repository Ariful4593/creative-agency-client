import React, { useState } from 'react';
import {
    Route,
    Redirect,
} from "react-router-dom";

const PrivateRoute = ({children, ...rest}) => {
    const [googleUser] = useState(JSON.parse(sessionStorage.getItem('googleUser')));
    const [manualLoginUser] = useState(JSON.parse(localStorage.getItem('createNewUser')));
    return (
        <Route
            {...rest}
            render={({ location }) =>
            (googleUser || manualLoginUser) ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;