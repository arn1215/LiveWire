import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginPage';
import SignUpForm from './components/auth/RegisterPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Parent from './components/Parent/Parent'
import LandingPage from './components/LandingPage';
import ErrorPage from './components/ErrorPage';
import { authenticate } from './store/session';



function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const loaded = async () => {
      await dispatch(authenticate())
      setIsLoaded(true)
    }
    loaded()
}, [dispatch]);

  return isLoaded && (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true}>
          <LandingPage />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/register' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/@me/:serverId' exact={true} >
          <Parent />
        </ProtectedRoute>
        <ProtectedRoute path='/servers/:serverId' exact={true} >
          <Parent />
        </ProtectedRoute>
        <ProtectedRoute path='/servers/channels/:channelId' exact={true} >
          <Parent />
        </ProtectedRoute>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
