import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Profile from "./Profile";
import Courses from "./Courses";



class App extends Component{
  render(){
    return(
            <HashRouter>
              <div className="container">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                              <li className="nav-item"><NavLink className="nav-link" to="/SignUp">مستخدم جديد</NavLink></li>
                              <li className="nav-item"><NavLink className="nav-link" to="/LogIn">تسجيل الدخول</NavLink></li>
                        </ul>
                          <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><NavLink className="nav-link" to="/Profile">صفحة الشخصية</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/Courses">الدورات التدريبية</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/">الصفحة الرئيسية</NavLink></li>
                          </ul>
                      </div>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <a className="navbar-brand" href="#"><img className="logo_img" src={logo}></img></a>
                  </nav>
                  <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/SignUp" component={SignUp}/>
                    <Route path="/LogIn" component={LogIn}/>
                    <Route path="/Profile" component={Profile}/>
                    <Route path="/Courses" component={Courses}/>
                  </div>
              </div>
            </HashRouter>  
    );
  }
}


class Footer extends Component{
  render(){
    return(
     <div className="container Footer">
       
     </div>
    );
  }
}

export default App;
