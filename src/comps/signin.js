import React, { useEffect, useState } from 'react';
import "./signin.css";
import Home from "./Home"
import googleIcon from './../assets/google-icon.svg';
import appleIcon from './../assets/apple-icon.svg';
import {auth,provider} from "./config"
import { signInWithPopup } from 'firebase/auth';




const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [value,setvalue]=useState(" ")

const handleSignIn =()=>{
  signInWithPopup(auth,provider).then((data)=>{
setvalue(data.user.email)
localStorage.setItem("email",data.user.email)
  })
}
useEffect(()=>{
  setvalue(localStorage.getItem("email"))
},[])


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
  };

  return (
    <>
    {value?<Home/>:
    <div className='container'>
      <div className='blackContainer'>
        <h1>Board.</h1>
      </div>
      <div className='authContainer'>
        <div className="formContainer">
          <div className='formHead'>
            <p>Msg: Login using google account</p>
            <h3>Sign In</h3>
            <h5>Sign in to your account</h5>
          </div>
          <div className='signinWith'>
            <div className='signinOptions' onClick={handleSignIn}>
              <h6><img src={googleIcon} alt="Google Icon" />Sign in with Google</h6>
            </div>
            <div className='signinOptions'>
              <h6><img src={appleIcon} alt="Google Icon" />Sign in with Apple</h6>
            </div>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className='labelledInput'>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='labelledInput'>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <p style={{ color: "#346BD4" }}>Forgot password?</p>
            <button id='submitBtn' type="submit">Sign In</button>
          </form>
          <h6 className='register'>Don’t have an account? <span style={{color:"#346BD4"}}>Register here</span></h6>
        </div>
    
      </div>
      
    </div>
      }
    </>

  )
}


export default SignIn                         