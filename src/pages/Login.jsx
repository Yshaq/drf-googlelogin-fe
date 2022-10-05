import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { useCallback } from 'react';

function Login() {

    const { REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_BASE_BACKEND_URL, REACT_APP_BASE_FRONTEND_URL } = process.env;


    const [payload, setpayload] = useState({
        "username":"",
        "password":""
    })

    const handleChange = (e) => {
        setpayload({...payload, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(payload)
        setpayload({
            "username":"",
            "password":""
        })
    }

    const openGoogleLoginPage = useCallback(() => {
        const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
        // const redirectUri = 'api/v1/auth/login/google/';
        const redirectUri = 'api/google/callback/';
      
        const scope = [
          'https://www.googleapis.com/auth/userinfo.email',
          'https://www.googleapis.com/auth/userinfo.profile'
        ].join(' ');
      
        const params = {
          response_type: 'code',
          client_id: REACT_APP_GOOGLE_CLIENT_ID,
          redirect_uri: `${REACT_APP_BASE_FRONTEND_URL}/${redirectUri}`,
          prompt: 'select_account',
          access_type: 'offline',
          scope
        };
      
        const urlParams = new URLSearchParams(params).toString();
      
        window.location = `${googleAuthUrl}?${urlParams}`;
      }, []);

    return (
        <div className="log-form">
            <h2>Login to your account</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username : </label>
                <input type="text" name='username'  required={true} value={payload.username} onChange={handleChange} placeholder="username"/>
                <br />
                <label htmlFor="password">Password : </label>
                <input type="password" name='password' value={payload.password} onChange={handleChange} placeholder="password"/>
                <br />
                <p>Don't have one? <Link to='/register'>Sign Up</Link></p>
                <input type="submit" value={"Login"} />
            </form>
            <br />

            <GoogleButton
                onClick={openGoogleLoginPage}
                label="Sign in with Google"
                disabled={!REACT_APP_GOOGLE_CLIENT_ID}
            />

        </div>
    )
}

export default Login