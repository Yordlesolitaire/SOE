import "./style/variables.css";
import "./style/reset.css";
import "./Style.css";
import Header from "./components/Header/Header";
import useDevice from "./functions/device";

function App() {
  const device = useDevice();

  return (
    <>
      <Header device={device}/>
    </>
  );
}

export default App;
