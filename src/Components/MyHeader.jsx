import React,{useContext} from "react";
import PageContext from '../context';
import { Menu } from "antd";
import Login from "./Form/Login";
import Home from "./Home/Home";
import Helpdesk from "./Helpdesk";
import About from "./About";
//import Header from 'antd'; // Does not work

function MyHeader(props) {
  const pageContextual = useContext(PageContext);

  function homeLoader() {
    pageContextual.updatePage(<Home />);
   }

  function loginLoader() {
    pageContextual.updatePage(<Login />);
    pageContextual.updateFlag("Login");
  }

  function helpdeskLoader() {
   pageContextual.updatePage(<Helpdesk />);
  }

  function aboutLoader() {

    pageContextual.updatePage(<About />);
  }

  return (
    <>
    {console.log(pageContextual.flag)}
      <Menu theme="dark" mode="horizontal" >
      {/* defaultSelectedKeys={[" "]} */}
        <div className="logo" />
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
        {pageContextual.flag}
        </Menu.Item>
      </Menu>
    </>
  );
 
}

export default MyHeader;
