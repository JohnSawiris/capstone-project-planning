import React from 'react';

import TiUserOutline from 'react-icons/lib/ti/user-outline';
import FaUnlockAlt from 'react-icons/lib/fa/unlock-alt';

import signinBg from './../assets/images/signin.jpg';

const icons  = {
  color: 'rgba(0, 188, 212, 0.8)',
  display: 'inline-block',
  margin: '1rem',
  fontSize: '2.6rem'
}

function SignIn() {
  return(
    <div className="form-wrap">
      <style jsx>{`
          .form-wrap {
            width: 100%;
            height: 100%;
            padding-top: 4rem;
            background-image: url(${signinBg});
            background-size: cover;
          }
          .form {
            width: 100%;
            flex-basis: 100%;
            max-width: 600px;
            padding: 1rem 2rem 1.5rem;
            background-color: rgba(255,255,255, 0.8);
            margin: 0 auto;
            color: #555;
          }
          h1 {
            letter-spacing: 2px;
            font-size: 2rem;
            font-family: 'Raleway', sans-serif;
          }
          .input-group {
            display: flex;
            width: 90%;
            margin: 2rem auto;
            flex-direction: column;
          }
          .input-group input {
            border: 2px solid transparent;
            background-color: transparent;
            outline: 0;
            width: 80%;
            padding: 0.7rem 0.4rem;
            margin-bottom: 1rem;
            color: #000;
            font-weight: 500;
            font-size: 1.4rem;
            transition: border-bottom 0.3s ease-in;
          }
          .input-group input:focus {
            border-bottom: 2px solid rgba(0, 188, 212, 0.8);
          }
          .signin {
            padding: 0.7rem 1.4rem;
            margin-top: 1rem;
            width: 30%;
            margin-left: 1rem;
            background-color: rgba(0, 188, 212, 1);
            border: 1px solid rgba(0, 188, 212, 1);
            color: #fff;
            font-size: 1rem;
            font-weight: 500;
            transition: all 0.4s ease-in-out;
            cursor: pointer;
          }
          .signin:hover {
            background-color: rgb(10, 167, 187);
            border-color: rgb(10, 167, 187);
          }
      `}</style>
    <form className="form">
      <h1>Sing In</h1>
        <div className="input-group">
          <div className="input-wrap">
            <TiUserOutline style={icons} />
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-wrap">
            <FaUnlockAlt style={icons} />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <button type="submit" className="signin">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
