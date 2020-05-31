import React from 'react';

const NewsInfo = () => {
  const NewsText = 
  `
    2020令和2年，夏のセールを開催します！
  `
  document.title = '最新情報☆ '
  return (
    <h2 className='px-4 py-4'>{NewsText}</h2>
  );
}
export default NewsInfo;
