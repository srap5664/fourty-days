import React, { Component } from 'react';
import logo from './logo.png';
import './NavBar.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class NavBar extends Component{
    render(){
      return(
             <div className="container">
                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">مستخدم جديد</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">تسجيل الدخول</a>
                            </li>
                       </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#"> الملف الشخصي <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">البرامج التدريبية</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">الصفحة الرئيسية</a>
                            </li>
                        </ul>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#"><img className="logo_img" src={logo}></img></a>
                </nav>
            </div>
      );
    }
  }


export default NavBar;