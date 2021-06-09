import React, { useEffect } from 'react';
import logo from '../../images/logos/logo.png';
import googleIcon from '../../images/logos/google-logo.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import facebookIcon from '../../images/icons/facebook-social-media-icon.png';
import './Login.css';
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
    const [newUser, setNewUser] = useState(false);
    const [manualUser, setManualUser] = useState([])
    const [user, setUser] = useState({
        isSignedIn: false,
        first: '',
        last: '',
        email: '',
        password: '',
        error: '',
        success: false,
        photo: '',
    })

    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: '/' }, }


    const fbLogIn = () => {

    }
    useEffect(() => {
        fetch('https://frozen-retreat-55750.herokuapp.com/userLoginData')
            .then(res => res.json())
            .then(data => setManualUser(data))
    }, [])

    const handleBlur = (e) => {
        let isFieldValid
        if (e.target.name === 'first') {
            isFieldValid = e.target.value
        }
        if (e.target.name === 'last') {
            isFieldValid = e.target.value
        }
        if (e.target.name === 'email') {
            isFieldValid = e.target.value
        }
        if (e.target.name === 'password') {
            isFieldValid = e.target.value
        }
        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value
            setUser(newUserInfo)
        }
    }

    const handleSubmit = (e) => {
        if (newUser && user.first && user.last && user.email && user.password) {
            const newLoginUserManual = { ...user };
            newLoginUserManual.success = true;
            newLoginUserManual.error = '';
            setUser(newLoginUserManual)
            fetch('https://frozen-retreat-55750.herokuapp.com/userLogin', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(newLoginUserManual)
            })
        }
        const actualUser = manualUser.filter(actualPerson => actualPerson.email === user.email && actualPerson.password === user.password);
        if (!newUser && actualUser[0].email && actualUser[0].password) {
            if (actualUser) {
                localStorage.setItem('createNewUser', JSON.stringify(actualUser))
                history.replace(from);
            }
        }
        else if(!actualUser){
            alert("Sorry! Your email or password doesn't match our Database")
        }

        e.preventDefault()
        e.target.reset();

    }
    const googleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var loginUser = result.user;
                const newUser = { ...user };
                newUser.name = loginUser.displayName;
                newUser.email = loginUser.email
                newUser.photo = loginUser.photoURL;
                setUser(newUser);
                sessionStorage.setItem('googleUser', JSON.stringify(newUser))
                history.replace(from)

            }).catch(function (error) {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div className="container text-center mt-4 w-100">
            <img style={{ width: '160px' }} src={logo} alt="" />
            <div className="mb-5 mt-2  d-flex justify-content-center">
                <div className='col-md-8 col-lg-6 col-xl-5'>
                    <form id="form" onSubmit={handleSubmit}>
                        <div className='form-field w-100 p-4 m-0'>
                            <h4 className='text-center mb-5 ml-3'>
                                {newUser ? 'Created an account' : 'Login'}
                            </h4>

                            {newUser && (
                                <input
                                    className='mb-2 w-100'
                                    onBlur={handleBlur}
                                    type='text'
                                    name='first'
                                    placeholder='First Name'
                                    required
                                />
                            )}


                            {newUser && (
                                <input
                                    className='mb-2 w-100'
                                    onBlur={handleBlur}
                                    type='text'
                                    name='last'
                                    placeholder='Last Name'
                                    required
                                />
                            )}

                            <input
                                className='mb-2 w-100'
                                onBlur={handleBlur}
                                type='email'
                                name='email'
                                placeholder='Username or Email'
                                required
                            />

                            <input
                                className='mb-2 w-100'
                                onBlur={handleBlur}
                                type='password'
                                name='password'
                                placeholder='Password'
                                required
                            />

                            <p className='text-left mb-2 px-3'>
                                <input type='checkbox' name='checkbox' />
                                <span className='ml-3'>Remember Me</span>
                                <span className='float-right'>
                                    <Link to="/">Forgot Password ?</Link>
                                </span>
                            </p>
                            <input
                                className='mt-3 w-100'
                                type='submit'
                                value={newUser ? 'Create an account' : 'Login'}
                            />
                            <>
                                {!newUser && (
                                    <div className='login-qstn'>
                                        <span>Don't have an account?</span>
                                        <span className='pl-1'>
                                            <span style={{ cursor: 'pointer', color: 'orange', fontSize: '16px' }} onClick={() => setNewUser(!newUser)}>
                                                Create an account
                                            </span>
                                        </span>
                                    </div>
                                )}
                            </>
                            <>
                                {newUser && (
                                    <div>
                                        <span>Already have an account?</span>
                                        <span className='pl-1'>
                                            <span style={{ color: 'orange', cursor: 'pointer', fontSize: '20px' }} onClick={() => setNewUser(!newUser)}>
                                                Login
                                            </span>
                                        </span>
                                    </div>
                                )}
                            </>
                        </div>
                    </form>
                    <div className="mt-4 d-none d-sm-block">
                        <p className='divider'></p>Or<p className='divider'></p>
                    </div>
                    <div className='mb-2 mt-3 sign-btn col-12 col-sm-9' onClick={googleSignIn}>
                        <img
                            className='media-icon'
                            src={googleIcon}

                            alt='google icon'
                        />
                    Continue with Google
                    </div>
                    <div className='sign-btn col-12 col-sm-9' onClick={fbLogIn}>
                        <img className='media-icon' src={facebookIcon} alt='facebook icon' />
                    Continue with Facebook
                    </div>
                    <p style={{ color: 'red' }}>{user.error}</p>
                    {user.success && (
                        <p style={{ color: 'green' }}>
                            you have successfully{' '}
                            {newUser ? 'created a new account' : 'logged in'}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;