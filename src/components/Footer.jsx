import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import '../css/body.css'
import shops from '../ShopDataList';

const Footer = () => {
  const shopItems = shops.map((item, key) =>
    <div key={item.tel}>
      フクダデンキ{item.name}店: {item.adress}: 
      TEL: {item.tel}
    </div>
  );

  return (
    <Row className='my-3'>
      <Col className='' md={8}>
        {shopItems}
      </Col>
      <Col className='' md={4}>
        copyright: Fukuda Electric System Arts
      </Col>
    </Row>
  )
}
export default Footer;
