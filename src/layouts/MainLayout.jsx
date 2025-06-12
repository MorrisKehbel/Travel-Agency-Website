import { Outlet, useLocation } from "react-router";
import { ErrorBoundary } from "react-error-boundary";

import { Navbar, Footer, Error } from "../components/shared/index";

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
