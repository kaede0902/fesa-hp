import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import Logo from '../img/big-logo.gif';


const Header = () => {
  const headerText = `
    毎度ありがとうございます！　
    フクダデンキです！

    充実したサービスの提供を目指しています。
    お困りの際はぜひ当店にお声をおかけください。
  `;
  return (
      <Row>
        <Col className='py-5 bg-info' 
          xs={3} >
          <img src={Logo} width = '160px'
            className='rounded mx-auto d-block '
            alt = 'logo'
          />
        </Col>
        <Col className='py-5 bg-primary' 
          xs={9}><h1>{headerText}</h1></Col>
      </Row>
  );
};
export default Header;

