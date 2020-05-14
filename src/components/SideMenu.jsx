import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';

const SideMenu = () => {
  const navText = [
    'NEW INFO', 'ABOUT WORKS', 'PARTS ORDER',
    'AIRCON CLEAN', 'LINKS',
  ];
  const navItems = navText.map((item, key) => 
      <Row key={item}>
        <Col className='py-3 my-1 bg-info ' >
          <h5>{item}</h5>
        </Col>
      </Row>
  );
  return (
    <div>
      {navItems}
    </div>
  );
};
export default SideMenu;

