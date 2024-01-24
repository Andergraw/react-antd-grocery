import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Layout, theme } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

import AppHeader from "./components/common/header";
import AppHome from "./pages/home";
import AppAbout from "./pages/about";
import AppFaq from "./pages/faq";

import "./App.css";

const { Header, Content, Footer } = Layout;
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div className="App">
      <Layout>
        <Router>
          <Header>
            <AppHeader />
          </Header>
          <Content
            style={{
              padding: "0 48px",
            }}
          >
            <Layout>
              <Content>
                <Routes>
                  <Route path="/" element={<AppHome />}></Route>
                  <Route path="/about" element={<AppAbout />}></Route>
                  <Route path="/faq" element={<AppFaq />}></Route>
                </Routes>
              </Content>
            </Layout>
          </Content>
        </Router>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};
export default App;
