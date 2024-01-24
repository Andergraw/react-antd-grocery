import { NavLink } from "react-router-dom";
import {
  MailOutlined,
  InstagramOutlined,
  UserOutlined,
} from "@ant-design/icons";
function AppHeader() {
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
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/faq">F.A.Q.</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default AppHeader;
