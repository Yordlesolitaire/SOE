import Desk from "./Desktop.module.css"
import Portrait from "./Portrait.module.css"
import Paysage from "./Paysage.module.css"
import { Arrow,Accueil,Classes,Settings } from "../../data/Svgs"

const MENU = [
  {
    name: "Accueil",
    path: "/accueil",
    icon: <Accueil/>,
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
        icon: null,
        children: [],
      },
    ],
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
        <div key={index}>
          <button className={Desk.button}>
            <span id={Desk.icon}>{item.icon}</span>
            <span id={Desk.text}><h1>{item.name}</h1></span>
            <span id={Desk.arrow}>
              {item.children.length > 0 ? <Arrow /> : null}
            </span>
          </button>
        </div>
      ))}
    </aside>
  );
}


function Mobile({ device }) {
  const { isPortrait } = device;

  return (
    <aside className={isPortrait ? Portrait.aside : Paysage.aside}>
    </aside>
  );
}
