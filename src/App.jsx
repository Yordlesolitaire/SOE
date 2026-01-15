import { Header } from "./components/Header/Header";
import { Route,Routes } from "react-router-dom";
import Aside from "./components/Aside/Aside";
import styles from "./App.module.css"
import "./style/reset.css";
import "./style/variables.css";

//import { useState } from "react";

function App() {
    //const [asideOpen, setAsideOpen] = useState(false);

    return (
        <>
            <Header/>
            <div className={styles.content}>
                <Aside/>
                <main className={styles.main}>
                    <Routes>
                        <Route path="/" element={<h1>Accueil</h1>} />
                        <Route path="/classes" element={<h1>Classes</h1>}/>
                        <Route path="/races" element={<h1>Races</h1>} />
                        <Route path="/quetes" element={<h1>Quêtes</h1>} />
                        <Route path="/codex" element={<h1>Codex</h1>} />
                        <Route path="/outils" element={<h1>Outils</h1>} />
                        <Route path="/historique" element={<h1>Historique</h1>} />
                        <Route path="/parametre" element={<h1>Paramètres</h1>} />
                        {/* 404 */}
                        <Route path="*" element={<h1>Page introuvable</h1>} />
                    </Routes>   
                </main>
            </div>
        </>
    );
}

export default App;