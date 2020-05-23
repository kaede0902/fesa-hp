import React from 'react';
import { Card, CardGroup, } from 'react-bootstrap/';
import shops from '../ShopDataList';

const ShopInfo = () => {
  const ShopCards = shops.map((item, key) => 
    <div
      key={item.tel} className='d-flex flex-row'
    >
        <Card 
          style = {{ width: '24rem' }}
          border = 'primary'
          className='mx-2 my-2'
        >
          <Card.Body>
            <Card.Title>
              フクダデンキ{item.name}店
            </Card.Title>    
            <Card.Text>
              {item.adress}
            </Card.Text>    
            <Card.Link
              className = 'text-danger'
              href={ 'tel:'+ item.tel}
            >
              {item.tel}
            </Card.Link>
          </Card.Body>
        </Card>
    </div>
  );
  return (
    <CardGroup
      className='px-4 py-4 align-item-center justify-content-center'
    >
      {ShopCards}
    </CardGroup>
  );
}
export default ShopInfo;
