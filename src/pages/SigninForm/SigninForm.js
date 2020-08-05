import React, { useState, useEffect } from "react";
import { Input, Button } from "@material-ui/core";
import "./Form.css";

const SigninForm = (props) => {
  const { signIn, setInfo } = props.route;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const INITIAL_FILTER_OBJECT = {
    username: "",
    email: "",
    password: "",
  };

  const [signInForm, setsignInForm] = useState(INITIAL_FILTER_OBJECT);

  useEffect(() => {
    setsignInForm({
      username,
      email,
      password,
    });
  }, [username, email, password]);

  useEffect(() => {
    setInfo(signInForm);
  }, [signInForm]);

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
        <Button onClick={signIn} type='submit' className='form__button'>
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default SigninForm;
