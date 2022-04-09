import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginPage';
import SignUpForm from './components/auth/RegisterPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Parent from './components/Parent/Parent'
import LandingPage from './components/LandingPage';
import ErrorPage from './components/ErrorPage';
import { authenticate } from './store/session';
import * as serverActions from "./store/server";
import MessageComponent from './components/MessageComponent/MessageComponent'



function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate()).then(() => {
        if (user) {
          dispatch(serverActions.loadUsersServers(user.id))
        }
      })
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
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
