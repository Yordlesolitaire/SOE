import Desk from "./Desktop.module.css"
import Portrait from "./Portrait.module.css"
import Paysage from "./Paysage.module.css"

export default function Content({ device, children }) {
  const { isMobile } = device;

  return (
    <>
      {isMobile ? (
        <Mobile device={device}>{children}</Mobile>
      ) : (
        <Desktop>{children}</Desktop>
      )}
    </>
  );
}



function Desktop({ children }) {
  return (
    <div className={Desk.content}>
      {children}
    </div>
  );
}


function Mobile({ device, children }) {
  const { isPortrait } = device;

  return (
    <div className={isPortrait ? Portrait.content : Paysage.content}>
      {children}
    </div>
  );
}
