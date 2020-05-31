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
    <h2 className='px-4 py-4'>{bodyText}</h2>
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
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12994.900530147068!2d139.625848!3d35.486344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa36eb838d390fdeb!2z44OV44Kv44OA44OH44Oz44Kt5YWt6KeS5qmL5bqX!5e0!3m2!1sen!2sjp!4v1590818220562!5m2!1sen!2sjp" 
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
  document.title = 'フクダデンキ';

  return (
    <div>
    {bodyHeader}
    <CardGroup
      className='px-4 py-4 
        align-item-center justify-content-center 
        text-center
      '
    >
      {ShopCards}
    </CardGroup>
    </div>
  );
}
export default Body;
