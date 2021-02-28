import React from 'react';
import CONTENTS from './content.data.js'

//embedding collection preview to shop component
import DisplayArticle from '../../components/display-articles/display-articles.component'

//class component as we need to deal with data/state
class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections:CONTENTS
        }
    }
  
    render(){
        const {collections} = this.state;
        return (<div className="content">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <DisplayArticle key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
            )
    }
}

export default Content;