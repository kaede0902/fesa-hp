import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import Logo from '../img/sk-logo.png';
import '../css/body.css'


const Header = () => {
  const headerText = `
    毎度ありがとうございます！　
    フクダデンキです！

    充実したサービスの提供を目指しています。
    お困りの際はぜひ当店にお声をおかけください。
  `;
  return (
      <Row className=''>
        <Col className='py-1 Green ' 
          xs={4} md={3}>
          <img src={Logo}  
            className=
              'rounded mx-auto d-block img-fluid logo'
            alt = 'logo'
            
          />
        </Col>
        <Col className='py-1 Pink ' 
          xs={8} md={9}>
          <h1>{headerText}</h1>
        </Col>
      </Row>
  );
};
export default Header;

