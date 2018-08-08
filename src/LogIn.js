import React, { Component } from 'react';
import './LogIn.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class LogIn extends Component {
  render() {
    return (
 

<div class="main">

  <h3>تسجيل الدخول</h3>
  <div class="row">
    <div class="col-xs-6 col-sm-6 col-md-6">
      <a href="#" class="btn btn-lg btn-primary btn-block">Facebook</a>
    </div>
    <div class="col-xs-6 col-sm-6 col-md-6">
      <a href="#" class="btn btn-lg btn-info btn-block">Google</a>
    </div>
  </div>
  <div class="login-or">
    <hr class="hr-or"/>
    <span class="span-or">أو</span>
  </div>

  <form role="form">
    <div class="form-group">
      <label for="inputUsernameEmail">أسم المستخدم أو البريد الإكتروني</label>
      <input type="text" class="form-control" id="inputUsernameEmail" /> 
    </div>
    <div class="form-group">
      <a class="pull-right" href="#">نسيت كلمة المرور؟</a>
      <label for="inputPassword">كلمة المرور</label>
      <input type="password" class="form-control" id="inputPassword" />
    </div>
    <div class="checkbox pull-right">
      <label>
        <input type="checkbox" />
        تذكر كلمة المرور</label>
    </div>
    <button type="submit" class="btn btn btn-primary">
      تسجيل الدخول
    </button>
  </form>



</div>
    );
  }
}



export default LogIn;
