// import { Link } from "react-router-dom";
import { useMediaQuery } from "./useMediaQuery"
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";



const LINKS = [
    { name: "Accueil", path: "/", icon: "🏠" },
    { name: "Classes", path: "/classes", icon: "🛡️" },
    { name: "Races", path: "/races", icon: "🧬" },
    { name: "Quêtes", path: "/quetes", icon: "📜" },
    { name: "Objets", path: "/objets", icon: "⚔️" },
    { name: "Outils", path: "/outils", icon: "⚔️" },
    { name: "Paramètres", path: "/parametre", icon: "⚔️" },
];


export function Header() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <header className="header">
            
            <h1>Shadows of Erdalorn</h1>

            {isMobile ? (
                <MobileLayout />
            ) : (
                <DesktopLayout />
            )}
        </header>
    );
}




function MobileLayout() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="mobile-menu" ref={menuRef}>
            <button
                className={`hamburger-btn ${open ? "open" : ""}`}
                onClick={() => setOpen(o => !o)}
                aria-label="Menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`dropdown ${open ? "open" : ""}`}>
                {LINKS.map(link => (
                <Link key={link.path} to={link.path}>
                    <button type="button" onClick={() => setOpen(false)}>
                        <span className="text">{link.name}</span>
                    </button>
                </Link>
            ))}
            </div>
        </div>
    );
}

function DesktopLayout(){
    return (
    <nav>
        {LINKS.map(link => (
                <Link key={link.path} to={link.path}>
                    <button type="button">
                        <span className="text">{link.name}</span>
                    </button>
                </Link>
            ))}
    </nav>
)
    
}