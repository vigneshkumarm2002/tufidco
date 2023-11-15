import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./signin.css";
import Home from "./Home";
import googleIcon from './../assets/google-icon.svg';
import appleIcon from './../assets/apple-icon.svg';
import { auth, provider } from "./config";
import { signInWithPopup } from 'firebase/auth';
import VendorMaster from './VendorMaster';

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [value, setValue] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(true);

    // Redirect to home page after successful login
    navigate('/');
  };

  return (
    <>
      {value ? <Home setValue={setValue} /> :
        <div className='container'>
          <div className='blackContainer'>
            <h1>TAMILNADU URBAN FINANCE AND INFRASTRUCTURE DEVELOPMENT CORPORATION LIMITED</h1>
          </div>
          <div className='authContainer'>
            <div className="formContainer">
              <div className='formHead'>
                <h3>Log In</h3>
              </div>
              <form className="form" onSubmit={handleSubmit}>
                <div className='labelledInput'>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='labelledInput'>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <p style={{ color: "#346BD4" }}>Forgot password?</p>
                <button id='submitBtn' type="submit">Log In</button>
              </form>
              <h6 className='register'>Don’t have an account? <span style={{ color: "#346BD4" }}>Register here</span></h6>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default SignIn;
