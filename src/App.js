import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from "./navigation";
import Homepage from "./homepage";
import logo from "./images/logo.png";
 

function oldInformation () {
  return (
    <div style={{padding: "4em 0em"}}>
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
    <footer style={{position: 'absolute', bottom: 0, left: 20 }} expand="lg">
      <small>2023 Hassan development. All rights reserved</small>
    </footer>

</div>
  );
};

export default function App  () {

  return (
    <>
    <Navigation />
    <Homepage />
    </>
  );
};

