import Desk from "./Desktop.module.css"
import Phone from "./Mobile.module.css"
import { Arrow,Accueil,Classes,Settings,Races,Rules,Codex,Objets,Quest,Tools,History,Univers } from "../../data/Svgs"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
const MENU = [
  {
    name: "Accueil",
    path: "/accueil",
    icon: <Accueil />,
    children: [],
  },
  {
    name: "Règles",
    path: "/regles",
    icon: <Rules />,
    children: [],
  },
  {
    name: "Classes",
    path: "/classes",
    icon: <Classes />,
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
    icon: <Races />,
    children: [
      {
        name: "Fizzarains",
        path: "/races/fizzarains",
        bg: "https://png.pngtree.com/thumb_back/fh260/background/20241002/pngtree-submerged-fantasy-underwater-castle-ruins-in-glowing-ethereal-seascape-landscape-sunken-image_16291836.jpg",
        color: "aqua",
      },
      {
        name: "Goliath",
        path: "/races/goliath",
        bg: "https://img.freepik.com/photos-gratuite/paysage-formations-rocheuses-naturelles_23-2151723072.jpg?semt=ais_hybrid&w=740&q=80",
        color: "lightgray",
      },
      {
        name: "Nains",
        path: "/races/nains",
        bg: "https://i.pinimg.com/736x/8e/90/10/8e90101cb16e24f01c1ca8a9af4db01a.jpg",
        color: "#d07b40",
      },
      {
        name: "Elfes",
        path: "/races/elfes",
        bg: "https://fantasy.bnf.fr/fr/albums/imaginaire-foret/img/introtablette.jpg",
        color: "lightgreen",
      },
      {
        name: "Humains",
        path: "/races/humains",
        bg: "https://i.pinimg.com/originals/e5/93/24/e59324bedf58d93ec67728e8ff5e9c10.jpg",
        color: "lightgray",
      },
      {
        name: "Orcs",
        path: "/races/orcs",
        bg: "https://static9.depositphotos.com/1222912/1142/i/450/depositphotos_11420613-stock-photo-desert-fantasy-landscape.jpg",
        color: "#30ad02",
      },
      {
        name: "Drakéides",
        path: "/races/drakeides",
        bg: "https://i.pinimg.com/236x/3b/94/64/3b9464dffab75701c1c0c7112e045bfe.jpg",
        color: "red",
      },
      {
        name: "Tieffelin",
        path: "/races/tieffelin",
        bg: "https://preview.redd.it/hell-concept-art-v0-vtiyb7uliewe1.jpeg?width=640&crop=smart&auto=webp&s=3916377092f573a0414f9e7df43eddce18da5f2b",
        color: "orange",
      },
    ],
  },
  {
    name: "Objets",
    path: "/objects",
    icon: <Objets />,
    children: [],
  },
  {
    name: "Quêtes",
    path: "/quetes",
    icon: <Quest />,
    children: [],
  },
  {
    name: "Codex",
    path: "/codex",
    icon: <Codex />,
    children: [],
  },
  {
    name: "Univers",
    path: "/univers",
    icon: <Univers />,
    children: [],
  },
  {
    name: "Historique",
    path: "/historique",
    icon: <History />,
    children: [],
  },
  {
    name: "Outils",
    path: "/outils",
    icon: <Tools />,
    children: [],
  },
  {
    name: "Paramètres",
    path: "/settings",
    icon: <Settings />,
    children: [],
  },
];





export default function Aside({ device }) {
  const { isMobile } = device;

  return (
    <>
      {isMobile ? <Mobile /> : <Desktop />}
    </>
  );
}


/* -------------------- DESKTOP -------------------- */

function Desktop() {
  const navigate = useNavigate();

  return (
    <aside className={Desk.aside}>
      {MENU.map((item, index) => (
        <div key={index} className={Desk.menu} tabIndex={-1}>
          <button
            onClick={() => navigate(item.path)}
            className={Desk.button}
            tabIndex={-1}
          >
            <span id={Desk.icon}>{item.icon}</span>
            <span id={Desk.text}>
              <h1>{item.name}</h1>
            </span>
            <span id={Desk.arrow}>
              {item.children.length > 0 ? <Arrow /> : null}
            </span>
          </button>

          {item.children.length > 0 ? (
            <Subdesktop Children={item.children} />
          ) : null}
        </div>
      ))}
    </aside>
  );
}

function Subdesktop({ Children }) {
  const navigate = useNavigate();

  return (
    <div className={Desk.submenu}>
      {Children.map((item, index) => (
        <button
          onClick={() => navigate(item.path)}
          key={index}
          tabIndex={-1}
        >
          <h1>{item.name}</h1>
        </button>
      ))}
    </div>
  );
}

/* -------------------- MOBILE -------------------- */

function Mobile() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${Phone.Asidecontainer} ${open ? Phone.open : ""}`}>
      <Burger open={open} setOpen={setOpen} />

      <aside className={Phone.aside}>
        {MENU.map((item, index) => (
          <Menu key={index} item={item} />
        ))}
      </aside>
    </div>
  );
}

function Burger({ open, setOpen }) {
  return (
    <button className={Phone.burger} onClick={() => setOpen(!open)}>
      <Arrow />
    </button>
  );
}

function Menu({ item }) {
  const [subOpen, setSubOpen] = useState(false);

  return (
    <div className={Phone.main}>
      <MenuMain
        item={item}
        subOpen={subOpen}
        setSubOpen={setSubOpen}
      />
      <SubMenu children={item.children} open={subOpen} />
    </div>
  );
}

function MenuMain({ item, subOpen, setSubOpen }) {
  const navigate = useNavigate();

  return (
    <div className={Phone.menu}>
      <button
        className={Phone.menuBTN}
        onClick={() => navigate(item.path)}
      >
        <span id={Phone.icon}>{item.icon}</span>
        <span id={Phone.text}>
          <h1>{item.name}</h1>
        </span>
      </button>

      {item.children.length > 0 && (
        <SubArrow open={subOpen} setSubOpen={setSubOpen} />
      )}
    </div>
  );
}

function SubArrow({ open, setSubOpen }) {
  return (
    <button
      className={`${Phone.arrow} ${open ? Phone.open : ""}`}
      onClick={() => setSubOpen(!open)}
    >
      <Arrow />
    </button>
  );
}

function SubMenu({ children, open }) {
  const navigate = useNavigate();

  return (
    <div className={`${Phone.submenu} ${open ? Phone.open : ""}`}>
      {children.map((c, i) => (
        <button
          key={i}
          className={Phone.subbtn}
          onClick={() => navigate(c.path)}
          style={{
            background: c.bg
              ? `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${c.bg})`
              : "transparent",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className={Phone.overlay} />
          <h2 style={{ color: c.color || "var(--color_text)" }}>
            {c.name}
          </h2>
        </button>
      ))}
    </div>
  );
}