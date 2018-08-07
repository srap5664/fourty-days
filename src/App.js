import React, { Component } from 'react';
import coverImg from './cover.jpg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      	<div id="container" class="container container-fluid">
		       <div class="jumbotron">
            <NavBar />
            <Cover />
            <Content />
            <Footer />
          </div>
        </div>  
         
    );
  }
}

class NavBar extends Component{
  render(){
    return(
     <div className="NavBar">
       <div className="row">
        <div className="col-md-4">
           <button type="button" class="btn btn-secondary">دخول</button>
        </div>
        <div className="col-md-8">
           <button type="button" class="btn btn-secondary">الملف الشخصي</button>
           <button type="button" class="btn btn-secondary">البرامج التدريبيه</button>
           <button type="button" class="btn btn-secondary">الصفحة الشخصيه</button>
        </div>
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

class Footer extends Component{
  render(){
    return(
     <div className="Footer">
       <p id="Footer-text">جميع الحقوق محفوظه</p>
     </div>
    );
  }
}


export default App;
