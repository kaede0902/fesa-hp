import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import {Navbar, Nav, NavDropDown} from 'react-bootstrap';
import logo from '../img/narrow-logo.svg';
import '../css/body.css'
import NavData from '../NavDataList'


const Header = () => {
  const headerText = `
    神奈川区のお困りごとはお任せ下さい．
  `;
  const navItems = NavData.map((item, key) => 
    <Nav.Link 
      href={item.link} key={key}
    >{item.name}</Nav.Link>
  );


  return (
      <Row className=''>
      <Navbar collapseOnSelect expand = 'lg'>
        <Navbar.Brand href="./" >
          <img
            src={logo}
            height="35"
            className="d-inline-block align-top my-2"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

      
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='mr-auto'>
            {navItems}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Row>
  );
};
export default Header;

