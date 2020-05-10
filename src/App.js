import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import SideMenu from './components/SideMenu';

function App() {
  const [row1, setRow1] = useState([
    1,2,3,4,5,6,7,8,9,10
  ]);

  return (
    <Container className='my-5'>
      <Row>
        <Col className='py-5 bg-info' 
          xs={3} >TOP-LOGO</Col>
        <Col className='py-5 bg-primary' 
          xs={9}>TOP-TEXT</Col>
      </Row>
      <Row>
        <Col className='py-3 bg-primary' 
          xs={3} >
          <SideMenu />
        </Col>
        <Col className='py-3 bg-secondary' 
          xs={9} >
            cards here
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
