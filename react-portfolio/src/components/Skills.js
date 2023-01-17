import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
function Skills() {
  return (
    <Container>
        <Row>
            <Col md={6} style={{border:"2px",borderBlockColor:"red"}}>
                <img src="https://via.placeholder.com/600x500"/>
            </Col>
            <Col md={6}  style={{border:"2px",borderBlockColor:"red"}}>
                <h2>This is the skills heading</h2>
            </Col>
        </Row>
    </Container>
  )
}

export default Skills