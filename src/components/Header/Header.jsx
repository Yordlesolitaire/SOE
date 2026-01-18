import Desk from "./Desktop.module.css"
import Portrait from "./Mobile.module.css"
import Logo from "../../data/Logo";


export default function Header({ device }) {
  const { isMobile } = device;

  return (
    <>
      {isMobile ? (<Mobile/>) : (<Desktop/>)}
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


function Mobile(){
    return(
        <header className={Portrait.header}>
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