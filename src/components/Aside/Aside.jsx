// Aside.jsx
import Desktop from "./Desktop.module.css";
import Mobile from "./Mobile.module.css"
import { useMediaQuery } from "../../functions/useMediaQuery";
import { useNavigate } from "react-router-dom";
import {HomeIcon,Arrow,Classes,Races,Quest,Codex,Tools,History,Settings,Univers} from "../Icons"
import { use, useState } from "react";
//import { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";



const MENU = [
  {name: "Accueil",
    path: "/",
    icon: <HomeIcon />,
    children: [],
  },

  {name: "Classes",
  path: "/classes",
  icon: <Classes />,
  children: [
    {
      name: "Guerrier",
      path: "/classes/guerrier",
    },
    {
      name: "Chasseur",
      path: "/classes/chasseur",
    },
    {
      name: "Incarné",
      path: "/classes/incarne",
    },
    {
      name: "Lamesombre",
      path: "/classes/lamesombre",
    },
    {
      name: "Profanateur",
      path: "/classes/profanateur",
    },
    {
      name: "Artiste Martial",
      path: "/classes/artiste-martial",
    },
    {
      name: "Artificier",
      path: "/classes/artificier",
    },
    {
      name: "Mage",
      path: "/classes/mage",
    },
    {
      name: "Clerc",
      path: "/classes/clerc",
    },
    {
      name: "Barde",
      path: "/classes/barde",
    },
  ],
},

  {name: "Races",
    path: "/races",
    icon: <Races/>,
    children: [
      { name: "Humains", path: "/races/humains" },
      { name: "Nains", path: "/races/nains" },
      { name: "Elfés", path: "/races/elfes" },
    ],
  },

  {name: "Quêtes",
    path: "/quetes",
    icon: <Quest />,
    children: [
      { name: "Tableau de quêtes", path: "/quetes/table" },
      { name: "Quete séléctionné", path: "/quetes/selectione" },
    ],
  },

  {name: "Codex",
    path: "/codex",
    icon: <Codex/>,
    children: [
      { name: "Armes", path: "/codex/armes" },
      { name: "Armures", path: "/codex/armures" },
      { name: "Consommables", path: "/codex/consommables" },
    ],
  },

  {name: "Outils",
    path: "/outils",
    icon: <Tools/>,
    children: [
      { name: "Créateur de personnage", path: "/outils/creation-personnage" },
      { name: "Générateur de noms", path: "/outils/generateur-noms" },
      { name: "Lanceur de dés", path: "/outils/des" },
    ],
  },

  {name: "Historique",
    path: "/historique",
    icon: <History/>,
    children: [
      { name: "Chronologie", path: "/historique/chronologie" },
      { name: "Âges du monde", path: "/historique/ages" },
      { name: "Événements majeurs", path: "/historique/evenements" },
      { name: "Personnages historiques", path: "/historique/personnages" },
    ],
  },
  {name: "Univers",
    path: "/univers",
    icon: <Univers/>,
    children: [],
  },
  {name: "Paramètres",
    path: "/parametre",
    icon: <Settings/>,
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
  const navigate = useNavigate()
  return (
    <aside className={Desktop.aside} id={Desktop.aside_DESKTOP}>
      {MENU.map((item, index) => {
        const hasChildren = item.children && item.children.length > 0;
        return (
          <div key={index} className={Desktop.Menu}>
            <button onClick={() => navigate(item.path)}>
              <span id={Desktop.icon}>{item.icon}</span>
              <span id={Desktop.text}><h1>{item.name}</h1></span>
              <span id={Desktop.arrow}>{hasChildren && <Arrow/>  }</span>
            </button>
            {hasChildren && (
              <SubmenuDESKTOP items={item.children} />
            )}
          </div>
        );
      })}
    </aside>
  );
}

function SubmenuDESKTOP({ items }) {
  const navigate = useNavigate();

  return (
    <div className={Desktop.submenu}>
      {items.map((item, index) => {
        const hasChildren = item.children?.length > 0;

        return (
          <div key={index} className={Desktop.submenuItem}>
            <button onClick={() => navigate(item.path)}>
              <h2>{item.name}</h2>
            </button>
          </div>
        );
      })}
    </div>
  );
}