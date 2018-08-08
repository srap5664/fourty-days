import React, { Component } from 'react';
import details from './details';
import './Courses.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import analyst from './analyst.jpg';
import dev from './dev.jpg'
import test from './test.jpg';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
class Courses extends Component {
  render() {
    return (
     <div>
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

     </div>  
    );
  }
}



export default Courses;
