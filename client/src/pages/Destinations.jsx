import { Suspense } from "react";
import { useLoaderData } from "react-router";

import { Loading } from "../components/shared/index";
import { DestinationsList } from "../components/destinations/DestinationsList";

export const Destinations = () => {
  const { locations } = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <DestinationsList promise={locations} />
    </Suspense>
  );
};
