import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';

export const Login = () => {

    const navigate = useNavigate();
    const [loginInput, setLoginInput] = useState({
        username: 'mor_2314', password: '83r5^_',
    });

    const handleChange = (e) => {
        if (e) {
            setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
        } else {
            setLoginInput({ ...loginInput, [e.target.name]: '' });
        }
    }

    const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    const loginaAuth = async () => {
        try {
            const loginRes = await axios.post('https://fakestoreapi.com/auth/login', loginInput);
            if (loginRes?.data?.token) {
                console.log(loginRes)
                navigate('/Home')
                sessionStorage.setItem('Token', loginRes?.data?.token)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // username: 'mor_2314', password: '83r5^_',

    return (
        <div className="app" data-theme={theme}>
            <div className="login">
                <h1> Login</h1>
                <div className="container">
                    <div className="top">
                        <i class="fab fa-google"></i>
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-linkedln"></i>
                        <i class="fab fa-twitter-square"></i>
                        <i class="fab fa-apple"></i>
                    </div>
                    <p className="divider">
                        <span>Or</span>
                    </p>
                    <form>
                        <label>E-mail</label>
                        <input type="email" name='username' onChange={handleChange} placeholder="Enter your email" />
                        <label>Password</label>
                        <input type="password" name='password' onChange={handleChange} placeholder="Enter your password" />
                        <div className="remember">
                            <input type="checkbox" checked="checked" />
                            <p>Remember Me</p>
                        </div>
                        <button onClick={loginaAuth}>Log In</button>
                    </form>
                    <div className="bottom">
                        <p>Forget your password?</p>
                        <a href="/">Reset Password</a>
                    </div>
                    <p className="create">Create Account</p>
                </div>
                <div className="theme-toggle">
                    <h2>Light Theme</h2>
                    <i onClick={switchTheme} class="fas fa-toggle-on"></i>{" "}
                </div>
            </div>
        </div>
    )
}
