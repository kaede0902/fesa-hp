import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import '../css/body.css'

const Footer = () => {
  const shops = [
    {
      name: '妙蓮寺',
      adress: '横浜市港北区菊名1-4-1',
      tel: '045-421-5752',
    },
    {
      name: '市が尾',
      adress: '横浜市青葉区市ケ尾町1064-5',
      tel: '045-971-5116',
    },
    {
      name: '大倉山',
      adress: '横浜市港北区大倉山3-1-22',
      tel: '045-531-2170',
    },
    {
      name: '六角橋',
      adress: '	横浜市神奈川区西神奈川3-7-1 池田ビル1F',
      tel: '045-491-4108',
    }
  ];
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
