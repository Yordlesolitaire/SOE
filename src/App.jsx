import "./style.css"
import { Header } from "./components/Overlay";
import { Route,Routes } from "react-router-dom";
import Classes from "./pages/Classes";
//import { useState } from "react";

function App() {
    //const [asideOpen, setAsideOpen] = useState(false);

    return (
        <>
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<h1>Accueil</h1>} />
                    <Route path="/classes" element={<Classes/>} />
                    <Route path="/races" element={<h1>Races</h1>} />
                    <Route path="/quetes" element={<h1>Quêtes</h1>} />
                    <Route path="/objets" element={<h1>Objets</h1>} />
                    <Route path="/outils" element={<h1>Outils</h1>} />
                    <Route path="/parametre" element={<h1>Paramètres</h1>} />
                    {/* 404 */}
                    <Route path="*" element={<h1>Page introuvable</h1>} />
                </Routes>
            </div>
        </>
    );
}

export default App;