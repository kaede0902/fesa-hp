import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import NavData from '../NavDataList'

const SideMenu = () => {
  const navItems = NavData.map((item, key) => 
      <Row key={item} className=''>
        <Col className='py-1 my-1 ' >
          <Button variant="light"
            href={item.link}
            size='lg'
            className='w-100'
            >{item.name}</Button>
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

