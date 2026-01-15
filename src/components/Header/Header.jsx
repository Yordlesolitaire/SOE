import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { Logo } from "../DATA/Logo";
export function Header() {
    return (
        <header className={styles.header}>
            <Logo/>
            <h1 className={styles.title}>Shadows of Erdalorn</h1>
            <Logo/>
        </header>
    );
}
