import React,{useContext} from "react";
import PageContext from '../context';
import "antd/dist/antd.css";
import MyHeader from "./MyHeader";
import { Layout, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;


const BasicLayout = (props) => {
   const context = useContext(PageContext);
  
  return (
    <Layout className="layout">
      <Header>
        <MyHeader  />
      </Header>

      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item> */}
        </Breadcrumb>

        <div className="site-layout-content">
          {context.page}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        AllChemist ©2021 Created by Group 25
      </Footer>
    </Layout>
  );
}

export default BasicLayout;
