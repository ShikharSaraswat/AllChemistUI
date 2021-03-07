import React from "react";
//import Home from "./Home/Home";
// import Login from "./Form/Login";
import 'antd/dist/antd.css';
import MyHeader from './MyHeader';
import { Layout, Breadcrumb } from 'antd';
import Login from "./Form/Login";
const { Header, Content, Footer } = Layout;




function BasicLayout() {

  const [page,setPage] = React.useState(" "); 

  return (

    <Layout className="layout">
      <Header><MyHeader setState={setPage}  sendState={page}/></Header>


      <Content style={{ padding: '0 50px' }}>

        <Breadcrumb style={{ margin: '16px 0' }}>
          {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item> */}
        </Breadcrumb>

        <div className="site-layout-content">

          {/* <Login /> */}
          <h1>{page}</h1>

        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>AllChemist ©2021 Created by Group 25</Footer>
    </Layout>);

}

export default BasicLayout;