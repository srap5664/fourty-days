import React, { Component } from 'react';
import './Footer.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Footer extends Component{
    render(){
      return(
       <div className="Footer">
         <p id="Footer-text">جميع الحقوق محفوظه</p>
       </div>
      );
    }
  }
  
export default Footer;