import React from 'react';
import { Card, CardGroup, } from 'react-bootstrap/';
import shops from '../ShopDataList';

const Body = () => {
  const bodyText = 
  `
地デジアンテナの設置、エアコン取り付け、スイッチ修理、コンセントの増設、お買い上げいただいた商品の配達などお引き受け致しております.
高所の蛍光灯や電球の交換など，お気軽にお電話ください！
  `;


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
            <Card.Text
              className = 'text-danger'
            >
              {item.tel}
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  );

  return (
    <div>
    <h2 className='px-4 py-4'>{bodyText}</h2>
    <CardGroup
      className='px-4 py-4 align-item-center justify-content-center'
    >
      {ShopCards}
    </CardGroup>
    </div>
  );
}
export default Body;
