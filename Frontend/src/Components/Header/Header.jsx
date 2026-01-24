import style from "./Header.module.css"
import { Logo } from "../SVGs/SVGs"

export default function Header(){
    return( 
        <header className={style.header}>
            <div><Logo/></div>
            <h1>Shadows of Erdalorn</h1>
            <div><Logo/></div>
        </header>
    )
}