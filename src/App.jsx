import "./style/variables.css";
import "./style/reset.css";
import "./Style.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Aside from "./components/Aside/Aside";

import useDevice from "./functions/device";

function App() {
  const device = useDevice();

  return (
    <>
      <Header device={device}/>
      <Content device={device}>
        <Aside device={device}/>

      </Content>
    </>
  );
}

export default App;
