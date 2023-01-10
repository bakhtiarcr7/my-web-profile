import React from "react";
import Card from "react-bootstrap/Card";
import {FaChessKing, } from "react-icons/fa";
import {GiPaintBrush} from 'react-icons/gi'
import { BiFootball } from "react-icons/bi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hellow world! I am <span className="purple">Bakhtiar Hussain </span>
            from <span className="purple">Pakistan.</span>
            {/* <br />
            Software Engineer 
            <br /> */}
            <br></br>
            A solution-oriented computer scientist having years of experience in building interactive web apps, android apps, and desktop apps(PoS). 
            Familiar with frameworks including MERN, .NET, SpringBoot, Flask, and more. Working mainly to enrich web design through frontend and backend development. 
            Highly inclined toward data, data analytics, cloud, and designing.
            Eager to join companies where I can best utilize my IT skills and benefit the team.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul >
            <li className="about-activity">
              <FaChessKing className="hobby-icons" /> Chess
            </li>
            <li className="about-activity">
              <BiFootball className="hobby-icons"/> Football
            </li>
            <li className="about-activity">
              <GiPaintBrush className="hobby-icons"/> Calligraphy
            </li>
           
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
