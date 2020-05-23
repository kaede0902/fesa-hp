import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const SideMenu = () => {
  const NavData = [
    {
      name: '店舗一覧',
      link: 'shoplist',
    },
    {
      name: '新着情報☆', 
      link: 'newinfo',
    },
    {
      name: '部品注文',
      link: 'partsorder',
    },
    {
      name: 'エアコンクリーニング',
      link: 'airconclean',
    },
    {
      name: 'LINKS',
      link: 'links',
    },
  ];
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

