import React from "react";
import "../../pages/Eevent/Events.css";
import Footer from "../Footer/Footer";

import {
  Box,
  Button,
  CardContent,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import computer from "../../assets/Images/computer.jpg";
import "../Blogs/Blog.css";
import { Col, Container, Row } from "react-bootstrap";

function Events() {
  return (
    <>
      <Box mt={2} ml={8}>
        <Box mt={2} ml={8}>
          <h4>Events</h4>
        </Box>

        <Box mt={2} ml={6} className="searchbarContainer">
          <input
            type="search"
            placeholder="Search topic by names,tags or categories"
          />
          <button type="search" className="blogbtn">
            Search
          </button>
          <span>
            <img src="../images/search.svg" alt="" />
          </span>
          <Box mt={2} ml={4}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="All" control={<Radio />} label="All" />
              <FormControlLabel
                value="Blogs"
                control={<Radio />}
                label="Blogs"
              />
              <FormControlLabel
                value="Articles"
                control={<Radio />}
                label="Articles"
              />
              <FormControlLabel value="News" control={<Radio />} label="News" />
            </RadioGroup>
          </Box>
        </Box>

        <Row>
          <Col md={4}>
            <div className="filterCards">
              <div className="filterLocation">
                <div className="filterTitle"><Typography variant="h5">
                    Categories
                  </Typography></div>

                <div className="searchbarCont">
                  <div>Polkadot (10)</div>
                  <div> Kusama (10)</div>
                  <div> Crypto Event (10)</div>
                  <div> Category (10)</div>
                </div>
              </div>

              {/* sidebar */}
            </div>
          </Col>
          <Row>
            <Col md={4}>
              <div className="filterCards">
                <div className="filterLocation">
                  <div className="filterTitle"><Typography variant="h5">
                    Recent  Post
                  </Typography></div>
                  <img
                    src={computer}
                    className="recent"
                    alt="Logo"
                    style={{ width: "52px", height: "42px" }}
                  />
                  <Stack>
                    <Typography variant="h5" fontWeight={400}>
                      AMA between Crypto Society and Kilt Protocol
                    </Typography>
                    <Stack direction="row" spacing={7}>
                      <Typography variant="subtitle1">
                        Date- 3 December
                      </Typography>
                      <Stack>
                        <Typography variant="subtitle1">
                          Time- 19:00 CET
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </div>

                {/* sidebar */}
              </div>
            </Col>
          </Row>
          <Col md={4}>
            <div className="filterCards">
              <div className="filterLocation">
                <div className="filterTitle">
                  <Typography variant="h5">
                    Popular Tags
                  </Typography>
                </div>

                <div className="searchbarCont">
                <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button variant="contained"  size="small">Small</Button>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="small">Small</Button>
       
      </div>
      </Box>
                </div>
              </div>

              {/* sidebar */}
            </div>
          </Col>
        </Row>

        <Col className="eventCard" md={6}>
          <Stack direction="row" spacing={1}>
            <img
              src={computer}
              alt="Logo"
              style={{ width: "198px", height: "250px" }}
            />

            <Stack>
              <Typography variant="h6" fontWeight={700} mt={3}>
                AMA between Crypto Society and Kilt Protocol
              </Typography>
              <Stack direction="row" spacing={7}>
                <Typography variant="subtitle1">Date- 3 December</Typography>
                <Stack>
                  <Typography variant="subtitle1">Time- 19:00 CET</Typography>
                </Stack>
              </Stack>
              <CardContent>
                <Typography align="justify" fontWeight={500}>
                  On 3rd December Crpto Society orgnaization will host the AMA
                  session on telegram with Kilt Protocol. You all are welcome to
                  join and the top 5 questions will get some amazing awards.
                </Typography>
                <Typography mt={1}>
                  <a href="/" style={{ color: "red" }}>
                    Read More
                  </a>
                </Typography>
              </CardContent>
            </Stack>
          </Stack>
        </Col>

        {/* 2 */}
        <Col className="eventCard" md={6}>
          <Stack direction="row" spacing={1}>
            <img
              src={computer}
              alt="Logo"
              style={{ width: "198px", height: "250px" }}
            />

            <Stack>
              <Typography variant="h6" fontWeight={700} mt={3}>
                AMA between Crypto Society and Kilt Protocol
              </Typography>
              <Stack direction="row" spacing={7}>
                <Typography variant="subtitle1">Date- 3 December</Typography>
                <Stack>
                  <Typography variant="subtitle1">Time- 19:00 CET</Typography>
                </Stack>
              </Stack>
              <CardContent>
                <Typography align="justify" fontWeight={500}>
                  On 3rd December Crpto Society orgnaization will host the AMA
                  session on telegram with Kilt Protocol. You all are welcome to
                  join and the top 5 questions will get some amazing awards.
                </Typography>
                <Typography mt={1}>
                  <a href="/" style={{ color: "red" }}>
                    Read More
                  </a>
                </Typography>
              </CardContent>
            </Stack>
          </Stack>
        </Col>

        {/* 3 */}
        <Col className="eventCard" md={6}>
          <Stack direction="row" spacing={1}>
            <img
              src={computer}
              alt="Logo"
              style={{ width: "198px", height: "250px" }}
            />

            <Stack>
              <Typography variant="h6" fontWeight={700} mt={3}>
                AMA between Crypto Society and Kilt Protocol
              </Typography>
              <Stack direction="row" spacing={7}>
                <Typography variant="subtitle1">Date- 3 December</Typography>
                <Stack>
                  <Typography variant="subtitle1">Time- 19:00 CET</Typography>
                </Stack>
              </Stack>
              <CardContent>
                <Typography align="justify" fontWeight={500}>
                  On 3rd December Crpto Society orgnaization will host the AMA
                  session on telegram with Kilt Protocol. You all are welcome to
                  join and the top 5 questions will get some amazing awards.
                </Typography>
                <Typography mt={1}>
                  <a href="/" style={{ color: "red" }}>
                    Read More
                  </a>
                </Typography>
              </CardContent>
            </Stack>
          </Stack>
        </Col>
      </Box>
      {/* <Footer/> */}
    </>
  );
}

export default Events;
