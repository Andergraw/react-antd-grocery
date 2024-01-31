import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Drawer } from "antd";
import {
  MailOutlined,
  InstagramOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
function AppHeader() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="container">
      {/* topbar */}
      <div className="topBar">
        <div className="contactInfo">
          <ul>
            <li>
              <span>DIGO Lite</span>
            </li>
            <li>
              <a href="mailto:digo@productionclub.net">
                <span>
                  <MailOutlined />
                  digo@productionclub.net
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="otherInfo">
          <ul className="socialMedia">
            <li>
              <a href="https://www.instagram.com">
                <InstagramOutlined />
              </a>
            </li>
          </ul>
          <button>
            <UserOutlined />
            My account
          </button>
        </div>
      </div>
      {/* header */}
      <div className="header separator">
        <div className="logo">DIGO</div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer title="Basic Drawer" onClose={onClose} open={open}>
            <nav>
              <ul>
                <li>
                  <NavLink onClick={onClose} to="/test/grocery/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={onClose} to="/test/grocery/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={onClose} to="/test/grocery/faq">
                    F.A.Q.
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={onClose} to="/test/grocery/shop">
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={onClose} to="/test/grocery/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </Drawer>
        </div>
        <nav className="mobileHidden">
          <ul>
            <li>
              <NavLink to="/test/grocery/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/test/grocery/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/test/grocery/faq">F.A.Q.</NavLink>
            </li>
            <li>
              <NavLink to="/test/grocery/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/test/grocery/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default AppHeader;
