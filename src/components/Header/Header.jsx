import useDevice from "../../functions/device"
import Logo from "../Svg/Logo";
import desk from "../Header/Desktop.module.css"
import Portrait from "../Header/Portrait.module.css";
import Paysage from "../Header/Paysage.module.css";



export default function Header(){
    const { isMobile, isPortrait } = useDevice();
    return(
        <>
        {isMobile ? (<Mobile/>) : (<Desktop />)}
        </>
    )
}

function Desktop(){
    return(
        <header className={desk.header}>
            <div><Logo/></div>
            <h1>Shadows of Erdalorn</h1>
            <div><Logo/></div>
        </header>
    )
}



function Mobile(){
    const { isMobile, isPortrait } = useDevice();
    return(
        <>
            <header className={isPortrait ? (Portrait.header) : (Paysage.header)}>
                <div><Logo/></div>
                <h1>Shadows of Erdalorn</h1>
                <div><Logo/></div>
            </header>
        </>
    )
    
}