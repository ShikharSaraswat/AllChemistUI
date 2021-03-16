import React, { useContext, useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import './HospitalPage.css';
import context from '../../context';
import ApiService from '../../Service/ApiService';
import UploadImages from '../Image/UploadImage';


const RegisterPatient = (props) => {
  const pageContext = useContext(context);
  
  const [presc, setPresc] = useState({
    "id": "",
    "patientId": " ",
    "date": new Date().toISOString().slice(0,10),
    "prescriptionFile": [],
    "status": 1
  });

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  function savePrescription() {
    window.print();
  }

  function addPrescription(){
    console.log(presc);
  }
  
  const changeHandler = (e) => {
    const value = e.target.value
    const name = e.target.name
    setPresc({
        ...presc,
        [name]: value
    });
    console.log(presc);
  };

  /*const fileHandler = (e) => {
    const reader = new FileReader()
    const value = reader.readAsBinaryString(e.target.files[0])
    const name = e.target.name
    setPresc({
        ...presc,
        [name]: value
    });
    console.log(presc);
  };*/

  ApiService.createPrescription(presc, pageContext.token).then(res => 
    alert(presc)
    ).catch((error) =>{
        console.log(error);
    });

  return (

  <div className='box' >
    <h1 style={{ alignContent: 'center' }}> Prescription </h1>
    <Form {...layout} name="nest-messages"  >
      <Form.Item name='Username' label="Name">
        <Input className='pcm' />
      </Form.Item>
      <Form.Item  label="ID" >
        <Input type='text' name='patientId' className='pcm' value = {presc.patientId} onChange={changeHandler} />
      </Form.Item>
      <Form.Item
        name='Email'
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input className='pcm' />
      </Form.Item>
      <Form.Item
        name='age'
        label="Age"
      >
        <Input type='text' className='pcm' />
      </Form.Item>
      <Form.Item name='BloodGroup' label="BloodGroup" >
        <select className='pcm'>
          <option value="A_POSITIVE" defaultValue>A+</option>
          <option value="A_NEGATIVE">A-</option>
          <option value="B_POSITIVE">B+</option>
          <option value="B_NEGATIVE">B-</option>
          <option value="AB_POSITIVE">AB+</option>
          <option value="AB_NEGATIVE">AB-</option>
          <option value="O_POSITIVE">O+</option>
          <option value="O_NEGATIVE">O-</option>
        </select>
      </Form.Item>
      <Form.Item name='description' label="Description" >
        <Input.TextArea className='pcm' />
      </Form.Item>
      <Form.Item name='bloodPressure' label="BP" >
        <Input className='pcm' />
      </Form.Item>
      <Form.Item name='prescription' label="Prescription" >
        <Input.TextArea className='pcm' />
      </Form.Item>
      <Form.Item  label="Prescription File" >
        <div className="row">
          <div className="col-8">
            <label className="btn btn-default p-0">
              <input type="file" name='prescriptionFile' accept="image/*" />
            </label>
          </div>

          <div className="col-4">
            <button
              className="btn btn-success btn-sm"
              
            >
              Upload
            </button>
          </div>
        </div>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" onClick = {savePrescription}>
          Save
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button type="primary" onClick = {addPrescription}>
          Add Prescription
              </Button>
      </Form.Item>
    </Form>
  </div>
  );
};



export default RegisterPatient;