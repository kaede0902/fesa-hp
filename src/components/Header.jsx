import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import Logo from '../img/fesa-simple-logo.svg';
import '../css/body.css'


const Header = () => {
  const headerText = `
    神奈川区のお困りごとはお任せ下さい．
  `;
  return (
      <Row className='mb-5'>
        <Col xs={0} md={4}> </Col>
        <Col className='py-1 ' 
          xs={12} md={4}>
          <img src={Logo}  
            className=
              'rounded mx-auto d-block img-fluid logo'
            alt = 'logo'
            width='220px'
            
          />
        </Col>
        <Col className='py-1 ' 
          xs={0} md={4}>
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

