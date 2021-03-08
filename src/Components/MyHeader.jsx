import React from "react";
import { Menu } from "antd";
import Login from "./Form/Login";
import Home from "./Home/Home";
import Helpdesk from "./Helpdesk";
import About from "./About";
import logo from "./LOGO2.jpg"
//import Header from 'antd'; // Does not work

function MyHeader(props) {
 
  const stateSetter = props.stateSetter;

  function homeLoader() {
    stateSetter(<Home stateSetter={stateSetter} />);
  }

  function loginLoader() {
    
    stateSetter(<Login />);
  }

  function helpdeskLoader() {
   
    stateSetter(<Helpdesk />);
  }

  function aboutLoader() {

    stateSetter(<About />);
  }

  return (
    <>
      <Menu theme="dark" mode="horizontal" >
      {/* defaultSelectedKeys={[" "]} */}
      
		<img src={logo} width="150" height="64" alt="logo" style={{float:"left", opacity: 0.98}}/>
        <Menu.Item key="1" onClick={homeLoader}>
          Home
        </Menu.Item>
        <Menu.Item key="2" onClick={helpdeskLoader}>
          Helpdesk
        </Menu.Item>
        <Menu.Item key="3" onClick={aboutLoader}>
          About
        </Menu.Item>
        <Menu.Item key="4" onClick={loginLoader}>
          Login
        </Menu.Item>
      </Menu>
    </>
  );
}

export default MyHeader;
