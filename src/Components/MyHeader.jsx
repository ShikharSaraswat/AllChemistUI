import React,{useContext} from "react";
import PageContext from '../context';
import { Menu } from "antd";
import Login from "./Form/Login";
import Home from "./Home/Home";
import Helpdesk from "./Helpdesk";
import About from "./About";
import logo from "./LOGO.jpg"
import PatientHome from "../Components/Patient/PatientHome";
import PharmacyHome from '../Components/Pharmacy/PharmacyHome';
import HospitalHome from '../Components/Hospital/HospitalHome';
import { useState } from "react";
import AdminPage from './Admin/AdminPage';
//import Header from 'antd'; // Does not work

const MyHeader = (props) => {
  const pageContextual = useContext(PageContext);
  // const [select,setSelect] = useState();
  
  function homeLoader() {
   pageContextual.updatePage(<Home />);
   }

  function loginLoader() {
    

  // const homeLoader = () => {
  //   pageContextual.updatePage(<Home />);
  //  }

  // const loginLoader = () => {
   
    if(pageContextual.flag==="patient"){
  
      pageContextual.updatePage(<PatientHome />);
    }
    if(pageContextual.flag==="hospital"){
      
      pageContextual.updatePage(<HospitalHome />);
    }
    if(pageContextual.flag==="pharmacy"){
     
      pageContextual.updatePage(<PharmacyHome />);
    }
    if(pageContextual.flag==="admin"){
      alert(pageContextual.flag);
      pageContextual.updatePage(<AdminPage />);
    }
    else if(pageContextual.flag==="Login"){
      pageContextual.updatePage(<Login />); 
    }
  }

  const helpdeskLoader = () => {
   pageContextual.updatePage(<Helpdesk />);
  }

  function aboutLoader() {
    pageContextual.updatePage(<About />);
  }

  return (
    <>
    {console.log(pageContextual.flag)}
      <Menu theme="dark" mode="horizontal"  >
      {/* defaultSelectedKeys={[" "]} */}
      {/* selectedKeys={"Login" === pageContextual.highlight ? ['4'] : null} */}
      
		<img src={logo} width="150" height="64" alt="logo" style={{float:"left", opacity: 0.98}}/>
       <Menu.Item/> 
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
