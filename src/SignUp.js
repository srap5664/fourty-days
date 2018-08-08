import React, { Component } from 'react';
import './SignUp.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class SignUp extends Component {
  render() {
    return (
      <div class="main">
              <h3>تسجيل مستخدم جديد</h3>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6">
            <a href="#" class="btn btn-lg btn-primary btn-block">Facebook</a>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6">
            <a href="#" class="btn btn-lg btn-info btn-block">Google</a>
          </div>
        </div>
       <form action="">
         <div className="form-group center">
          <label for="username" className="col-4 col-form-label">أسم المستخدم*</label>
          <div className="form-group center">
            <input id="username" name="username" placeholder="أسم المستخدم" className="form-control here" required="required" type="text" />
          </div>
        </div>
        <div className="form-group">
          <label for="name" className="col-4 col-form-label">الأسم الأول*</label>
          <div className="center">
            <input id="name" name="name" align="center" placeholder="الأسم الأول" className="form-control here" type="text" />
          </div>
        </div>
        <div className="form-group">
          <label for="lastname" className="col-4 col-form-label">الأسم الأخير</label>
          <div className="form-group">
            <input id="lastname" name="lastname" placeholder="الأسم الأخير" className="form-control here" type="text"/>
          </div>
        </div>
        <div className="form-group">
          <label for="text" className="col-4 col-form-label">الكنية*</label>
          <div className="form-group">
            <input id="text" name="text" placeholder="الكنية" className="form-control here" required="required" type="text" />
          </div>
        </div>
        <div className="form-group">
          <label for="email" className="col-4 col-form-label">البريد الإلكتروني*</label>
          <div className="form-group">
            <input id="email" name="email" placeholder="example@example.com*" className="form-control here" required="required" type="text" />
          </div>
        </div>
        <div className="form-group">
          <label for="newpass" className="col-4 col-form-label" type="password">كلمة المرور*</label>
          <div className="form-group">
            <input id="newpass" name="newpass" placeholder="يجب أن تتكون من 8 رموز" className="form-control here" type="password" />
          </div>
        </div>
        <div className="form-group">
          <label for="newpass" className="col-4 col-form-label">تأكيد لكلمة المرور* </label>
          <div className="form-group">
            <input id="newpass" type="password" name="newpass" placeholder="يجب أن تطابق كلمة المرور" className="form-control here" type="password" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group col-15">
            <button name="submit" type="submit" className="btn btn-primary" align="center" >تسجيـــل</button>
          </div>
        </div>
       </form>
     </div>

    );
  }
}



export default SignUp;
