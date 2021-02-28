import React from 'react';

import NewsItem from '../news_items/news-item.component';

import './display-articles.styles.scss';

const DisplayArticle = ({ title, items }) => (
  <div className='display-article'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='view'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <NewsItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default DisplayArticle;
