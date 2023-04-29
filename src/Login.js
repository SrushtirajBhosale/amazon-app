import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // console.log(auth?.currentUser?.email);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (auth) {
        navigate('/');
      }
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  }
  
  const register = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (auth) {
        navigate('/');
      }
    } catch (err) {
      alert(err.message);
      console.error(err);
    }

  }


  return (
    <div className='login'>
        <Link to='/'>
          <img className='login__logo' src="/images/login-thumbnail.png" alt="" />
        </Link>

        <div className="login__container">
            <h1>Sign in</h1>

            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn}
                className='login__signInButton'>Sign In</button>
            </form>

            <p>
              By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>
            
            <button onClick={register} className='login__registerButton'>
                Create your Amazon Account
            </button>
    
        </div>
    </div>
  )
}

export default Login