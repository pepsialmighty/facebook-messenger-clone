import React from "react";
import { Card, CardImg, CardTitle, CardBody } from "reactstrap";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import SigninForm from "../SigninForm/SigninForm";
import SignupForm from "../SignupForm/SignupForm";
import "./Auth.css";

const Auth = () => {
  return (
    <div className='auth'>
      <Row className='auth__title'>
        <Col>
          <div className='auth__logo'>
            <img
              // src='https://en.facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100'
              src={require("../../asset/Pepsigram.png")}
            />
          </div>
          <h1 style={{ fontWeight: "bold", color: "black" }}>
            Please Sign In!
          </h1>
        </Col>
      </Row>

      <div className='auth__card'>
        <Link to='/signin'>
          <h3 style={{ color: "black" }}>Already have an account?</h3>
          <Card className='auth__cardItem'>
            <CardImg
              top
              src={require("../../asset/user.png")}
              alt='Card image cap'
              style={{ overflow: "hidden" }}
            />
            <CardBody className='auth__cardBody'>
              <CardTitle className='auth__cardBtn'>Sign In</CardTitle>
            </CardBody>
          </Card>
        </Link>

        <Link to='/signup'>
          <h3 style={{ color: "black" }}>Not a member yet?</h3>
          <Card className='auth__cardItem'>
            <CardImg
              top
              src={require("../../asset/user.png")}
              alt='Card image cap'
            />
            <CardBody className='auth__cardBody'>
              <CardTitle className='auth__cardBtn'>Sign Up</CardTitle>
            </CardBody>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Auth;
