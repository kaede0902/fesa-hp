import React from 'react';
import { Card, CardGroup, } from 'react-bootstrap/';
import shops from '../ShopDataList';

const Body = () => {
  const bodyText = 
  `
地デジアンテナの設置、エアコン取り付け、スイッチ修理、コンセントの増設、お買い上げいただいた商品の配達などお引き受け致しております.
高所の蛍光灯や電球の交換など，お気軽にお電話ください！
  `;
  const bodyHeader = (
    <h3 className='px-4 py-4'>{bodyText}</h3>
  );


  const ShopCards = shops.map((item, key) => 
    <div
      key={item.tel} className=''
    >
        <Card 
          style = {{ width: '20rem' }}
          border = 'primary'
          className='mx-2 my-2 '
        >
          <Card.Body>
<iframe src={item.mapLink} 
width="250rem" height="150" frameborder="0"  allowfullscreen="" title = 'hoge' aria-hidden="false" tabindex="0"
>
</iframe>  
            <Card.Title>
              フクダデンキ{item.name}店
            </Card.Title>    
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
  document.title = 'Fukuda Electric System Arts';

  return (
    <div>
    <CardGroup
      className='px-4 py-4 
        align-item-center justify-content-center 
        text-center
      '
    >
      {ShopCards}
    </CardGroup>
    {bodyHeader}
    </div>
  );
}
export default Body;
