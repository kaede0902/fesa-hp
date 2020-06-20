import React from 'react';
import { Card, CardGroup, } from 'react-bootstrap/';
import Image from 'react-bootstrap/Image' 

import works from '../data/WorkData'

const Works = () => {
  const WorkCards = works.map((item, key) => 
    <div
      key = {key}
    >
        <Card 
          style = {{ width: '32rem' }}
          border = 'primary'
          className='mx-2 my-2'
        >
          <Card.Body>
            <Card.Title>
              {item.name}
            </Card.Title>    
            <Image src={item.imgLink}
            fluid />
          </Card.Body>
        </Card>
    </div>
  );

  document.title = '業務内容'
  return (
    <React.Fragment>
      <CardGroup
        className='px-4 py-4 
          align-item-center justify-content-center'
      >
        {WorkCards}
      </CardGroup>
    </React.Fragment>
  );
}
export default Works;
