import React, { useContext, useEffect, useState } from "react";
import { Form, Input,Button } from 'antd';
import ApiService from "../../Service/ApiService";
import context from '../../context';
import AdminPage from "./AdminPage";


const HospitalRegistration = () => {
  const pageContext = useContext(context);
  const[check,setCheck]= useState(false)
  const[hospital,setHospital]=useState({
    "id": "",
    "name": "",
    "password": "",
    "email":""
  })

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const register = () => {
    
    console.log(hospital)
    setCheck(true)
  }

  useEffect(() => {
    if(check){
      ApiService.registerHospital(hospital,pageContext.token)
      .then(res => alert("Hospital registered successfully"),
        pageContext.updatePage(<AdminPage />)
      )
      .catch( error => alert("Hospital could not be added, try again."))
    }
  },[check])


  const changeHandler = (e) => {
      const value = e.target.value;
      setHospital({
        ...hospital,[e.target.name] : value
      })
}

const validateform = () => { 
  var name =  document.getElementById('name');

  var password =  document.getElementById('password');

  var email =  document.getElementById('email');

  if ((name.value.length>20) || (name.value.length<3)) { 
      window.alert("Please enter your name,Size must be less than 20 characters.");
      name.focus(); 
      return false; 
  }

  var emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

  if (email.value === "") { 
          window.alert("Please enter a valid e-mail address."); 
          email.focus(); 
          return false; 
  }else if(!(email.value.match(emailRegex))){
    window.alert("Please enter a valid e-mail address."); 
    return false;
  }

  var passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{8,}$/ ;

  if (password.value === "") { 
          window.alert("Please enter password.");
          password.focus(); 
          return false; 
  }else if(!(password.value.match(passwordRegex))){
    window.alert('Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters');
    return false;
  }

   register();
}
  
  return (
  <div className="box">
     <h1 style={{ alignContent: 'center' }}> Register Hospital </h1>
      <Form {...layout} name="nest-messages"  >
     
        <Form.Item name='username' label="username"  >
          <Input id="name" className='pcm' name='name' onChange={changeHandler} />
        </Form.Item>
        <Form.Item name='Email' label="Email" >
          <Input id="email" className='pcm' name='email' onChange={changeHandler} />
        </Form.Item>
        <Form.Item name='password' label="password"  >
          <Input id="password" className='pcm' name='password' type="password" onChange={changeHandler} />
        </Form.Item>
        <Button type="primary" onClick={validateform}>
            Register
              </Button>
      </Form>
      </div>
  
  )
}
export default HospitalRegistration;