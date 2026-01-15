// Aside.jsx
import styles from "./Aside.module.css";
import { useMediaQuery } from "../../functions/useMediaQuery";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Menu dynamique
const MENU = [
  { name: "Accueil", path: "/",
    submenu: [],
    icon:    <svg height={"100%"} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="currentcolor" d="M256 19.27L25.637 249.638 19.27 256 32 268.73l6.363-6.367L256 44.727l217.637 217.636L480 268.73 492.73 256l-6.367-6.363zM96 48v107.273l64-64.002V48zm160 20.727l-192 192V486h64V320h96v166h224V260.727zM288 320h96v80h-96z"></path></g></svg>,
},
  { name: "Classes", path: "/classes", icon: null, submenu: ["Guerreir  "] },
];

export default function Aside() {
  const isPhone = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {isPhone ? <MobileNav /> : <DesktopNav />}
    </>
  );
}

// ----------------------
// Desktop Menu
// ----------------------
function DesktopNav() {
  const navigate = useNavigate();

  return (
    <aside className={styles.aside} id={styles.aside_DESKTOP}>
      {MENU.map((item, index) => (
        <button key={index} className={styles.Menu} onClick={() => navigate(item.path)}>
          <span id={styles.icon}>{item.icon}</span>
          <span id={styles.text}><h1>{item.name}</h1></span>
          <span id={styles.arrow}>{item.submenu.length >= 1 && <svg viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.5303 11.1161C16.0185 11.6043 16.0185 12.3957 15.5303 12.8839L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="currentcolor"></path> </g></svg>}</span>
        </button>
      ))}
    </aside>
  );
}

// ----------------------
// Mobile Menu
// ----------------------
function MobileNav() {
  const [opened, setOpened] = useState(false);
  const isPhone = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();

  // Ferme le menu si l'écran devient desktop
  useEffect(() => {
    if (!isPhone) setOpened(false);
  }, [isPhone]);

  return (
    <aside
      className={`${styles.aside} ${opened ? styles.open : ""}`}
      id={styles.aside_MOBILE}
    >
      {/* Bouton toggle */}
      <button
        className={`${styles.Mobile_opener} ${opened ? styles.open : ""}`}
        onClick={() => setOpened((o) => !o)}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.5303 11.1161C16.0185 11.6043 16.0185 12.3957 15.5303 12.8839L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </aside>
  );
}
