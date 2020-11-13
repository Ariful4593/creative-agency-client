import React, { useState } from 'react';
import {
    Route,
    Redirect,
} from "react-router-dom";

const PrivateRoute = ({children, ...rest}) => {
    const [login, setLogin] = useState(JSON.parse(sessionStorage.getItem('loginUser')));
    
    return (
        <Route
            {...rest}
            render={({ location }) =>
            (login) ? (
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