import useIsMobile from "../../functions/iseMobile";
import style from "./Nav.module.css"


const MENU = [
  {
    name:"Acceuil",
    path:"/",
    icon:null,
    children:[],
  },
]



export default function Nav() {
  const isMobile = useIsMobile();

  return (
    <>
        {isMobile ? <p>📱Mobile</p> : <Desktop/>}
    </>
  );
}



function Desktop(){
    return(
        <div className={style.Navcontainer}>
          {MENU.map((index,item) => (
            <button key={index}></button>
          ))}
        </div>
    )
}
