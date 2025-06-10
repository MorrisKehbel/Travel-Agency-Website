import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router";
import { Footer } from "../components/Footer";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
