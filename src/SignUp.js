import React, { Component } from 'react';
import './SignUp.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class SignUp extends Component {
  render() {
    return (
    <div className="span3 SignUp">
      <h2>Sign Up</h2>
      <form>
        <label>First Name</label>
        <input type="text" name="firstname" className="span3" />
        <label>Last Name</label>
        <input type="text" name="lastname" className="span3" />
        <label>Email Address</label>
        <input type="email" name="email" className="span3" />
        <label>Username</label>
        <input type="text" name="username" className="span3" />
        <label>Password</label>
        <input type="password" name="password" className="span3" /> 
        <label><input type="checkbox" name="terms" /> I agree with the <a href="#">Terms and Conditions</a>.</label>
        <input type="submit" value="Sign up" className="btn btn-primary pull-right" />
        <div className="clearfix"></div>
      </form>
    </div> 
        
href="#" class="btn btn-lg btn-info btn-block">Google</a>
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
