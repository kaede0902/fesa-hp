import React from 'react';

const NewsInfo = () => {
  const NewsText = 
  `
    newest infomation
  `
  document.title = '最新情報☆ '
  return (
    <h2 className='px-4 py-4'>{NewsText}</h2>
  );
}
export default NewsInfo;
