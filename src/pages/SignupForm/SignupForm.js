import React, { useState, useEffect } from "react";
import { Input, Button } from "@material-ui/core";
import "../SigninForm/Form.css";

const SignupForm = (props) => {
  const { signUp, setInfo } = props.route;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const INITIAL_FILTER_OBJECT = {
    username: "",
    email: "",
    password: "",
  };

  const [signUpForm, setsignUpForm] = useState(INITIAL_FILTER_OBJECT);

  useEffect(() => {
    setsignUpForm({
      username,
      email,
      password,
    });
  }, [username, email, password]);

  useEffect(() => {
    setInfo(signUpForm);
  }, [signUpForm]);

  return (
    <div className='form'>
      <div className='form__logo'>
        <img
          // src='https://en.facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100'
          src={require("../../asset/Pepsigram.png")}
        />
      </div>
      <form className='form__content'>
        <Input
          placeholder='username'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='form__input'
        />
        <Input
          placeholder='email'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='form__input'
        />
        <Input
          placeholder='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='form__input'
        />
        <Button onClick={signUp} type='submit' className='form__button'>
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
