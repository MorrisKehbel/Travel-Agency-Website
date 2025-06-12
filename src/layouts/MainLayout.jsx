import { Navbar } from "../components/shared/Navbar";
import { Outlet, useLocation } from "react-router";
import { Footer } from "../components/shared/Footer";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "../components/Error";

export const MainLayout = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 bg-white">
        <ErrorBoundary
          FallbackComponent={Error}
          resetKeys={[location.pathname]}
        >
          <Outlet />
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  );
};
