import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./SideBar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}