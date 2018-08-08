import React, { Component } from 'react';
import './Profile.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Profile extends Component {
  render() {
    return (     
   <form action="">
     <div className="form-group row">
      <label for="username" className="col-4 col-form-label">أسم المستخدم*</label> 
      <div className="col-8">
        <input id="username" name="username" placeholder="أسم المستخدم" className="form-control here" required="required" type="text" />
      </div>
    </div>
    <div className="form-group row">
      <label for="name" className="col-4 col-form-label">الأسم الأول</label> 
      <div className="col-8">
        <input id="name" name="name" placeholder="الأسم الأول" className="form-control here" type="text" />
      </div>
    </div>
    <div className="form-group row">
      <label for="lastname" className="col-4 col-form-label">الأسم الأخير</label> 
      <div className="col-8">
        <input id="lastname" name="lastname" placeholder="الأسم الأخير" className="form-control here" type="text"/>
      </div>
    </div>
    <div className="form-group row">
      <label for="text" className="col-4 col-form-label">الكنية*</label> 
      <div className="col-8">
        <input id="text" name="text" placeholder="الكنية" className="form-control here" required="required" type="text" />
      </div>
    </div>
    <div className="form-group row">
      <label for="email" className="col-4 col-form-label">البريد الإلكتروني*</label> 
      <div className="col-8">
        <input id="email" name="email" placeholder="البريد الإلكتروني" className="form-control here" required="required" type="text" />
      </div>
    </div>
    <div className="form-group row">
      <label for="website" className="col-4 col-form-label">الموقع</label> 
      <div className="col-8">
        <input id="website" name="website" placeholder="الموقع" className="form-control here" type="text" />
      </div>
    </div>
    <div className="form-group row">
      <label for="publicinfo" className="col-4 col-form-label">معلومات عامة</label> 
      <div className="col-8">
        <textarea id="publicinfo" name="publicinfo" cols="40" rows="4" className="form-control"></textarea>
      </div>
    </div>
    <div className="form-group row">
      <label for="newpass" className="col-4 col-form-label">كلمة مرور جديدة</label> 
      <div className="col-8">
        <input id="newpass" name="newpass" placeholder="كلمة مرور جديدة" className="form-control here" type="text" />
      </div>
    </div> 
    <div className="form-group row">
      <div className="offset-4 col-8">
        <button name="submit" type="submit" className="btn btn-primary">تحديث الصفحة الشخصيه</button>
      </div>
    </div>
   </form>
        
    );
  }
}



export default Profile;
