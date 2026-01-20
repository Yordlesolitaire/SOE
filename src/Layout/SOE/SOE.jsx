import { Outlet } from "react-router-dom";
import Header from "../../components/Header"
import style from "./SOE.module.css";

export default function SoeLayout() {
  return (
    <div className={style.layout}>
      <Header className={style.header} />
      <Outlet />
    </div>
  );
}