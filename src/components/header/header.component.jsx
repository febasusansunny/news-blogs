import React from 'react';
import {Link} from 'react-router-dom' //used for routing to the pages
import './header.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import {ReactComponent as Logo} from '../../assets/news.svg' //getting logo file



//functional component (as there is no data/state that is to be changed)

const Header = () => (
    <div className = "header" >
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <h1 className="heads"> News Today</h1>
        <div >
        <CustomButton type='submit' >  Trending</CustomButton>
        </div>
        <div> 
        <CustomButton type='submit'> Contact </CustomButton>
        </div>
        <div>  
        <CustomButton type='submit'> Archeive </CustomButton>  
        </div>
    </div>
    
)

export default Header;

