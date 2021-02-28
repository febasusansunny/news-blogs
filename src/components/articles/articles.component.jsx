import React from 'react';
import './articles.styles.scss'
import {Link} from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component';

//functional component
const Article = ({title, imageUrl}) => (
    
    <div>
        <div style={{
        backgroundImage: `url(${imageUrl})`
    }} 

    className='article'> 
      </div>
      <div>
    <h1 className='title'>{title}</h1>
    <CustomButton type='submit'>  <Link className="subtitle" to="/content">Read More </Link> </CustomButton>
            </div>
        
    </div>
    

)

export default Article;


        
    