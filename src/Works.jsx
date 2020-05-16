import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import './css/body.css'

function Works() {
  return (
    <Container className='my-5'>
      <Header />
      <Row>
        <Col className='bodyText' 
          xs={3} >
          <SideMenu />
        </Col>
        <Col className='Pink' 
          xs={9} >
          電球，蛍光灯，電池交換，テレビ，エアコン，
          なんでもやります
        </Col>
      </Row>
    </Container>
  );
}
export default Works;
