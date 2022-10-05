import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Register() {
    const [payload, setpayload] = useState({
        "username":"",
        "name":"",
        "email":"",
        "password":"",
        "confirmPassword":""
    })

    const handleChange = (e) => {
        setpayload({...payload, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (payload.password === payload.confirmPassword){
            console.log(payload)
            setpayload({
                "username":"",
                "name":"",
                "email":"",
                "password":"",
                "confirmPassword":""
            })
        } else{
            alert('password and confirm password should be same')
        }
    }
    return (
        <div className="register-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name : </label>
                <input type="text" name='name' value={payload.name} onChange={handleChange} placeholder="name" required={true}/>
                <br />
                <label htmlFor="mail">Email-ID : </label>
                <input type="email" name='email' value={payload.email} onChange={handleChange} placeholder="Email" required={true}/>
                <br />
                <label htmlFor="username">Username : </label>
                <input type="text" name='username' value={payload.username} onChange={handleChange} placeholder="username" required={true}/>
                <br />
                <label htmlFor="password">Password : </label>
                <input type="password" name='password' value={payload.password} onChange={handleChange} placeholder="password" required={true}/>
                <br />
                <label htmlFor="confirmPassword">Confirm Password : </label>
                <input type="confirmPassword" name='confirmPassword' value={payload.confirmPassword} onChange={handleChange} placeholder="confirm password" required={true}/>
                <br />
                <input type="submit" value={"SignUp"} />
                <p>Already had an account?<Link to='/'>Log in</Link></p>
            </form>
        </div>
    )
}

export default Register