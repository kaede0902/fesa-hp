import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import Body from './components/Body';
import './css/body.css';

function App() {

  return (
    <Container className='my-5 '>
      <Header />
      <Row className='bodyText '>
        <Col className='' 
          xs={3} md={2}>
          <SideMenu />
        </Col>
        <Col className='' 
          xs={9} md={10} >
          <Body />
        </Col>
      </Row>
      <Row>
        <Col>1 </Col>
        <Col>2 </Col>
        <Col>3 </Col>
        <Col>4 </Col>
        <Col>5 </Col>
        <Col>6 </Col>
        <Col>7 </Col>
        <Col>8 </Col>
        <Col>9 </Col>
        <Col>10 </Col>
        <Col>11 </Col>
        <Col>12 </Col>
      </Row>
    </Container>
  );
}
export default App;
