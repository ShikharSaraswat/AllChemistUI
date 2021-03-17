import React, { useContext, useEffect, useState }from 'react';
import { Form, Input,  Button } from 'antd';
import '../Hospital/HospitalPage.css';
import context from '../../context';
import PharmacyHistory from './PharmacyHistory';

const PharmacyPage = (props) =>{
    const pageContext = useContext(context);
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
        };

        function viewHistory() {
            pageContext.updatePage(<PharmacyHistory />);
           }

    return(
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
              <Button type="primary" onClick={viewHistory}>
                View Prescription History
              </Button>
            </Form.Item>
          </Form>
          </div>
    )



}



export default PharmacyPage;