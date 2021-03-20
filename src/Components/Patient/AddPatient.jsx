import React, { useContext, useEffect, useState } from 'react';
import { Form, Input,Button } from 'antd';
import '../Hospital/HospitalPage.css';
import ApiService from '../../Service/ApiService';
import context from '../../context';
import HospitalHome from '../Hospital/HospitalHome';

const AddPatient = () => {

  const pageContext = useContext(context);
  const [marker, setMarker] = useState(false)
  const [patient, setPatient] = useState({
    "id": "",
    "name": "",
    "password": "",
    "email": "",
    "height": "",
    "weight": "",
    "gender": "",
    "bloodGroup": "",
    "address": "",
    "dateOfBirth": ""
  })


  const changeHandler = (e) => {
    const value = e.target.value;
    setPatient({
      ...patient, [e.target.name]: value
    });
  }


  const registerPatient = () => {
    console.log(patient)
        setMarker(true)
  }

  const validateForm = () => { 
    var name =  document.getElementById('name');

    var password =  document.getElementById('password');

    var email =  document.getElementById('email');

    var dob = document.getElementById("date");

    var height = document.getElementById('height');

    var weight = document.getElementById('weight');

    var address = document.getElementById('address');

    var bg = document.getElementById('bg');

    var gender = document.getElementById('gender');


    if ((name.value.length>20) || (name.value.length<3)) { 
      window.alert("Please enter your name,Size must be less than 20 characters.");
      name.focus(); 
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


    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.value === "") { 
            window.alert("Please enter a valid e-mail address."); 
            email.focus(); 
            return false; 
    }else if(!(email.value.match(emailRegex))){
      window.alert("Please enter a valid e-mail address."); 
      return false;
    }

   // var currentDate = new Date();
   var dropdt = new Date();
   var pickdt = new Date(document.getElementById("date").value);
   const num =  parseInt((dropdt - pickdt) / (24 * 3600 * 1000));
    if(num<0){
      window.alert("Please select an earlier date.");
      dob.focus();
      return false;
    }

    if (bg.selectedIndex < 1) { 
      alert("Please select Blood Group."); 
      bg.focus(); 
      return false; 
    }

    if (height.value === "") { 
            window.alert( 
              "Please enter a height."); 
            height.focus(); 
            return false; 
    }

    if (weight.value === "") { 
            window.alert( 
              "Please enter weight."); 
            weight.focus(); 
            return false; 
    } 

    if (gender.selectedIndex < 1 ) { 
      alert("Please select gender."); 
      gender.focus(); 
      return false;
    } 

    if (address.value ==="") { 
        window.alert("Please enter your address."); 
        address.focus(); 
        return false; 
    }

    registerPatient();
  }

  useEffect(() => {
    if (marker) {
      ApiService.addPatient(patient, pageContext.token).then(res =>
        alert("Patient added successfully... with ID : "+res.data),
        pageContext.updatePage(<HospitalHome />)
      ).catch(error =>
        console.log(error)
       // alert("Patient could not be added, try again")
      )
    }
  }, [marker])

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };



  return (
    <div className='box' >
      <h1 style={{ alignContent: 'center' }}> Add Patient </h1>
      <Form {...layout} name="nest-messages"  >
        <Form.Item name='Username' label="Name">
          <Input id="name" className='pcm' name='name' onChange={changeHandler} />
        </Form.Item>
        <Form.Item name='password' label="Password" >
          <Input id="password" type='password' className='pcm' name='password' onChange={changeHandler} />
        </Form.Item>
        {/* <Form.Item  label="ID" >
            <Input type='text' name='patientId' className='pcm' value = {presc.patientId} onChange={changeHandler} />
          </Form.Item> */}
        <Form.Item
          name='Email'
          label="Email"
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input id="email" className='pcm' name='email' onChange={changeHandler} />
        </Form.Item>
        <Form.Item
          name='dateOfBirth'
          label="DOB"
        >
          <Input id="date" type='date' name='dateOfBirth' className='pcm' onChange={changeHandler} />
        </Form.Item>
        <Form.Item name='bloodGroup' label="BloodGroup" >
          <select id="bg" className='pcm' name='bloodGroup' onChange={changeHandler} >
            <option value="default" defaultValue>Select BloodGroup</option>
            <option value="A_POSITIVE" >A+</option>
            <option value="A_NEGATIVE">A-</option>
            <option value="B_POSITIVE">B+</option>
            <option value="B_NEGATIVE">B-</option>
            <option value="AB_POSITIVE">AB+</option>
            <option value="AB_NEGATIVE">AB-</option>
            <option value="O_POSITIVE">O+</option>
            <option value="O_NEGATIVE">O-</option>
          </select>
        </Form.Item>
        <Form.Item name='height' label="Height" >
          <Input id="height" className='pcm' name='height' onChange={changeHandler} />
        </Form.Item>
        <Form.Item name='weight' label="Weight" >
          <Input id="weight" className='pcm' name='weight' onChange={changeHandler} />
        </Form.Item>
        <Form.Item name='gender' label="Gender" >
          <select id="gender" className='pcm' name='gender' onChange={changeHandler} >
            <option value="default" defaultValue>Select Gender</option>
            <option value="MALE" >Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </select>
        </Form.Item>
        <Form.Item label="Address" >
          <Input.TextArea id="address" className='pcm' name='address' onChange={changeHandler} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" onClick={validateForm} >
            Add Patient
                </Button>
        </Form.Item>
      </Form>
    </div>
  )


}




export default AddPatient;