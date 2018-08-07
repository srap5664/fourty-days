import React, { Component } from 'react';
import './LogIn.css';
import NavBar from './NavBar'
import Footer from './Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class LogIn extends Component {
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

class Content extends Component {
  render() {
    return (
     <div>
       
        {/*  هناا اكتب الكود لتسجيل الدخول  */} 

     </div>  
        
    );
  }
}



export default LogIn;
