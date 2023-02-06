import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particles from "../Particles/particles";
import myImg from "../../Assets/profile-pic-rec.png";
import SocialMedia from "../SocialMediaHome";
import TypeWriter from "./TypeWriter";
import Skills from "../Skills";
// import Particles from 'react-particles-js';
// import particlesConfig from '../config/particlesjs-config';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
      
        <Container className="home-content">
        
          <Row>
          <Particles />
            <Col md={7} className="home-header">
              {/* <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1> */}

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Bakhtiar Hussain</strong>
              </h1>

              <p className="heading-description blockquote">
                I am passionate about using Javascript and Animation Libraries
                to create awesome user experiences. With over five years of
                experience developing web applications using the latest
                front-end and back-end technologies.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5} className="my-profile">
              <div>
                <img src={myImg} className="profile-pic" alt="avatar" />
              </div>
            </Col>
           
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              {/* <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
              </p> */}
              <SocialMedia  />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* This component is under development ----  */}
      <Container fluid className="skills" id="">
        {/* <Container> */}
          {/* <Row>
            <Col md={6} className=""> */}
              {/* <img src="https://via.placeholder.com/600x300"/> */}
              {/* <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
              </p> */}
              {/* <SocialMedia  /> */}
              {/* <Skills/> */}
            {/* </Col>
            <Col md={6}>
              <h2>Skills heading!</h2>
            </Col>
          </Row> */}

          
        {/* </Container> */}
        <Skills/>
      </Container>
    </section>
  );
}

export default Home;
