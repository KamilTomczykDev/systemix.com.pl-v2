import { Outlet } from "react-router-dom";
import Navbar from "../sections/Navbar";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default AppLayout;
