import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import {
  Home,
  About,
  Contact,
  Destinations,
  DestinationDetails,
} from "./pages/index";
import { MainLayout } from "./layouts/MainLayout";
import { Loading, Error } from "./components/shared/index";
import { loadLocations, loadLocationBySlug } from "./data";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/destinations"
          loader={loadLocations}
          hydrateFallbackElement={<Loading />}
          errorElement={<Error />}
          element={<Destinations />}
        />
        <Route
          path="/destinations/search"
          loader={loadLocations}
          hydrateFallbackElement={<Loading />}
          errorElement={<Error />}
          element={<Destinations />}
        />
        <Route
          path="/destinations/:slug"
          loader={loadLocationBySlug}
          hydrateFallbackElement={<Loading />}
          errorElement={<Error />}
          element={<DestinationDetails />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
