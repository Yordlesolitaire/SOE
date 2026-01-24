import "./style/reset.css"
import "./style/variables.css"
import Header from "./Components/Header/Header";
import useIsMobile from "./functions/iseMobile";
import Nav from "./Components/Nav/Nav";
export default function App() {
  const isMobile = useIsMobile();
  return (
    <>
      <Header/>
      <div className="content">
        <Nav/>
      </div>
    </>
  );
}
