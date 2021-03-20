import React, { useContext} from 'react';
import { Form, Input, Button } from 'antd';
import './Pharmacy.css';
import PharmacyHistory from './PharmacyHistory';
import Login from "../Form/Login";
import context from "../../context";
import PageContext from '../../context';


const PharmacyPage = (props) => {
  const userContext = useContext(context);
  const pageContextual = useContext(PageContext);
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  function viewHistory() {
    userContext.updatePage(<PharmacyHistory />);
  }

  const logout = () => {
    //alert(JSON.stringify(userContext.user));
    userContext.updateUser({});
    userContext.updateToken("");
    userContext.updatePage(<Login />);
    pageContextual.updateFlag("Login");
  }

  return (
    <div className='box' >
      <Form {...layout} name="nest-messages"  >
        <h1 style={{ alignItems: 'center' }}>"WELCOME {props.user.username} "</h1>
        <Form.Item name='ID' label="ID" >
          <Input className='pcm' disabled value={props.user.roleId} placeholder={props.user.roleId} />
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
          <Input className='pcm' disabled placeholder={props.user.email} value={props.user.email} />
        </Form.Item>





        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <div>
            <Button className="buttonCard" type="primary" onClick={viewHistory}>
              View Prescription History
              </Button>
            <Button className="buttonCard" type="primary" onClick={logout}>
              Log out
              </Button>
          </div>

        </Form.Item>
      </Form>
          
    </div>
  )



}



export default PharmacyPage;