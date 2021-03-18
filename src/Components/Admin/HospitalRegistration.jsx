import React, { useContext, useEffect, useState } from "react";
import { Form, Input, InputNumber, Button } from 'antd';
import ApiService from "../../Service/ApiService";
import context from '../../context';


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
      .then(res => console.log(res.data))
      .catch( error => console.log(error))
    }
  },[check])


  const changeHandler = (e) => {
      const value = e.target.value;
      setHospital({
        ...hospital,[e.target.name] : value
      })
  }
  
  return (
  <div className="box">
     <h1 style={{ alignContent: 'center' }}> Register Hospital </h1>
      <Form {...layout} name="nest-messages"  >
     
        <Form.Item name='username' label="username"  >
          <Input className='pcm' name='name' onChange={changeHandler} />
        </Form.Item>
        <Form.Item name='Email' label="Email" >
          <Input className='pcm' name='email' onChange={changeHandler} />
        </Form.Item>
        <Form.Item name='password' label="password"  >
          <Input className='pcm' name='password' type="password" onChange={changeHandler} />
        </Form.Item>
        <Button type="primary" onClick={register}>
            Register
              </Button>
      </Form>
      </div>
  
  )
}
export default HospitalRegistration;