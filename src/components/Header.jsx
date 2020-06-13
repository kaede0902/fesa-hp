import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../img/narrow-logo.svg';
import '../css/body.css'


const Header = () => {
  const headerText = `
    神奈川区のお困りごとはお任せ下さい．
  `;
  return (
      <Row className=''>
      <Navbar bg="" className='m-0'>
        <Navbar.Brand href="./" >
          <img
            src={logo}
            height="35"
            className="d-inline-block align-top my-2"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Navbar>
      </Row>
  );
};
export default Header;

