import { Outlet } from "react-router-dom";

export default function SoeLayout() {
  return (
    <div className="soe-theme">
      <header>Header SOE</header>
      <nav>Menu SOE</nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
