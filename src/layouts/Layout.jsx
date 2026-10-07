import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import MobileActionBar from "../components/MobileActionBar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Main Content — bottom padding on mobile to clear the fixed action bar */}
      <main className="pb-16 md:pb-0">
        <Outlet />
      </main>

      <MobileActionBar />
    </div>
  );
}
