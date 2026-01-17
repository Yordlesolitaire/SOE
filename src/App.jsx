import { Header } from "./components/Header/Header";
import { Route,Routes } from "react-router-dom";
import Aside from "./components/Aside/Aside";
import "./Style.css"
import "./style/reset.css";
import "./style/variables.css";

//import { useState } from "react";

function App() {
    //const [asideOpen, setAsideOpen] = useState(false);

    return (
        <>
            <Header/>
            <div className="content">
                <Aside/>
                <Routes>
                    {/* Accueil */}
                    <Route path="/" element={<h1>Accueil</h1>} />

                    {/* Classes */}
                    <Route path="/classes" element={<h1>Classes</h1>} />
                    <Route path="/classes/guerrier" element={<h1>Guerrier</h1>} />
                    <Route path="/classes/chasseur" element={<h1>Chasseur</h1>} />
                    <Route path="/classes/incarne" element={<h1>Incarné</h1>} />
                    <Route path="/classes/lamesombre" element={<h1>Lamesombre</h1>} />
                    <Route path="/classes/profanateur" element={<h1>Profanateur</h1>} />
                    <Route path="/classes/artiste-martial" element={<h1>Artiste Martial</h1>} />
                    <Route path="/classes/artificier" element={<h1>Artificier</h1>} />
                    <Route path="/classes/mage" element={<h1>Mage</h1>} />
                    <Route path="/classes/clerc" element={<h1>Clerc</h1>} />
                    <Route path="/classes/barde" element={<h1>Barde</h1>} />

                    {/* Races */}
                    <Route path="/races" element={<h1>Races</h1>} />
                    <Route path="/races/humains" element={<h1>Humains</h1>} />
                    <Route path="/races/nains" element={<h1>Nains</h1>} />
                    <Route path="/races/elfes" element={<h1>Elfes</h1>} />

                    {/* Quêtes */}
                    <Route path="/quetes" element={<h1>Quêtes</h1>} />
                    <Route path="/quetes/table" element={<h1>Tableau de Quêtes</h1>} />
                    <Route path="/quetes/selectione" element={<h1>Quêtes séléctioné</h1>} />

                    {/* Codex */}
                    <Route path="/codex" element={<h1>Codex</h1>} />
                    <Route path="/codex/armes" element={<h1>Armes</h1>} />
                    <Route path="/codex/armes/legendaires" element={<h1>Armes légendaires</h1>} />
                    <Route path="/codex/armures" element={<h1>Armures</h1>} />
                    <Route path="/codex/consommables" element={<h1>Consommables</h1>} />

                    {/* Outils */}
                    <Route path="/outils" element={<h1>Outils</h1>} />
                    <Route path="/outils/des" element={<Dé/>} />

                    {/* Historique */}
                    <Route path="/historique" element={<h1>Historique</h1>} />
                    <Route path="/historique/chronologie" element={<h1>Chronologie</h1>} />
                    <Route path="/historique/ages" element={<h1>Âges du monde</h1>} />
                    <Route path="/historique/evenements" element={<h1>Événements majeurs</h1>} />
                    <Route path="/historique/personnages" element={<h1>Personnages historiques</h1>} />

                    {/* Univers */}
                    <Route path="/univers" element={<h1>Univers</h1>} />
                    {/* Paramètres */}
                    <Route path="/parametre" element={<h1>Paramètres</h1>} />

                    {/* 404 */}
                    <Route path="*" element={<h1>Page introuvable</h1>} />
                </Routes>
            </div>
        </>
    );
}

export default App;