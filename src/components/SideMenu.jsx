import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

const SideMenu = () => {
  return (
    <div>
      <Row>
        <Col className='py-5 bg-info ' >
          NEW INFO</Col>
      </Row>
      <Row>
        <Col className='py-5 bg-info ' >
          ABOUT WORKS</Col>
      </Row>
      <Row>
        <Col className='py-5 bg-info ' >
          PARTS ORDER</Col>
      </Row>
      <Row>
        <Col className='py-5 bg-info ' >
          AIRCON CLEAN</Col>
      </Row>
      <Row>
        <Col className='py-5 bg-info ' >
          LINKS</Col>
      </Row>
    </div>
  );
};
export default SideMenu;

