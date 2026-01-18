import Desk from "./Desktop.module.css"
import Phone from "./Mobile.module.css"

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


function Mobile({ children }) {
  return (
    <div className={Phone.content}>
      {children}
    </div>
  );
}
