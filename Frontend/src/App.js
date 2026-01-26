import "./style/reset.css"
import "./style/variables.css"
import Header from "./Components/Header/Header";
import useIsMobile from "./functions/iseMobile";
import { Routes,Route } from "react-router-dom"


export default function App() {
  const isMobile = useIsMobile();
  return (
    <>
      <Header/>
      <div>
        <Routes>
          <Route path="/" element={<h1>Accueil</h1>} />

          <Route path="/rules" element={<h1>Règles</h1>} />
          <Route path="/classes" element={<h1>Classes</h1>} />
          <Route path="/races" element={<h1>Races</h1>} />

          <Route path="/races/humains" element={<h1>Humains</h1>} />
          <Route path="/races/drakeides" element={<h1>Drakéides</h1>} />
          <Route path="/races/elfes" element={<h1>Elfes</h1>} />
          <Route path="/races/fizzarains" element={<h1>Fizzarains</h1>} />

          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </>
  );
}
