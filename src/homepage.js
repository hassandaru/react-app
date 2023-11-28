import React from "react";
import { Card, CardText } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "./images/logo.png";

const Homepage = () => {

//   return (
//     <Container>

//     <p className="h1" id="3x">Fun facts about React</p>

//       <Row>
//         <Col>  
//           <ul className="list-group">
//             <li>was first released in 2013</li>
//             <li>was originally created by jordan walke</li>
//             <li>has well over 100K stars on Github</li>
//             <li>is maintained by facebook</li>
//             <li>powers thousands of enterprise apps, including mobile apps</li>
//           </ul>
//         </Col>
//       </Row>
  
//   </Container>
//   );


  return (
    <div style={{padding: "10em 0em"}}>
      <header>
        <nav>
          <img src={logo} width="40px" />
        </nav>
      </header>
      <h1>Reasons i am exited to learn React.</h1>
      <ul>
        <li>it is a popular library. so ill be able to fit in with the cool kids.</li>
        <li>I am more likely to get a job as a developer. if i know React.</li>
      </ul>
      <footer className="footer">
        <small>2023 development. All rights reserved</small>
      </footer>
  
  </div>
  );
};

export default Homepage;