import React, { useContext, useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import '../Hospital/HospitalPage.css';
import ApiService from '../../Service/ApiService';
import context from '../../context';

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

  useEffect(() => {
    if (marker) {
      ApiService.addPatient(patient, pageContext.token).then(res =>
        console.log(res.data)
      ).catch(error =>
        console.log(error)
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
          <Input className='pcm' name='name' onChange={changeHandler} />
        </Form.Item>
        <Form.Item name='password' label="Password" >
          <Input type='password' className='pcm' name='password' onChange={changeHandler} />
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
          <Input className='pcm' name='email' onChange={changeHandler} />
        </Form.Item>
        <Form.Item
          name='dateOfBirth'
          label="DOB"
        >
          <Input type='date' name='dateOfBirth' className='pcm' onChange={changeHandler} />
        </Form.Item>
        <Form.Item name='bloodGroup' label="BloodGroup" >
          <select className='pcm' name='bloodGroup' onChange={changeHandler} >
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
          <Input className='pcm' name='height' onChange={changeHandler} />
        </Form.Item>
        <Form.Item name='weight' label="Weight" >
          <Input className='pcm' name='weight' onChange={changeHandler} />
        </Form.Item>
        <Form.Item name='gender' label="Gender" >
          <select className='pcm' name='gender' onChange={changeHandler} >
            <option value="default" defaultValue>Select Gender</option>
            <option value="MALE" >Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </select>
        </Form.Item>
        <Form.Item label="Address" >
          <Input.TextArea className='pcm' name='address' onChange={changeHandler} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" onClick={registerPatient} >
            Add Prescription
                </Button>
        </Form.Item>
      </Form>
    </div>
  )


}




export default AddPatient;