import Desk from "./Desktop.module.css"
import Portrait from "./Portrait.module.css"
import Paysage from "./Paysage.module.css"
import { Arrow,Accueil,Classes,Settings,Races,Rules,Codex,Objets,Quest,Tools,History,Univers } from "../../data/Svgs"
import { useState } from "react"
const MENU = [
  {
    name: "Accueil",
    path: "/accueil",
    icon: <Accueil/>,
    children: [],
  },
  {
    name: "Règles",
    path: "/regles",
    icon: <Rules/>,
    children: [],
  },
  {
    name: "Classes",
    path: "/classes",
    icon: <Classes/>,
    children: [
      {
        name: "Guerrier",
        path: "/classes/guerrier",
      },
      {
        name: "Lamesombre",
        path: "/classes/lamesombre",
      },
      {
        name: "Chasseur",
        path: "/classes/chasseur",
      },
      {
        name: "L’Incarné",
        path: "/classes/incarne",
      },
      {
        name: "Profanateur",
        path: "/classes/profanateur",
      },
      {
        name: "Artificier",
        path: "/classes/artificier",
      },
      {
        name: "Artiste martial",
        path: "/classes/artiste-martial",
      },
      {
        name: "Mage",
        path: "/classes/mage",
      },
      {
        name: "Barde",
        path: "/classes/barde",
      },
      {
        name: "Clerc",
        path: "/classes/clerc",
      },
    ],
  },
  {
    name: "Races",
    path: "/races",
    icon: <Races/>,
    children: [
        {
          name: "Fizzarains",
          path: "/races/fizzarains",
        },
        {
          name: "Goliath",
          path: "/races/goliath",
        },
        {
          name: "Nains",
          path: "/races/nains",
        },
        {
          name: "Elfes",
          path: "/races/elfes",
        },
        {
          name: "Humains",
          path: "/races/humains",
        },
        {
          name: "Orcs",
          path: "/races/orcs",
        },
        {
          name: "Drakéides",
          path: "/races/drakeides",
        },
        {
          name: "Tieffelin",
          path: "/races/tieffelin",
        },
    ],
  },
  {
    name: "Objets",
    path: "/objects",
    icon: <Objets/>,
    children: [],
  },
  {
    name: "Quêtes",
    path: "/quetes",
    icon: <Quest/>,
    children: [],
  },
  {
    name: "Codex",
    path: "/codex",
    icon: <Codex/>,
    children: [],
  },
  {
    name: "Univers",
    path: "/univers",
    icon: <Univers/>,
    children: [],
  },
  {
    name: "Historique",
    path: "/historique",
    icon: <History/>,
    children: [],
  },
  {
    name: "Outils",
    path: "/outils",
    icon: <Tools/>,
    children: [],
  },
  {
    name: "Paramètres",
    path: "/settings",
    icon: <Settings/>,
    children: [],
  }
];





export default function Aside({ device, children }) {
  const { isMobile } = device;

  return (
    <>
      {isMobile ? (<Mobile device={device}/>) : (<Desktop/>)}
    </>
  );
}


function Desktop() {
  return (
    <aside className={Desk.aside}>
      {MENU.map((item, index) => (
        <div key={index} className={Desk.menu} tabIndex={-1}>
          <button className={Desk.button} tabIndex={-1}>
            <span id={Desk.icon}>{item.icon}</span>
            <span id={Desk.text}><h1>{item.name}</h1></span>
            <span id={Desk.arrow}>
              {item.children.length > 0 ? <Arrow /> : null}
            </span>
          </button>
          {item.children.length > 0 ? <Subdesktop Children={item.children} /> : null}
        </div>
      ))}
    </aside>
  );
}

function Subdesktop({Children}){
  return(
    <div className={Desk.submenu}>
      {Children.map((item,index) => (
        <button key={index} tabIndex={-1}><h1>{item.name}</h1></button>
      ))}
    </div>
  )
}


function Mobile({ device }) {
  const { isPortrait } = device;
  const style = isPortrait ? Portrait : Paysage;
  const [open, setOpen] = useState(false);

  const opened = open ? style.open : "";

  return (
    <aside className={`${style.aside} ${opened}`}>
      <button
        className={style.burger}
        onClick={() => setOpen(!open)}
      ></button>
    </aside>
  );
}
