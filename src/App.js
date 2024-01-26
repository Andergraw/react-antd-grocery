import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Layout } from "antd";

import AppHeader from "./components/common/header";
import AppHome from "./pages/home";
import AppAbout from "./pages/about";
import AppFaq from "./pages/faq";
import FooterWidget from "./components/common/footerWidget";
import FooterCopyright from "./components/common/footerCopyright";

import "./App.css";

const { Header, Content, Footer } = Layout;
const App = () => {
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
        //   style={{
        //     textAlign: "center",
        //   }}
        >
          <FooterWidget />
          <FooterCopyright />
        </Footer>
      </Layout>
    </div>
  );
};
export default App;
