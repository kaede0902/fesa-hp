import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import '../css/body.css'
import shops from '../ShopDataList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
library.add(fab, ); 

const Footer = () => {
  const shopItems = shops.map((item, key) =>
    <div key={item.tel}>
      フクダデンキ{item.name}店: {item.adress}: 
      TEL: {item.tel}
    </div>
  );

  return (
    <div>
      <Row className='my-3'>
        <Col className='' md={8}>
          {shopItems}
        </Col>
        <Col className='' md={4}>
        <a href="https://github.com/kaede0902">
          Developer:
          <FontAwesomeIcon icon={['fab','github',]} />
        </a>
        </Col>
      </Row>
      <Row>
        <small className='text-center mx-auto'>
          &copy; 2020 Fukuda Electric 
          System Arts Co.
        </small>
      </Row>
    </div>
  )
}
export default Footer;
