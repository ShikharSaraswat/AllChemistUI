import React from "react";
import Home from "./Home/Home";
// import Login from "./Form/Login";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;




function BasicLayout(){

  return(
   
  <Layout className="layout">
  <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">Helpdesk</Menu.Item>
      <Menu.Item key="3">About</Menu.Item>
      <Menu.Item key="4">Login</Menu.Item>
    </Menu>
  </Header>
  <Content style={{ padding: '0 50px' }}>

    <Breadcrumb style={{ margin: '16px 0' }}>
      {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item> */}
    </Breadcrumb>
    
    <div className="site-layout-content">

    
      
      

    
   
    
    
    
    
    
    </div>
  </Content>
  <Footer style={{ textAlign: 'center' }}>AllChemist ©2021 Created by Group 25</Footer>
</Layout>);
  
}

export default BasicLayout;