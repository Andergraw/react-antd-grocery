import { FloatButton } from "antd";
import payment from "../../assets/images/payment.png";
function FooterCopyright() {
  return (
    <div className="footerCopyright">
      <div className="container">
        <div className="copyright">DIGO ©{new Date().getFullYear()}</div>
        <div className="toTop">
          <img src={payment} alt="payment" />
        </div>
      </div>
      <FloatButton.BackTop />
    </div>
  );
}
export default FooterCopyright;
