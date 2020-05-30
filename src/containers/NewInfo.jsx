import React from 'react';
import Home from './Home';
import NewsInfo from '../components/NewsInfo'

function NewInfo() {

  return (
    <Home body={<NewsInfo />}/>
  );
}
export default NewInfo;
