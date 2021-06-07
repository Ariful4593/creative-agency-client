import React, { useState } from 'react';
import {
    Route,
    Redirect,
} from "react-router-dom";

const PrivateRoute = ({children, ...rest}) => {
    const [login] = useState(JSON.parse(sessionStorage.getItem('googleUser')));
    console.log(login)
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