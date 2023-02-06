import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
function Skills() {
  return (
    <Container>
        <Row>
            <Col md={6} style={{color:'white',justifyContent:'right'}} >
                <h2><strong>Skills & Interests</strong></h2>
                <p className="heading-description blockquote">
                I am passionate about using Javascript and Animation Libraries
                to create awesome user experiences. With over five years of
                experience developing web applications using the latest
                front-end and back-end technologies.
              </p>
            </Col>
            <Col md={6} >
                <img src="https://via.placeholder.com/300x200"/>
            </Col>
        </Row>
    </Container>
  )
}

export default Skills