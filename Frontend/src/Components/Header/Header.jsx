import { Arrow, Logo } from "../SVGs/SVGs"
import useIsMobile from "../../functions/iseMobile"
import Desk from "./Desktop.module.css"
import { useNavigate } from "react-router-dom";
const MENU = [
  {
    name: "Règles",
    path: "/rules",
    children: [],
  },
  {
    name: "Classes",
    path: "/classes",
    children: [
      { name: "Guerrier", path: "/classes/guerrier" },
      { name: "Lamesombre", path: "/classes/lamesombre" },
      { name: "Chasseur", path: "/classes/chasseur" },
      { name: "Incarné", path: "/classes/incarne" },
      { name: "Profanateur", path: "/classes/profanateur" },
      { name: "artificier", path: "/classes/artificier" },
      { name: "artiste martiale", path: "/classes/artiste-martiale" },
      { name: "mage", path: "/classes/mage" },
      { name: "barde", path: "/classes/barde" },
      { name: "clerc", path: "/classes/clerc" },
    ],
  },
  {
    name: "Races",
    path: "/races",
    children: [
      { name: "Humains", path: "/races/humains" },
      { name: "Drakéides", path: "/races/drakeides" },
      { name: "Elfes", path: "/races/elfes" },
      { name: "Fizzarains", path: "/races/fizzarains" },
      { name: "Nains", path: "/races/nains" },
      { name: "Orc", path: "/races/orc" },
      { name: "Tieffelins", path: "/races/tieffelins" },
      { name: "Goliath", path: "/races/goliath" },
    ],
  },
  {
    name: "Objets",
    path: "/objets",
    children: [],
  },
  {
    name: "Atlas",
    path: "/atlas",
    children: [],
  },
  {
    name: "Outils",
    path: "/outils",
    children: [],
  },
  {
    name: "Paramètres",
    path: "/settings",
    children: [],
  },
];



export default function Header() {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? null : <Desktop />}
    </>
  );
}

function Desktop(){
    const navigate = useNavigate()
    return(
        <header className={Desk.header}>
            <div className={Desk.logo}><Logo/></div>
            <div className={Desk.content}>
                <button className={Desk.title} onClick={() => navigate("/")}><h1>Shadows of Erdalorn</h1></button>
                <NavDesk/>
            </div>
            <div className={Desk.logo}><Logo/></div>
        </header>
    )
}



function NavDesk() {
  const navigate = useNavigate();

  return (
    <nav className={Desk.nav}>
      {MENU.map((item, index) => (
        <div className={Desk.Menu} key={index}>
          <button className={Desk.Menubtn} onClick={() => navigate(item.path)}>
            <h2>{item.name}</h2>
            {item.children.length > 0 ? <span><Arrow/></span> : null}
          </button>
          {item.children.length > 0 ? 
            <div className={Desk.submenu}>
              {item.children.map((elt,index) => (
                <button className={Desk.subbtn} onClick={() => navigate(elt.path)}><h4>{elt.name}</h4></button>
              ))}
            </div> 
          
          : null}
        </div>
      ))}

    </nav>
  );
}