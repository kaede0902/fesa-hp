import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const SideMenu = () => {
  const navText = [
    '店舗一覧','新着情報☆', '業務内容', '部品注文',
    'エアコンクリーニング', 'LINKS',
  ];
  const navItems = navText.map((item, key) => 
      <Row key={item} className=''>
        <Col className='py-1 my-1 ' >
          <Button variant="light"
            size='lg'
            className='w-100'
            >{item}</Button>
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

