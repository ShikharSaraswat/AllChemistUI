import React, { useContext, useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import './PatientHome2.css';
import context from '../../context';
import PatientHistory from '../PatientHistory';
import ApiService from '../../Service/ApiService';

const PatientHome2 = (props) => {
  const pageContext = useContext(context);
  const [patient,setPatient] = useState(pageContext.user);
  //   "name" : "",
  // "email": "teja@gmail.com",
  // "height":"5.7",
  // "weight":"75",
  // "gender":"MALE",
  // "bloodGroup":"A_POSITIVE",
  // "address" : "Pune",
  // "dateOfBirth" : "1990-04-01"
  
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /* eslint-disable no-template-curly-in-string */
  function viewHistory() {
 
    pageContext.updatePage(<PatientHistory  />);
  }
  function updatePatient(e) {
    const value = e.target.value;
    setPatient({
      ...patient,[e.target.name] : value
    });

    console.log(patient);

    ApiService.updatePatient(patient,pageContext.token).then(res =>
      alert("Patient Added")
    ).catch((error) =>{
      console.log(error);
    }
    );

  }
  function changeHandler() {
    
    
  }

  

  


  return (
    <div className='box' >
      <Form {...layout} name="nest-messages"  >
        <Form.Item name='Username' label="username"  >
          <Input className='pcm' name='name' onChange={changeHandler} placeholder={props.patient.name} value={props.patient.name} />
        </Form.Item>
        <Form.Item
          name='Email'
          label="Email"
          value={props.patient.email}
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input className='pcm' name='email' onChange={changeHandler} disabled placeholder={props.patient.email} value={props.patient.email} />
        </Form.Item>
        <Form.Item
          name='Date of Birth'
          label="DOB"
          value={props.patient.dateOfBirth}
          rules={[
            {
              type: 'date',
              min: 0,
              max: 99,
            },
          ]}
        >
          <Input type='text' name='dateOfBirth' disabled className='pcm' onChange={changeHandler} value={props.patient.dateOfBirth} placeholder={props.patient.dateOfBirth} />
        </Form.Item>
        <Form.Item name='address' label="address" >
          <Input.TextArea className='pcm' name='address' onChange={changeHandler} value={props.patient.address} placeholder={props.patient.address} />
        </Form.Item>
        <Form.Item name='weight' label="Weight" >
          <Input className='pcm' name='weight' onChange={changeHandler} value={props.patient.weight} placeholder={props.patient.weight} />
        </Form.Item>
        <Form.Item name='Height' label="Height" >
          <Input className='pcm' name='height' onChange={changeHandler} type='text' value={props.patient.height} placeholder={props.patient.height} />
        </Form.Item>
        <Form.Item name='bloodGroup' label="BloodGroup" >
          <Input className='pcm' name='BG' onChange={changeHandler} disabled value={props.patient.bloodGroup} placeholder={props.patient.bloodGroup} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" onClick={updatePatient}>
            Update Details
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button type="primary" onClick={viewHistory}>
            View Prescription History
              </Button>
        </Form.Item>
      </Form>
    </div>
  );
};



export default PatientHome2;