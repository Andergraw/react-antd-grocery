import { Tabs } from "antd";
import aboutBanner from "../assets/images/aboutBanner.jpg";
const items = [
  {
    key: "1",
    label: "About",
    children: (
      <>
        <p>
          Vim eu fabellas ocurreret mnesarchum. Est fugit labore cu, est
          honestatis signiferumque an. Facilisis complectitur ei sit, eu alterum
          lucilius nam. Sea ne tacimates platonem qualisque
        </p>
        <p>
          At duo commodo urbanitas, verterem delicata omittantur per an. Eum
          stet mucius legimus cu, vis ei iisque vocibus. Ea per quot electram,
          eam vocent efficiendi eu. Mel eripuit nominati antiopam ex, clita
          insolens mandamus eu usu.
        </p>
        <p>
          Prodesset delicatissimi eu sit. Eu menandri elaboraret per, per et
          rebum nulla, ei pri singulis delicatissimi. Cu vel ridens fabellas
          senserit, cu quod vocibus iracundia qui. Usu nominavi democritum in,
          qui ea fabellas pertinacia suscipiantur, ut mei eros minim prodesset.
          Eos ad verear numquam volumus, dico quodsi corrumpit duo an. Pro illud
          nobis consectetuer ex, eos ea reque debitis scripserit. Aliquip
          percipitur mel eu, ei ius nibh detracto, nihil legendos gloriatur ei
          sed.
        </p>
      </>
    ),
  },
  {
    key: "2",
    label: "Tab 2",
    children: (
      <>
        <p>
          Vel mundi tritani suscipiantur no, pro eu molestie atomorum tractatos,
          eos vitae interesset dissentiet ad. At est paulo ullamcorper. Vix
          nulla assueverit ea, his ut eirmod deleniti oportere. Duo legendos
          eleifend cu, ei usu reformidans definitionem.
        </p>
        <p>
          Mel cu erant simul recusabo. Posse omittam vituperata no qui, virtute
          necessitatibus id per, ex stet vulputate est. Cum in mazim iusto
          numquam, perfecto salutatus interesset eum eu. Eum ad nostro
          mnesarchum, lorem volumus oportere in mei. Quidam expetendis eos ex,
          quo iudico latine no. Aliquip omnesque forensibus ex vis.
        </p>
        <p>
          Odio propriae maluisset id sit, mel simul hendrerit id, ne sea
          volutpat repudiare interpretaris. Illum salutandi cu mei, ei mundi
          commodo has, et mundi populo per. Vim id labitur maluisset, eum
          elaboraret efficiantur te. Assum recusabo lobortis ex vix, sit meis
          vulputate cu, semper vidisse ad has. Scripta nostrum an nam, vel ea
          aperiam deleniti, vocent eligendi mea te. At vide aliquid pri, vis te
          graeco electram. Vim at electram dissentiet, possim antiopam ut mei.
        </p>
      </>
    ),
  },
  {
    key: "3",
    label: "Tab 3",
    children: (
      <>
        <p>
          Vim eu fabellas ocurreret mnesarchum. Est fugit labore cu, est
          honestatis signiferumque an. Facilisis complectitur ei sit, eu alterum
          lucilius nam. Sea ne tacimates platonem qualisque.
        </p>
        <p>
          At duo commodo urbanitas, verterem delicata omittantur per an. Eum
          stet mucius legimus cu, vis ei iisque vocibus. Ea per quot electram,
          eam vocent efficiendi eu. Mel eripuit nominati antiopam ex, clita
          insolens mandamus eu usu.
        </p>
        <p>
          Prodesset delicatissimi eu sit. Eu menandri elaboraret per, per et
          rebum nulla, ei pri singulis delicatissimi. Cu vel ridens fabellas
          senserit, cu quod vocibus iracundia qui. Usu nominavi democritum in,
          qui ea fabellas pertinacia suscipiantur, ut mei eros minim prodesset.
          Eos ad verear numquam volumus, dico quodsi corrumpit duo an. Pro illud
          nobis consectetuer ex, eos ea reque debitis scripserit. Aliquip
          percipitur mel eu, ei ius nibh detracto, nihil legendos gloriatur ei
          sed.
        </p>
      </>
    ),
  },
];
function AppAbout() {
  return (
    <div className="block aboutPage">
      <div className="container">
        <h2>About</h2>
        <div className="bannerImage">
          <img src={aboutBanner} alt="banner" />
        </div>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
  );
}
export default AppAbout;
