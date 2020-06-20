import React from 'react';
import { Card, CardGroup, } from 'react-bootstrap/';
import ShopData from '../data/ShopData';
import FesaShot from '../img/fesa-shot.jpg';

const Home = () => {
  const OurWorksText = 
  `
地デジアンテナの設置、エアコン取り付け、スイッチ修理、コンセントの増設、お買い上げいただいた商品の配達などお引き受け致しております.
高所の蛍光灯や電球の交換など，お気軽にお電話ください！
  `;
  const OurWorks = (
    <div className='w-50 text-center mx-auto my-5 '>
      <h3 className='text-primary'>
        私たちにできること
      </h3>
      {OurWorksText}
    </div>
  );

  const ShowMain = ((item) => 
    <CardGroup >
    <Card  
      border = 'danger'
      style = {{ 
        height : '35rem',
        width  : '100%'
      }}
      className='mx-auto'
    >
      <Card.Body className='text-center'>
        <iframe src={item.mapLink} 
          frameborder="0"  allowfullscreen="" 
          title = 'main shop' aria-hidden="false" 
          tabindex="0"
          width = '100%'
          height = '90%'
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
    </CardGroup>
  );
  const ShowSub = ShopData.sub.map((item, key) => 
    <div
      key={item.tel} className=''
    >
        <Card 
          style = {{ width: '23.7rem' }}
          border = 'primary'
          className='my-2 mx-auto'
        >
          <Card.Body>
            <iframe src={item.mapLink} 
              width="100%" height="150" 
              frameborder="0"  allowfullscreen="" 
              title = 'hoge' aria-hidden="false" 
              tabindex="0"
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
    {ShowMain(ShopData.main)}
    <CardGroup
      className=' 
        mx-auto
        text-center
      '
    >
      {ShowSub}
    </CardGroup>
    {OurWorks}
      <img src={FesaShot} alt="fesashot" 
        className='w-100'
      />
    </div>
  );
}
export default Home;
