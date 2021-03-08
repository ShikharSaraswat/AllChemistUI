import React from "react";
// import Login from "./Form/Login";
import "antd/dist/antd.css";
import MyHeader from "./MyHeader";
import { Layout, Breadcrumb } from "antd";
// import Login from "./Form/Login";
// import Home from "./Home/Home";
const { Header, Content, Footer } = Layout;

function BasicLayout(props) {
  // const pageContextual = useContext(pageContext);
  // console.log(pageContextual);
  const stateSetter = props.setPage;

  // const [page, setPage] = React.useState(<Home />);
  // const pageContext=React.createContext(setPage);
  return (
    <Layout className="layout">
      <Header>
        <MyHeader stateSetter={stateSetter}  />
        {/* setState={setPage} sendState={page} */}
      </Header>

      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item> */}
        </Breadcrumb>

        <div className="site-layout-content">
          {/* <Login /> */}
          {props.page}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        AllChemist ©2021 Created by Group 25
      </Footer>
    </Layout>
  );
}

export default BasicLayout;
