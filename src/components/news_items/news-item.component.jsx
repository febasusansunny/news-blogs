import React from 'react';
import './news-items.styles.scss';

//functional component

const NewsItem = ({id,name,imageUrl}) => (
    <div className="news-item">
        <div className="image"
        style={{
            backgroundImage:`url(${imageUrl})`
        }}>
            <div className="footers">
                <span className='name'>{name}</span>
              
                </div>
          </div>    
    </div>
)

export default NewsItem;