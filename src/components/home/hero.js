import { Col, Row, Carousel } from "antd";
import banner1 from "../../assets/images/banner-img1.jpg";
import banner2 from "../../assets/images/banner-img2.jpg";
import banner3 from "../../assets/images/banner-img3.jpg";
function Hero() {
  return (
    <div className="heroBlock">
      <Row gutter={24}>
        {/*Carousel */}
        <Col lg={18}>
          <Carousel autoplay>
            <div>
              <img src={banner1} alt="Banner 1" />
            </div>
            <div>
              <img src={banner2} alt="Banner 2" />
            </div>
            <div>
              <img src={banner3} alt="Banner 3" />
            </div>
          </Carousel>
        </Col>
        {/*Carousel */}
        <Col lg={6}>
          <div className="heroBlocks">
            <div className="holder">
              <div className="icon">
                <i className="fa-solid fa-truck"></i>
              </div>
              <h3>Free Shipping & Return</h3>
              <p>Free shipping on orders over £20</p>
            </div>
            <div className="holder">
              <div className="icon">
                <i class="fa-solid fa-sack-dollar"></i>
              </div>
              <h3>Money Back Guarantee</h3>
              <p>100% money back guarantee</p>
            </div>
            <div className="holder">
              <div className="icon">
                <i class="fa-solid fa-headset"></i>
              </div>
              <h3>Online Support 24/7</h3>
              <p>Excepteur sint occaecat cupidatat</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Hero;
