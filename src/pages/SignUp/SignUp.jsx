import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SignUp.css";
import Signup from "../../assets/Images/Signup.svg";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { TextField ,Box} from "@mui/material";
import {useForm} from "react-hook-form"


function SignUp() {
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
      <section className="heroSectio">
        <Container>
          <Row>
            <Col md={6}>
              {/* input */}
              <br></br>
              <br></br>

              <div className="contact">
                <Col md={6}>
                  <img className="bg" src={Signup} alt="" width="170%" />
                </Col>
              </div>
              <div>{/* <Subscribe/> */}</div>
            </Col>
            <Col md={6}>
              <div className=" about">
                <h5 className="sign">Create Account</h5>
                <Link to="/signin" className="btn1">
                  SignIn
                </Link>
                
                <div>
                <TextField
                    sx={{ m: 2, }}
                    id="outlined-basic"
                    className="firstn"
                    label="Enter first name "
                    variant="outlined"
                    {...register("Enterfirstname", {required: "Required field"})}
                    error={!!errors?.Enterfirstname}
                    helperText={errors?.Enterfirstname ? errors.Enterfirstname.message : null}
                    
                  />
                  <TextField
                    sx={{ m: 2, }}
                    id="outlined-basic"
                    className="inpu1"
                    label="Enter last name"
                    variant="outlined"
                    {...register("Enterlastname", {required: "Required field"})}
                    error={!!errors?.Enterlastname}
                    helperText={errors?.Enterlastname ? errors.Enterlastname.message : null}
                  />
                  </div>
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
                  <button type="submit" className="btn2">Create Account</button>
                </Box>
              </form>

                <br></br>
                <div>
                  
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
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SignUp;
