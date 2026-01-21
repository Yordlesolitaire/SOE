import style from "./Header.module.css"
import { Logo } from "../SVGs/SVGs"

export default function Header(){
    return( 
        <header className={style.header}>
            <div><Logo/></div>
            <div><Logo/></div>
        </header>
    )
}