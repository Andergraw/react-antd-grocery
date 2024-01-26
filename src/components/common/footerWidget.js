import { Col, Row, List, Avatar, Tag, Space } from "antd";
const featuredProducts = [
  {
    image: require("../../assets/images/img-footer1.jpg"),
    title: "Kelloggs Crunchy Nut Hazelnut",
    cost: "£2.50",
    link: "https://www.google.com/",
  },
  {
    image: require("../../assets/images/img-footer2.jpg"),
    title: "Branston Baked Beans in a Rich",
    cost: "£3.50",
    link: "https://www.google.com/",
  },
  {
    image: require("../../assets/images/img-footer3.jpg"),
    title: "Breeze Toilet Tissue Soft White 24 Roll",
    cost: "£2.50",
    link: "https://www.google.com/",
  },
];

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
function FooterWidget() {
  return (
    <div className="footerWidget">
      <div className="container">
        <Row gutter={24}>
          {/*featured*/}
          <Col md={6}>
            <h3>Featured products</h3>
            <List
              itemLayout="horizontal"
              dataSource={featuredProducts}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.image} />}
                    title={<a href={item.link}>{item.title}</a>}
                    description={item.cost}
                  />
                </List.Item>
              )}
            />
          </Col>

          {/*top rated*/}
          <Col md={6}>
            <h3>Top rated</h3>
            <List
              itemLayout="horizontal"
              dataSource={featuredProducts}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.image} />}
                    title={<a href={item.link}>{item.title}</a>}
                    description={item.cost}
                  />
                </List.Item>
              )}
            />
          </Col>
          {/*tags*/}
          <Col md={6}>
            <h3>Top rated</h3>
            <div className="tags">
              <Space size={[0, 8]} wrap>
                <Tag>Frozen</Tag>
                <Tag>Kitchen</Tag>

                <Tag closable>Drinks</Tag>
                <Tag closable>Beer & Wine</Tag>
                <Tag>Chocolates</Tag>
              </Space>
            </div>
          </Col>
          {/*recent posts*/}
          <Col md={6}>
            <h3>Recent posts</h3>
            <List
              size="small"
              className="recentPost"
              dataSource={data}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FooterWidget;
