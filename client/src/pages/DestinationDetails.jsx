import { useLoaderData } from "react-router";
import { Suspense } from "react";

import { Loading } from "../components/shared/index";
import { DestinationCard } from "../components/destinations/DestinationCard";

export const DestinationDetails = () => {
  const { location } = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <DestinationCard promise={location} />
    </Suspense>
  );
};
