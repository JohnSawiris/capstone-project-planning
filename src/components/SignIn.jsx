import React from 'react';

import TiUserOutline from 'react-icons/lib/ti/user-outline';
import FaUnlockAlt from 'react-icons/lib/fa/unlock-alt';

import signinBg from './../assets/images/signin.jpg';

const icons  = {
  color: 'rgba(0, 188, 212, 0.8)',
  display: 'inline-block',
  margin: '1rem',
  fontSize: '2.4rem'
}

function SignIn() {
  return(
    <div className="form-wrap">
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
