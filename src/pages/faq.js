import React from "react";
import { Collapse } from "antd";
function AppFaq() {
  const text =
    "Duo ea legimus legendos. Iusto aliquando quo in. Novum tritani ei pro, solum discere duo ad. Te mea dicant omnium, quem ornatus scribentur te his. Vis ei probatus efficiantur, virtute mentitum qui eu. Ex audiam audire nam, nec et iusto inermis. Tota ceteros definitiones ei vel, ad eos velit congue fabulas, adhuc urbanitas ex has. Modus labore cum ne, cu sea antiopam complectitur, persius necessitatibus at ius. Ut sed oblique intellegebat, nonumes voluptua constituto sed te. Eum idque falli fierent in. Utamur prodesset mei et.";
  const items = [
    {
      key: "1",
      label: "Delivery and collection information",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "What do I need to know about ordering online?",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "Returns and refunds",
      children: <p>{text}</p>,
    },
    {
      key: "4",
      label: "Managing my account",
      children: <p>{text}</p>,
    },
    {
      key: "5",
      label: "Technical issues",
      children: <p>{text}</p>,
    },
    {
      key: "6",
      label: "Terms and conditions",
      children: <p>{text}</p>,
    },
  ];
  return (
    <div className="block faqPage">
      <div className="container">
        <h2>F.A.Q.</h2>
        <Collapse items={items} accordion />
      </div>
    </div>
  );
}
export default AppFaq;
