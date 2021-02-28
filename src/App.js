import logo from './logo.svg';
import './App.css';
//Get homepage component to main component
import HomePage from './pages/homepage/homepage.component';
import {Route} from 'react-router-dom';

import Header from './components/header/header.component'
import Content from './pages/content/content.component'
import Directory from './components/directory/directory.component'
//import CONTENTS from './pages/content/content.data';
//import DisplayArticle from './components/display-articles/display-articles.component'

//RENDERING
function App() {
  return (
    <div>
      <Header/>
      <Route exact path="/" component={HomePage}/>
      <Route path="/contents" component={Content}/>
    
    </div>
  );
}

export default App;
