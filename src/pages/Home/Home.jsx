import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Home/Home.css";
import homeimage from "../../assets/Images/Home 1x.png";
import box from "../../assets/Images/bx-filter@2x.png"
import Search from "../Search/Search";
import HomeEvent from "../HomeEvent/HomeEvent";
 

function Home() {
  return (
    <>
      <section className="herohome">
        <Container>
          <Row>
            <Col md={6}>
              <h1 className="headi">
                FIND <span className="Find">YOUR</span> NEXT TECH CONFERENCE{" "}
                <span className="Find">IN THE</span> POLKADOT{" "}
                <span className="Find">ECOSYSTEM</span>
              </h1>
              <p>Polkadot ecosystem</p>
              <button className="getstart">Get Started</button>
            </Col>
            <Col md={6}>
              <img  src={homeimage} alt="/home" width="100%" className="filter" />
            </Col>
          </Row>
        </Container>
      </section>
      <div>
        <Container>
          <Row>
            <div className="about_event">
              <section className="event">
                <div>
                  <h4 className="h4">100</h4>
                  <p>Upcoming Event</p>
                </div>
                <div>
                  <h4 className="h4">91</h4>
                  <p>Recently Added</p>
                </div>
                <div>
                  <h4 className="h4">91,000</h4>
                  <p>All Time Events</p>
                </div>
              </section>
            </div>
            <div>
            <h3>Crypto Event Calender</h3>
            
            </div>
            <div>
              <Search/>
            </div>  
            <div>
              <HomeEvent/>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
