import "./style/reset.css"
import "./style/variables.css"
import Header from "./Components/Header/Header";
import useIsMobile from "./functions/iseMobile";
import { Routes,Route } from "react-router-dom"


export default function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<h1>Accueil</h1>} />

          <Route path="/rules" element={<h1>Règles</h1>} />

          {/* ===== CLASSES ===== */}
          <Route path="/classes" element={<h1>Classes</h1>} />
          <Route path="/classes/guerrier" element={<h1>Le Guerrier</h1>} />
          <Route path="/classes/lamesombre" element={<h1>Le Lamesombre</h1>} />
          <Route path="/classes/chasseur" element={<h1>Le Chasseur</h1>} />
          <Route path="/classes/incarne" element={<h1>L'Incarné</h1>} />
          <Route path="/classes/profanateur" element={<h1>Le Profanateur</h1>} />
          <Route path="/classes/artificier" element={<h1>L'artificier</h1>} />
          <Route path="/classes/artiste-martiale" element={<h1>L'artiste martiale</h1>} />
          <Route path="/classes/mage" element={<h1>Le mage</h1>} />
          <Route path="/classes/barde" element={<h1>Le barde</h1>} />
          <Route path="/classes/clerc" element={<h1>Le clerc</h1>} />

          {/* ===== RACES ===== */}
          <Route path="/races" element={<h1>Races</h1>} />
          <Route path="/races/humains" element={<h1>Humains</h1>} />
          <Route path="/races/drakeides" element={<h1>Drakéides</h1>} />
          <Route path="/races/elfes" element={<h1>Elfes</h1>} />
          <Route path="/races/fizzarains" element={<h1>Fizzarains</h1>} />
          <Route path="/races/nains" element={<h1>Nains</h1>} />
          <Route path="/races/orc" element={<h1>Orc</h1>} />
          <Route path="/races/tieffelins" element={<h1>Tieffelins</h1>} />
          <Route path="/races/goliath" element={<h1>Goliath</h1>} />

          {/* ===== AUTRES ===== */}
          <Route path="/objets" element={<h1>Objets</h1>} />
          <Route path="/atlas" element={<h1>Atlas</h1>} />
          <Route path="/outils" element={<h1>Outils</h1>} />
          <Route path="/settings" element={<h1>Paramètres</h1>} />

          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </>
  );
}
