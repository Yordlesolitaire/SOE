import { Outlet } from "react-router-dom";

export default function MyJdrLayout() {
  return (
    <div className="myjdr-theme">
      <header>Header MYJDR</header>
      <nav>Menu MYJDR</nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
