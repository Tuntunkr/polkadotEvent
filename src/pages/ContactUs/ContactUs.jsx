import { Box, TextField } from "@mui/material";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import contact from "../../assets/Images/Contact.svg";
import {useForm} from "react-hook-form"


import "./ContactUs.css";
import Footer from "../Footer/Footer";

function ContactUs() {
  const {register ,handleSubmit ,formState:{errors}} = useForm()
  const onSubmit = (data) =>{
    console.log(data)
  }
  const handleLogin = (result) => {
    alert(result);
  };
  return (
    <>
      <section className="heroCon">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="headingcontact">
                <u className="conatct">Contact Us</u>
              </h2>
              {/* <span className='conatct'>-----------</span> */}
              {/* input */}
              <br></br>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box mb={2}>
                  <TextField
                    sx={{ m: 2, display: "flex" }}
                    id="outlined-basic"

                    className="eyesign"
                    label="Enter your name"
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
                    label="Enter your email"
                    variant="outlined"
                    {...register("password", {required: "Required field"})}
                    error={!!errors?.password}
                    helperText={errors?.password ? errors.password.message : null}
                  />
                 
                </Box>
              </form>
              <div>
                <div>
                  <Button className="bt1">Submit</Button>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <img src={contact} alt="" className="cont" />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </>
  );
}

export default ContactUs;
