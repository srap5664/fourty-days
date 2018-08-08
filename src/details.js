import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './details.css';
import banner from './banner.jpg';

class Details extends Component {
  render() {
    return (


       <div className="container">
   <img classNmae="img" src={banner} alt="banner"></img>


 

<button className="button">التحق بالمسار التدريبي</button>


<div className="corners">

<div class="row">

  <div class="column">متطلبات المسار</div>

  <div class="column">الأجندة</div>
  <div class="column">مخرجات المسار </div>
</div>



</div>
     </div>  
        
    );
  }
}



export default Details;
