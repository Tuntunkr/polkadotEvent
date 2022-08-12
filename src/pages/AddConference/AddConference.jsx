import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./AddConference.css";
import Add from "../../assets/Images/Conference.svg";
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  ListSubheader,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Select, Option } from "@material-tailwind/react";
import Footer from "../Footer/Footer";

// import Footer from './Footer';

function AddConference() {
  const [value, setValue] = React.useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <section className="addconf">
        <Container>
          <Row>
            <Col md={6}>
              <div className="page"></div>

              <div className="cont_1">
                <h2 className="addconference">Add Conference</h2>
                <spa>________________</spa>

                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* <input type="text" className='cn' placeholder="Conferance name" /><br />
                            <input type="text" className='cn' placeholder="A valid and working URL" /><br /> */}

                  <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Box mb={2}>
                        <TextField
                          sx={{ m: 2, display: "flex" }}
                          id="outlined-basic"
                          className="eyesign"
                          label="Conferance name"
                          variant="outlined"
                          autoComplete="email"
                          autoFocus
                          {...register("Conferance", {
                            required: "Required field",
                          })}
                          error={!!errors?.Conferance}
                          helperText={
                            errors?.Conferance
                              ? errors.Conferance.message
                              : null
                          }
                        />
                        <TextField
                          sx={{ m: 2, display: "flex" }}
                          id="outlined-basic"
                          className="eyep"
                          label="A valid and working URL"
                          variant="outlined"
                          {...register("URL", { required: "Required field" })}
                          error={!!errors?.URL}
                          helperText={errors?.URL ? errors.URL.message : null}
                        />
                        <FormControl sx={{ m: 2, fullwidth: 220 }}>
                          <InputLabel htmlFor="grouped-native-select">
                            Grouping
                          </InputLabel>
                          <Select
                            native
                            defaultValue=""
                            id="grouped-native-select"
                            label="Grouping"
                          >
                            <option aria-label="None" value="" />
                            <optgroup label="Category 1">
                              <option value={1}>Option 1</option>
                              <option value={2}>Option 2</option>
                            </optgroup>
                            <optgroup label="Category 2">
                              <option value={3}>Option 3</option>
                              <option value={4}>Option 4</option>
                            </optgroup>
                          </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, fullwidth: 190 }}>
                          <InputLabel htmlFor="grouped-select">
                            Grouping
                          </InputLabel>
                          <Select
                            defaultValue=""
                            id="grouped-select"
                            label="Grouping"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <ListSubheader>Category 1</ListSubheader>
                            <MenuItem value={1}>Option 1</MenuItem>
                            <MenuItem value={2}>Option 2</MenuItem>
                            <ListSubheader>Category 2</ListSubheader>
                            <MenuItem value={3}>Option 3</MenuItem>
                            <MenuItem value={4}>Option 4</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </form>
                  </div>

                  {/* <select name="cars" id="cars">
                        <option value="Topic">Topic</option>
                        <option value="Polkadot">Polkadot</option>
                        <option value="Kusama">Kusama</option>
                        <option value="Bitcoin">Bitcoin</option>
                      </select> */}

                  {/* <select name="cars" id="cars">
                        <option value="volvo">Location</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select> */}
                  {/* <input type="date" placeholder="Start Date" />
                      <input type="date" placeholder="CPF  URL" />
                      <input type="text" placeholder="Code of conduct URL" /> */}

                  <br></br>

                  <div>
                    <Button className="addbtn">Add Conference</Button>
                  </div>
                </form>
              </div>
            </Col>
            <Col md={6}>
              <img className="AddCon" src={Add} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default AddConference;
