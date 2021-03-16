import React, { useContext, useEffect, useState }from 'react';
import { Form, Input,  Button } from 'antd';
import './HospitalPage.css';
import context from '../../context';
import HospitalHistory from '../HospitalHistory';
import RegisterPatient from './RegisterPatient';
import AddPatient from '../Patient/AddPatient';

const HospitalPage = (props) => {
    const pageContext = useContext(context);
        const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
        };
        
        function addPatients(){
            pageContext.updatePage(<AddPatient />);
        }
        function addPrescription(){
          pageContext.updatePage(<RegisterPatient />);
      }
        function viewHistory() {
         pageContext.updatePage(<HospitalHistory />);
        }
      
        return (
            <div className='box' >
          <Form {...layout} name="nest-messages"  >
            <h1 style={{alignItems : 'center'}}>"WELCOME {props.user.username} "</h1>
          <Form.Item name='ID' label="ID" >
              <Input className='pcm' disabled value={props.user.roleId} placeholder={props.user.roleId}/>
            </Form.Item>
            <Form.Item name='Username' label="username"  >
              <Input className='pcm' placeholder={props.user.username} disabled value={props.user.username} />
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
              <Input className='pcm' disabled placeholder={props.user.email} value={props.user.email}/>
            </Form.Item>
           
           
            
            
            
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" onClick={addPatients}>
                Add Patients
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button type="primary" onClick={viewHistory}>
                View Prescription History
              </Button>
              <Button type="primary" onClick={addPrescription}>
                Add Prescription
              </Button>
            </Form.Item>
          </Form>
          </div>
        );
      };



export default HospitalPage;