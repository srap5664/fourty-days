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
        <Content />
        <Footer />       
      </div>       
    );
  }
}

class Content extends Component{
  render(){
    return(
      <div id="container" class="container container-fluid">
        <div className="Cover">
          <img src={coverImg} alt="" className="img-responsive"/>
        </div>
        <div className="content">
          <p>      محتوى فارغ       </p>
        </div>
     </div>
    );
  }
}



export default App;
