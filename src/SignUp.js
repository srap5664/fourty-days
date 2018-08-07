import React, { Component } from 'react';
import './SignUp.css';
import NavBar from './NavBar'
import Footer from './Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class SignUp extends Component {
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
       
        {/*  هناا اكتب الكود لتسجيل مستخدم جديد  */} 

     </div>  
        
    );
  }
}



export default SignUp;
