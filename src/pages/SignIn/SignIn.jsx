import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../SignIn/SignIn.css";
import Sign from "../../assets/Images/Signin.svg";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { Box, TextField } from "@mui/material";
import {useForm} from "react-hook-form"

function SignIn() {
  const {register ,handleSubmit ,formState:{errors}} = useForm()
  const onSubmit = (data) =>{
    console.log(data)
  }
  const handleLogin = (result) => {
    alert(result);
  };
  const handleFailure = (googledata) => {
    console.log(googledata);
  };
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box mb={2}>
                  <TextField
                    sx={{ m: 2, display: "flex" }}
                    id="outlined-basic"

                    className="eyesign"
                    label="Enter your email"
                    variant="outlined"
                    autoComplete="email"
                    autoFocus
                    {...register("email", {required: "Required field"})}
                    error={!!errors?.email}
                    helperText={errors?.email ? errors.email.message : null} 
                    

                  />
                  <TextField
                    sx={{ m: 2, display: "flex" }}
                    id="outlined-basic"
                    className="eyep"
                    label="Enter your password"
                    variant="outlined"
                    {...register("password", {required: "Required field"})}
                    error={!!errors?.password}
                    helperText={errors?.password ? errors.password.message : null}
                  />
                  <button type="submit" className="btn2">Sign in Into Account</button>
                </Box>
              </form>


                <div className="firstn">
                  <GoogleLogin
                    clientId="1097543493087-5b7m4ab2cjupu0v9mq06bps5k3n5k2lh.apps.googleusercontent.com"
                    buttonText="Log in with Google"
                    OnSucess={handleLogin}
                    OnFailure={handleFailure}
                    cookiesPolicy={"single_host_origin"}
                  ></GoogleLogin>
                </div>
                <br></br>

                <input
                  className="inpu2"
                  type="text"
                  placeholder="Sign Up with Polkadot"
                />
              </div>
              {/* </div> */}
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
