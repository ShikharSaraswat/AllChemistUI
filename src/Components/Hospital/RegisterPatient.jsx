import React, { useContext, useEffect, useState }from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import './HospitalPage.css';
import context from '../../context';
import History from '../PatientHistory';
const RegisterPatient = (props) => {
    const pageContext = useContext(context);
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
         pageContext.updatePage(<History />);
      }
      
      
        return (
            
            <div className='box' >
                <h1 style={{alignContent : 'center'}}> Registration Page </h1>
          <Form {...layout} name="nest-messages"  >
            <Form.Item name='Username' label="username" value >
              <Input className='pcm'   />
            </Form.Item>
            <Form.Item name='password' label="Password" value>
              <Input type='password' className='pcm'  />
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
              <Input className='pcm'  />
            </Form.Item>
            <Form.Item
              name='Date of Birth'
              label="DOB"
              rules={[
                {
                  type: 'date',
                  min: 0,
                  max: 99,
                },
              ]}
            >
              <Input type='text'  className='pcm'    />
            </Form.Item>
            <Form.Item name='address' label="address" >
              <Input.TextArea className='pcm'   />
            </Form.Item>
            <Form.Item name='weight' label="Weight" >
              <Input className='pcm'   />
            </Form.Item>
            <Form.Item name='Height' label="Height" >
              <Input className='pcm' type='text'   />
            </Form.Item>
            <Form.Item name='BloodGroup' label="BloodGroup" >
              <Input className='pcm'   />
            </Form.Item>
            
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" onClick>
                Register
              </Button>
            </Form.Item>
          </Form>
          </div>
        );
      };



export default RegisterPatient;