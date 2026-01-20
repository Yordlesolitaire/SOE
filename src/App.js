import { Routes, Route } from "react-router-dom";
import "./style/reset.css"
import SoeLayout from "./Layout/SOE";
import MyJdrLayout from "./Layout/Myjdr";

import SoeHome from "./pages/SOE/SOEhome";
import MyJdrHome from "./pages/MyJDR/MYJDRhome";
import SoeRace from "./pages/SOE/race";


export default function App() {
  return (
    <Routes>

      <Route path="/soe" element={<SoeLayout />}>
        <Route index element={<SoeHome />} />
        <Route path="race" element={<SoeRace />} />
      </Route>

      <Route path="/myjdr" element={<MyJdrLayout />}>
        <Route index element={<MyJdrHome />} />
      </Route>

    </Routes>
  );
}
