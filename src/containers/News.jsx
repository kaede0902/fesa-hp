import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from 'react-bootstrap';
import { Card, CardGroup, } from 'react-bootstrap/';
import sale from '../SaleDataObj';
import siumai from '../img/siumai.jpg'
import garagara from '../img/garagara.png'

const NewInfo = () => {
  document.title = '夏の大感謝セール';
  const saleItems = (item) => (
    <div>
      <Row md={10} className='
        align-item-center justify-content-center 
      '>
        <h1>{item.name}</h1>
      </Row>
      <Row md={10} className='
        align-item-center justify-content-center 
      '>
        {item.due}
      </Row>
      <CardGroup className='
        align-item-center justify-content-center 
      '>
        <Card 
          style = {{ width: '20rem' }}
          border = 'primary'
          className='my-2 text-center '
        >
          <Card.Body>
            <Card.Title>
              <h3>ご来場記念品</h3>
            </Card.Title>    
            <Card.Text>
              {item.souvenir.name}
            </Card.Text>    
            <Card.Text>
              {item.souvenir.desc}
            </Card.Text>    
            <img 
              src={ siumai } alt="siumai"
              style = {{ width: '16rem' }}
            />
            <Card.Text
              className='mt-4'
            >
              {item.souvenir.note}
            </Card.Text>    
          </Card.Body>
        </Card>
        <Card 
          style = {{ width: '20rem' }}
          border = 'primary'
          className='my-2 text-center '
        >
          <Card.Body>
            <Card.Title>
              <h3>抽選会</h3>
            </Card.Title>    
            <img 
              src={ garagara } alt="garagara"
              style = {{ width: '16rem' }}
            />
            <Card.Text>
              特等: {item.rattle.special}
            </Card.Text>    
            <Card.Text>
              1等: {item.rattle.one}
            </Card.Text>    
            <Card.Text>
              2等: {item.rattle.two}
            </Card.Text>    
            <Card.Text>
              3等: {item.rattle.three}
            </Card.Text>    
            <Card.Text>
              4等: {item.rattle.four}
            </Card.Text>    
            <Card.Text>
              5等: {item.rattle.five}
            </Card.Text>    
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
  return (
    <div
      className ='px-2 py-4'
    >
      {saleItems(sale.summer2020)}
    </div>
  );
};
export default NewInfo;

