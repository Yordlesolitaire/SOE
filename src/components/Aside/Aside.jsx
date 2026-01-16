// Aside.jsx
import styles from "./Aside.module.css";
import { useMediaQuery } from "../../functions/useMediaQuery";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomeIcon(){
  return(<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="currentcolor" d="M256 19.27L25.637 249.638 19.27 256 32 268.73l6.363-6.367L256 44.727l217.637 217.636L480 268.73 492.73 256l-6.367-6.363zM96 48v107.273l64-64.002V48zm160 20.727l-192 192V486h64V320h96v166h224V260.727zM288 320h96v80h-96z"></path></g></svg>)
}

function Arrow(){
  return <svg height="100%" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.5303 11.1161C16.0185 11.6043 16.0185 12.3957 15.5303 12.8839L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="currentcolor"></path> </g></svg>
}

const MENU = [
  {
    name: "Accueil",
    path: "/",
    icon: <HomeIcon />,
    children: [],
  },

  {
    name: "Classes",
    path: "/classes",
    icon: null,
    children: [
      {
        name: "Guerrier",
        path: "/classes/guerrier",
        children: [
          {
            name: "Berserker",
            path: "/classes/guerrier/berserker",
            children: [],
          },
        ],
      },
      {
        name: "Mage",
        path: "/classes/mage",
        children: [
          {
            name: "Élémentaliste",
            path: "/classes/mage/elementaliste",
            children: [],
          },
        ],
      },
    ],
  },

  {
    name: "Races",
    path: "/races",
    icon: null,
    children: [
      { name: "Humains", path: "/races/humains", children: [] },
      { name: "Nains", path: "/races/nains", children: [] },
      { name: "Elfés", path: "/races/elfes", children: [] },
    ],
  },

  {
    name: "Quêtes",
    path: "/quetes",
    icon: null,
    children: [
      { name: "Principales", path: "/quetes/principales", children: [] },
      { name: "Secondaires", path: "/quetes/secondaires", children: [] },
    ],
  },

  {
    name: "Codex",
    path: "/codex",
    icon: null,
    children: [
      {
        name: "Armes",
        path: "/codex/armes",
        children: [
          {
            name: "Armes légendaires",
            path: "/codex/armes/legendaires",
            children: [],
          },
        ],
      },
      { name: "Armures", path: "/codex/armures", children: [] },
      { name: "Consommables", path: "/codex/consommables", children: [] },
    ],
  },

  {
    name: "Outils",
    path: "/outils",
    icon: null,
    children: [
      { name: "Créateur de personnage", path: "/outils/creation-personnage", children: [] },
      { name: "Générateur de noms", path: "/outils/generateur-noms", children: [] },
      { name: "Lanceur de dés", path: "/outils/des", children: [] },
    ],
  },

  {
    name: "Historique",
    path: "/historique",
    icon: null,
    children: [
      {
        name: "Chronologie",
        path: "/historique/chronologie",
        children: [],
      },
      {
        name: "Âges du monde",
        path: "/historique/ages",
        children: [],
      },
      {
        name: "Événements majeurs",
        path: "/historique/evenements",
        children: [],
      },
      {
        name: "Personnages historiques",
        path: "/historique/personnages",
        children: [],
      },
    ],
  },
  {
    name: "Paramètres",
    path: "/parametre",
    icon: null,
    children: [],
  },
];





export default function Aside() {
  const isPhone = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {isPhone ? <h1>Mobile</h1> : <DesktopNav />}
    </>
  );
}

// ----------------------
// Desktop Menu
// ----------------------
function DesktopNav() {
  return (
    <aside className={styles.aside} id={styles.aside_DESKTOP}>
    </aside>
  );
}