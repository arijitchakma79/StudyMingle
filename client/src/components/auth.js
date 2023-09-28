import React, {useState} from "react";
import Cookies from "universal-cookie";
import axios from 'axios';
import {SignInForm} from './'

const Auth = () => {

    const {isSignUp, setIsSignUp} = useState(false);

    return (
        <div className="bg-blue-700">
            <p>{isSignUp ? 'Sign Up' : <SignInForm/>}</p>
        </div>
    )
}

export default Auth;