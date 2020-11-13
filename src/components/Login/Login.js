import React from 'react';
import logo from '../../images/logos/logo.png';
import googleIcon from '../../images/logos/google-logo.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCn5I-A7nbP1Ib3qv9XWIdZcO_dKiEZAgk",
        authDomain: "creative-agencys.firebaseapp.com",
        databaseURL: "https://creative-agencys.firebaseio.com",
        projectId: "creative-agencys",
        storageBucket: "creative-agencys.appspot.com",
        messagingSenderId: "1010514722265",
        appId: "1:1010514722265:web:3848dc0d6316f9b23cadc8",
        measurementId: "G-F762SHV9P5"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                const newLoggedInUser = { ...loggedInUser };
                const { displayName, email, photoURL } = result.user;
                newLoggedInUser.name = displayName;
                newLoggedInUser.email = email;
                newLoggedInUser.photo = photoURL;
                sessionStorage.setItem('loginUser', JSON.stringify(newLoggedInUser))
                setLoggedInUser(newLoggedInUser)
                storeAuthToken();

            }).catch(function (error) {
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken)
                history.replace(from)
            }).catch(function (error) {
                // Handle error
            });
    }
    return (
        <div className="container text-center mt-4 w-100">
            <img style={{ width: '160px' }} src={logo} alt="" />
            <div className="row mt-2 p-sm-0" >
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  border text-center " style={{ boxShadow: '0px 0px 3px 0px', margin: '0 auto', height: '390px' }}>
                    <h2 style={{ marginTop: '125px' }}>Login</h2>
                    <div className="container" style={{ width: '100%', paddingRight: 0 }}>
                        <div className="row d-flex justify-content-center" style={{ borderRadius: '20px', border: '1px solid', cursor: 'pointer', width: '100%' }} onClick={handleGoogleSignIn} >
                            <div className="col d-none d-sm-block ">
                                <img style={{ width: '50px' }} src={googleIcon} alt="" />
                            </div>
                            <div className="col-9 d-flex align-items-center">
                                <h5 style={{ marginTop: '5px' }} >Continue with Google</h5>
                            </div>

                        </div>
                    </div>
                    <p>Don't have account? <mark style={{ cursor: 'pointer', background: 'none' }}>Create an Account</mark></p>

                </div>
            </div>
        </div>
    );
};

export default Login;