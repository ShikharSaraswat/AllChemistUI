import React from "react";
import {Menu} from 'antd';
import Login from "./Form/Login"
import Home from "./Home/Home";
import Helpdesk from "./Helpdesk";
import About from "./About";
//import Header from 'antd'; // Does not work

function MyHeader(props){
    
  function homeLoader(){
      const page = props.sendState;
      const setter = props.setState;
      setter(<Home />);
  
    }

    function loginLoader(){
      const page = props.sendState;
      const setter = props.setState;
      setter(<Login />);
    
    }

    function helpdeskLoader(){
      const page = props.sendState;
      const setter = props.setState;
      setter(<Helpdesk />);
    
    }

    function aboutLoader(){
      const page = props.sendState;
      const setter = props.setState;
      setter(<About />);
    
    }

    

    return(
   
    <>
       
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <div className="logo" />
      <Menu.Item key="1" onClick={homeLoader}>Home</Menu.Item>
      <Menu.Item key="2" onClick={helpdeskLoader}>Helpdesk</Menu.Item>
      <Menu.Item key="3" onClick={aboutLoader}>About</Menu.Item>
      <Menu.Item key="4" onClick={loginLoader}>Login</Menu.Item>
    </Menu>
    
  </>
  
      
    );
}

export default MyHeader;

