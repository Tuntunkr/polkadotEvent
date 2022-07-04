import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../SignIn/SignIn.css";
import Sign from "../../assets/Images/Signin.svg";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <section className="heroSec">
        <Container>
          <Row>
            <Col md={6}>
              <div className=" about">
                <h5 className="sign">Sign in Into Account</h5>
                <Link to="/signup" className="btn1">
                  SignUp
                </Link>
                <div>
                  <input
                    type="text"
                    className="eyesign"
                    placeholder="Enter your email"
                  />
                  <br></br>
                  <br></br>
                  <input
                    type="text"
                    className="eyep"
                    placeholder="Enter your password"
                  />
                </div>
                <br></br>

                <div>
                  <button className="btn2">Sign in Into Account</button>
                </div>
                <br></br>
                <spa>________________ OR ________________</spa>
                <br></br>
                <br></br>
                <div>
                  <input
                    className="goo"
                    type="text"
                    placeholder="Sign in with Google"
                  />
                  <br></br>
                  <br></br>
                  <input
                    className="inpu2"
                    type="text"
                    placeholder="Sign Up with Polkadot"
                  />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <Col md={6}>
                  <img className="bg1" src={Sign} alt="" />
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SignIn;
