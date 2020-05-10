import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  const [row1, setRow1] = useState([
    1,2,3,4,5,6,7,8,9,10
  ]);

  return (
    <Container className='my-5'>
      <Row>
        <Col className='py-5 bg-danger' 
          xs={3}>1 to 3, top-logo </Col>
        <Col className='py-5 bg-secondary' 
          xs={2}>4 to 5, big-logo</Col>
        <Col className='py-5 bg-danger' 
          xs={7}>6 to 13, text... </Col>
      </Row>
      <Row>
        <Col className='py-3 bg-info' 
          xs={3}>HOME BTN</Col>
        <Col className='py-3 bg-danger' 
          xs={2}>BLANK</Col>
        <Col className='py-3 bg-secondary' 
          xs={7}>BLANK</Col>
      </Row>
      <Row>
        <Col className='py-3 bg-info' 
          xs={3}>NEW INFO</Col>
        <Col className='py-3 bg-secondary' 
          xs={2}>SHOP 1 NAME</Col>
        <Col className='py-3 bg-danger' 
          xs={7}>SHOP 1 TEL</Col>
      </Row>
      <Row>
        <Col className='py-3 bg-info' 
          xs={3}>ABOUT WORK</Col>
        <Col className='py-3 bg-danger' 
          xs={2}>BLANK</Col>
        <Col className='py-3 bg-secondary' 
          xs={7}>BLANK</Col>
      </Row>
      <Row>
        <Col  className='py-5' xs={3}>1 </Col>
        <Col>4 </Col>
        <Col>5 </Col>
        <Col>6 </Col>
        <Col>7 </Col>
        <Col>8 </Col>
        <Col>9 </Col>
        <Col>10 </Col>
        <Col>11 </Col>
        <Col>12 </Col>
        <Col>13 </Col>
      </Row>
    </Container>
  );
}
export default App;
