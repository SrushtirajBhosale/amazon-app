import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import Orders from './Orders';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { onAuthStateChanged } from 'firebase/auth';

const promise = loadStripe(
  'pk_test_51N0UP3SJqZrNQtAd5bei4OqrTQCZkmzUgjy2v76Lbn9dB1ZPSQoQB4oyiSlJZbxHeUcfY9TLJHZc8VEcQxLHlM8u009E9OplMj'
);

function App() {
  const [ dispatch ] = useStateValue();


  useEffect(() => {
    // will only run once when the app component loads...

    onAuthStateChanged(auth, authUser => {
      // console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
          <Routes>
            <Route path='/orders' 
              element={ 
                <>
                  <Header />
                  <Orders />
                </> 
              } 
            />
            <Route path='/login' 
              element={ 
                <>
                  <Login />
                </> 
              } 
            />
            <Route path='/checkout' 
              element={ 
                <>
                  <Header />
                  <Checkout />
                </> 
              } 
            />
            <Route path='/payment' 
              element={ 
                <>
                  <Header />
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                </> 
              } 
            />
            <Route path='/' 
              element={ 
                <>
                  <Header />
                  <Home />
                </> 
              } 
            />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
