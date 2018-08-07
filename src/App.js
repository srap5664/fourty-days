import React, { Component } from 'react';
import coverImg from './cover.jpg';
import './App.css';
import NavBar from './NavBar'
import Footer from './Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
     	<div id="container" class="container container-fluid">		       
           <Cover />
            <Content />
            <Footer />       
        </div>  
      </div>   
    );
  }
}



class Cover extends Component{
  render(){
    return(
     <div className="Cover">
       <img src={coverImg} alt="" className="img-responsive"/>
     </div>
    );
  }
}

class Content extends Component{
  render(){
    return(
     <div className="content">
       <p>      محتوى فارغ       </p>
     </div>
    );
  }
}



export default App;
