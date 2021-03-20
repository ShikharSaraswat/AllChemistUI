import React, { useContext}from 'react';
import { Form, Input,  Button } from 'antd';
import './HospitalPage.css';
import context from '../../context';
import HospitalHistory from '../HospitalHistory';
import AddPrescription from "../Hospital/AddPrescription";
import AddPatient from '../Patient/AddPatient';
import PageContext from '../../context';
import Login from "../Form/Login";

const HospitalPage = (props) => {
  const userContext = useContext(context);
    const pageContext = useContext(context);
    const pageContextual = useContext(PageContext);
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
          pageContext.updatePage(<AddPrescription />);
      }
        function viewHistory() {
         pageContext.updatePage(<HospitalHistory />);
        }

        const logout = () => {
          userContext.updateUser({});
          userContext.updateToken("");
          userContext.updatePage(<Login />);
          pageContextual.updateFlag("Login");
        
        }
      
        return (
          <div className='box' >
              
          <Form {...layout} name="nest-messages"  >
            
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
            
              <Button className="buttonCard" type="primary" onClick={addPatients}>
                Add Patients
              </Button>
             
              <Button className="buttonCard" type="primary" onClick={viewHistory}>
                View Prescription
              </Button>
              <Button className="buttonCard" type="primary" onClick={addPrescription}>
                Add Prescription
              </Button>
              <br/>
              <Button className="buttonCard" type="primary" onClick={logout}>
                 Log Out
              </Button>
            
            </Form.Item>
          </Form>
          </div>
        );
      };



export default HospitalPage;