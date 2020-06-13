import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from 'react-bootstrap';
import { Card, CardDeck, ListGroup, ListGroupItem,} from 'react-bootstrap/';
import items from '../summer2020';

const NewInfo = () => {
  document.title = '六角橋店,夏の大感謝セール';
  const SalesCards = items.map((item, key) => 
    <Card 
      style = {{ width: '20rem' }}
      border = 'primary'
      className='my-2 text-center '
      key={item.title}
    >
      <Card.Body>
        <Card.Header>
          <h3>{item.title}</h3>
        </Card.Header>    
        <Card.Img variant="top" src={item.imgLink} />
      { item.descList.map((item, key) =>  
        <ListGroup className="list-group-flush">
          <ListGroupItem>
          {item}
          </ListGroupItem>
        </ListGroup>
        )
      }

      </Card.Body>
    </Card>
  );
  return (
    <div
      className ='px-2 py-4'
    >
      <Row md={10} className='
        align-item-center justify-content-center 
      '>
        <h1>六角橋店，夏の大感謝セール！</h1>
      </Row>
      <Row md={10} className='
        align-item-center justify-content-center 
      '>
        <h3>2020(令和2)年06月26日 ~ 07月05日</h3>
      </Row>
      <CardDeck  className='
        align-item-center justify-content-center 
      '>
        {SalesCards}
      </CardDeck>
    </div>
  );
};
export default NewInfo;

