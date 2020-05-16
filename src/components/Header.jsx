import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import Logo from '../img/sk-logo.png';
import '../css/body.css'


const Header = () => {
  const headerText = `
    お電話はこちら
  `;
  return (
      <Row className='mb-5'>
        <Col xs={0} md={4}> </Col>
        <Col className='py-1 ' 
          xs={6} md={4}>
          <img src={Logo}  
            className=
              'rounded mx-auto d-block img-fluid logo'
            alt = 'logo'
            width='220px'
            
          />
        </Col>
        <Col className='py-1 ' 
          xs={6} md={4}>
          <h4 className='
              d-flex 
              justify-content-end 
              align-items-center
              h-100
          '>
            {headerText}</h4>
        </Col>
      </Row>
  );
};
export default Header;

