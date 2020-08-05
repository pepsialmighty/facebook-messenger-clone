import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";
import Auth from "./pages/Auth/Auth";
import SigninForm from "./pages/SigninForm/SigninForm";
import SignupForm from "./pages/SignupForm/SignupForm";
import Page from "./page/Page";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const [signInForm, setSignInForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);

  console.log(signInForm);

  /*
!if there is user and user.displayName then print the user.displayName
!else print "Impossible"
*/

  console.log(user);
  user && user.displayName
    ? console.log(user.displayName)
    : console.log("Impossible");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        setUser(null);
        return;
      }

      setUser(authUser);
      if (!authUser.displayName) {
        return authUser.updateProfile({
          displayName: signInForm.username,
        });
      }
    });
    return () => {
      //perform some cleanup action
      unsubscribe();
    };
  }, [user, signInForm.username]);

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(signInForm.email, signInForm.password)
      .catch((error) => alert(error));
  };

  const signUp = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(signInForm.email, signInForm.password)
      .then((authUser) => {
        return authUser.user
          .updateProfile({
            displayName: signInForm.username,
          })
          .catch((error) => alert(error));
      });
  };

  const receiveInfo = (info) => {
    setSignInForm({
      ...info,
    });
  };

  const outerRoutes = [
    {
      path: "/",
      component: Auth,
      title: "Auth",
      exact: true,
    },
    {
      path: "/signin",
      component: SigninForm,
      title: "Messenger",
      exact: true,
      setInfo: receiveInfo,
      signIn: signIn,
    },
    {
      path: "/signup",
      component: SignupForm,
      title: "Messenger",
      exact: true,
      setInfo: receiveInfo,
      signUp: signUp,
    },
  ];

  return (
    <div className='App'>
      {user ? (
        <Router>
          <Redirect to='/dashboard' />
          <Route path='/dashboard'>
            {/*
              //This is my roundabout way
             {user.displayName ? (
              <Dashboard username={user.displayName} />
            ) : (
              <Dashboard username={signInForm.username} />
            )} */}

            {/* pass the props username so it will display "Welcome {username}" in DashBoard */}
            {user && user.displayName && (
              <Dashboard username={user.displayName} />
            )}
          </Route>
        </Router>
      ) : (
        <div>
          <Router>
            <Redirect to='/' />
            <Switch>
              {outerRoutes.map((route, i) => (
                <Route key={i} path={route.path} exact={route.exact}>
                  <Page route={route} />
                </Route>
              ))}
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
