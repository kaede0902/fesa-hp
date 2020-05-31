import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import sale from '../SaleDataObj';

const SaleInfo = () => {
  const saleItems = (item) => (
    <div>
      <Row md={10} className='text-center mx-auto'>
        {item.name}
      </Row>
      <Row md={10} className=''>
        {item.due}
      </Row>
      <Row md={5} className=''>
        {item.souvenir.name}
        {item.souvenir.desc}
        {item.souvenir.note}
      </Row>
    </div>
  );
  return (
    <div
      className ='px-4 py-4'
    >
      {saleItems(sale.summer2020)}
    </div>
  );
};
export default SaleInfo;

