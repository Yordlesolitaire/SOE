import Desk from "./Desktop.module.css"
import Portrait from "./Portrait.module.css"
import Paysage from "./Paysage.module.css"
import Logo from "../../data/Logo";
export default function Header({ device }) {
  const { isMobile, isPortrait } = device;

  return (
    <>
      {isMobile ? (<Mobile device={device}/>) : (<Desktop/>)}
    </>
  );
}


function Desktop(){
    return(
        <header className={Desk.header}>
            <div>
                <Logo/>
            </div>
            <h1>Shadows of Erdalorn</h1>
            <div>
                <Logo/>
            </div>
        </header>
    )
}


function Mobile({device}){
    const { isMobile, isPortrait } = device;
    return(
        <header className={isPortrait ? (Portrait.header) : (Paysage.header)}>
            <div>
                <Logo/>
            </div>
            <h1>Shadows of Erdalorn</h1>
            <div>
                <Logo/>
            </div>
        </header>
    )
}