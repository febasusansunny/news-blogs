import React from 'react';
import Article from '../articles/articles.component';
import './directory.styles.scss'

//class component as we need to store the state value
class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections : [
                {
                  title: 'What to know about Rivian, the Amazon-backed EV startup that could be the next Tesla',
       
                  imageUrl: 'https://i.insider.com/6026c8132edd0f001a8d596d?width=1200&format=jpeg',
                  id: 1,
                  linkUrl: 'content/The next Moto smartwatches will include an Apple Watch clone'
                },
                {
                  title: 'The Morning After: MSIs latest gaming laptop targets the 1440p sweet spot',
                  imageUrl: 'https://s.yimg.com/uu/api/res/1.2/IVrjR7GcBdTmW_pjFLqtVQ--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-02/9480dc50-7911-11eb-bcf5-a95e2a8b792f.cf.jpg' ,
                  id: 2,
                  linkUrl: 'content2/The Morning After: MSIs latest gaming laptop targets the 1440p sweet spot'
                },
                {
                  title: 'Dogecoin hasnot always been a fun meme coin',
                  imageUrl: 'https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDIvODlmYzBjZjktMTJlNy00YmVhLTg0ZmItYTQ3ZDM1OTE1YWUyLmpwZw==.jpg',
                  id: 3,
                  linkUrl: 'content3/The next Moto smartwatches will include an Apple Watch clone'
                },
                {
                  title: 'Entrepreneurial Heroes: A Warning',
                  imageUrl: ' "https://ritholtz.com/wp-content/uploads/2021/02/Delusions-Of-Crowds.jpg',
                  id: 3,
                  linkUrl: 'content4/The next Moto smartwatches will include an Apple Watch clone'
                }
              ]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                  this.state.sections.map(({title,id,imageUrl}) => (
                    <Article key={id} title={title} imageUrl={imageUrl}/>
                  ))
                  
                }
            </div>
        )
    }
}

export default Directory;