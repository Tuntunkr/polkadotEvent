import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../SignIn/SignIn.css";
import Sign from "../../assets/Images/Signin.svg";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { Box, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

import { useForm } from "react-hook-form";

function SignIn() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
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
                  <Box mb={2} xs={2} sm={4} md={4} lg={6} xl={8}>
                    <TextField
                      sx={{ m: 2, display: "flex" }}
                      id="outlined-basic"
                      className="eyesign"
                      label="Enter your email"
                      variant="outlined"
                      autoComplete="email"
                      autoFocus
                      {...register("email", { required: "Required field" })}
                      error={!!errors?.email}
                      helperText={errors?.email ? errors.email.message : null}
                    />
                    {/* <TextField
                    sx={{ m: 2, display: "flex" }}
                    id="outlined-basic"
                    className="eyep"
                    label="Enter your password"
                    variant="outlined"
                    {...register("password", {required: "Required field"})}
                    error={!!errors?.password}
                    helperText={errors?.password ? errors.password.message : null}
                  /> */}

                    <FormControl xs={2} sm={4} md={4} lg={6} xl={8}
                      sx={{ m: 2, }}
                      variant="outlined"
                      className="eyep"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Enter your password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {values.showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Enter your password"
                      />
                    </FormControl>
                    
                  </Box>
                  <button type="submit" className="btn2">
                      Sign in Into Account
                    </button>
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
            <Col md={6} mb={3}>
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
