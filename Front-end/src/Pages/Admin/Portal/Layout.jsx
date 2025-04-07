import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ChartColumnBig, Menu, SquareChartGantt, Users } from "lucide-react";
import logo from "@/assets/cookie.png";
import { ProfileDropdown } from "../../../CustomComponent/Admin_Component/Profile_dropdown";

const AdminLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true); // Sidebar open by default on large screens

  const tabs = [
    {
      icon: <ChartColumnBig />,
      title: "Dashboard",
      link: "/admin/dashboard",
    },
    {
      icon: <Users />,
      title: "Manage Users",
      link: "/admin/manageuser",
    },
    {
      icon: <SquareChartGantt />,
      title: "Manage Inventory",
      link: "/admin/manageinventory",
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isMenuOpen ? "w-64" : "w-16"
        } transition-all duration-300 bg-white/10 backdrop-blur-xl shadow-xl p-4 flex flex-col gap-4`}
      >
        {/* Toggle and Logo */}
        <div className="flex items-center justify-between mb-6">
          <button
            className="p-2 rounded-md hover:bg-gray-200 text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
          {isMenuOpen && <img src={logo} alt="Logo" className="w-10 h-10" />}
        </div>

        {/* Navigation Tabs */}
        {tabs.map((tab, index) => (
          <Link key={index} to={tab.link}>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-md transition-all">
              {tab.icon}
              {isMenuOpen && <span className="text-sm">{tab.title}</span>}
            </div>
          </Link>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white/70 backdrop-blur-lg">
          <h2 className="text-lg font-semibold text-gray-800">Admin Panel</h2>
          <ProfileDropdown />
        </nav>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
