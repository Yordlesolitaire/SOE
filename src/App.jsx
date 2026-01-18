import "./style/variables.css";
import "./style/reset.css";
import "./Style.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Aside from "./components/Aside/Aside";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import useDevice from "./functions/device";

function App() {
  const device = useDevice();

  return (
    <>
      <Header device={device}/>
      <Content device={device}>
        <Aside device={device}/>
          <Routes>
            <Route path="/accueil" element={<h1>Accueil</h1>} />
            <Route path="/regles" element={<h1>Règles</h1>} />

            <Route path="/classes" element={<h1>Classes</h1>} />
            <Route path="/classes/guerrier" element={<h1>Guerrier</h1>} />
            <Route path="/classes/lamesombre" element={<h1>Lamesombre</h1>} />
            <Route path="/classes/chasseur" element={<h1>Chasseur</h1>} />
            <Route path="/classes/incarne" element={<h1>L’Incarné</h1>} />
            <Route path="/classes/profanateur" element={<h1>Profanateur</h1>} />
            <Route path="/classes/artificier" element={<h1>Artificier</h1>} />
            <Route path="/classes/artiste-martial" element={<h1>Artiste martial</h1>} />
            <Route path="/classes/mage" element={<h1>Mage</h1>} />
            <Route path="/classes/barde" element={<h1>Barde</h1>} />
            <Route path="/classes/clerc" element={<h1>Clerc</h1>} />

            <Route path="/races" element={<h1>Races</h1>} />
            <Route path="/races/fizzarains" element={<h1>Fizzarains</h1>} />
            <Route path="/races/goliath" element={<h1>Goliath</h1>} />
            <Route path="/races/nains" element={<h1>Nains</h1>} />
            <Route path="/races/elfes" element={<h1>Elfes</h1>} />
            <Route path="/races/humains" element={<h1>Humains</h1>} />
            <Route path="/races/orcs" element={<h1>Orcs</h1>} />
            <Route path="/races/drakeides" element={<h1>Drakéides</h1>} />
            <Route path="/races/tieffelin" element={<h1>Tieffelin</h1>} />

            <Route path="/objects" element={<h1>Objets</h1>} />
            <Route path="/quetes" element={<h1>Quêtes</h1>} />
            <Route path="/codex" element={<h1>Codex</h1>} />
            <Route path="/univers" element={<h1>Univers</h1>} />
            <Route path="/historique" element={<h1>Historique</h1>} />
            <Route path="/outils" element={<h1>Outils</h1>} />
            <Route path="/settings" element={<h1>Paramètres</h1>} />
          </Routes>
      </Content>
    </>
  );
}

export default App;
