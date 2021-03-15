import React, { useContext, useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import './PatientHome2.css';
import context from '../../context';
import PatientHistory from '../PatientHistory';
import ApiService from '../../Service/ApiService';

const PatientHome2 = (props) => {
  const pageContext = useContext(context);
  const [history, setHistory] = useState([]);
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
 
    pageContext.updatePage(<PatientHistory val = {history} />);
  }

  useEffect(() => {
    alert(props.roleId)
    ApiService.fetchHistoryFromPatient(props.roleId, pageContext.token)
    .then(res => {
      setHistory(res.data)
    }).catch(error =>
      console.log(error)
    )
  })

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */


  return (
    <div className='box' >
      <Form {...layout} name="nest-messages"  >
        <Form.Item name='Username' label="username" value={props.patient.weight} >
          <Input className='pcm' placeholder={props.patient.name} value={props.patient.name} />
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
          <Input className='pcm' disabled placeholder={props.patient.email} value={props.patient.email} />
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
          <Input type='text' disabled className='pcm' value={props.patient.dateOfBirth} placeholder={props.patient.dateOfBirth} />
        </Form.Item>
        <Form.Item name='address' label="address" value={props.patient.weight}>
          <Input.TextArea className='pcm' value={props.patient.address} placeholder={props.patient.address} />
        </Form.Item>
        <Form.Item name='weight' label="Weight" value={props.patient.weight}>
          <Input className='pcm' value={props.patient.weight} placeholder={props.patient.weight} />
        </Form.Item>
        <Form.Item name='Height' label="Height" value={props.patient.height}>
          <Input className='pcm' type='text' value={props.patient.height} placeholder={props.patient.height} />
        </Form.Item>
        <Form.Item name='BloodGroup' label="BloodGroup" value={props.patient.bloodGroup}>
          <Input className='pcm' disabled value={props.patient.bloodGroup} placeholder={props.patient.bloodGroup} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" onClick>
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