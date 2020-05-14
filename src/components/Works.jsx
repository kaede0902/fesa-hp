import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import SideMenu from './SideMenu';
import Header from './Header';

function Works() {
  return (
    <Container className='my-5'>
      <Header />
      <Row>
        <Col className='py-3 bg-primary' 
          xs={3} >
          <SideMenu />
        </Col>
        <Col className='py-3 bg-secondary' 
          xs={9} >
          電球，蛍光灯，電池交換，テレビ，エアコン，
        </Col>
      </Row>
    </Container>
  );
}
export default Works;
