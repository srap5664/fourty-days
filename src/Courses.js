import React, { Component } from 'react';
import dev from './dev.jpg';
import analyst from './analyst.jpg';
import test from './test.jpg';
import './Courses.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import details from './details';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
//Anchor tags shoudl be removed and replaced with NavLinks
class Courses extends Component{
  render(){
    return(
         <HashRouter>
           
              <div className="container">
                  
<h2>الدورات التدريبية</h2>

 <div className="container2">
<div className="row">


  <div className="column"><h3>

<div className="polaroid">
<a href="#">

  <img src={test} alt="test"></img></a>
  <div className="container">
   <a><NavLink to="/details">مسار المختبر</NavLink></a>
  </div> 

</div>

  </h3></div>



    <div className="column"><h3>
<div className="polaroid">

  <img src={analyst} alt="analyst"></img>
  <div className="container">
 
 <a><NavLink to="/details">مسار المحلل</NavLink></a>
  </div>
</div>

  </h3></div>

  

  <div className="column"><h3>
<div className="polaroid">

  <img src={dev} alt="dev"></img>
  <div className="container">
  <a><NavLink to="/details">مسار المطور</NavLink></a>
  </div>
</div>

  </h3></div>


</div>

               </div>   

<div className="content">
              
                    <Route path="/details" component={details}/>
                  </div>

              </div>
              </HashRouter> 
    );
  }
}



export default Courses;
